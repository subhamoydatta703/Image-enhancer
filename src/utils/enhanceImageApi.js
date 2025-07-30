import axios from 'axios';

const API_KEY = 'wx1v1vbxlaf5fxjbg';
const BASE_URL = 'https://techhk.aoscdn.com/';

export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file);
        console.log("Image uploaded successfully, Task Id: ", taskId);
        const enhancedImageData = await pollEnhancedImage(taskId);
        console.log("Enhanced Image Data: ", enhancedImageData);
        return enhancedImageData;
    } catch (error) {
        console.log("Error in enhancing image: ", error.message);
        throw error;
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    });

    if (!data?.data?.task_id) {
        throw new Error("Failed to upload Image. Task Id not found.");
    }

    console.log(data);
    return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY": API_KEY,
        },
    });

    if (!data?.data) {
        throw new Error("Failed to fetch enhanced Image. Image not found.");
    }

    return data.data;
};

const pollEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    if (result.state === 4) {
        console.log("Processing....");

        if (retries >= 10) {
            throw new Error("Maximum tries reached. Please try again later.");
        }

        await new Promise(resolve => setTimeout(resolve, 3000));
        return pollEnhancedImage(taskId, retries + 1);
    }

    console.log("Enhanced Image url: ", result);
    return result;
};
