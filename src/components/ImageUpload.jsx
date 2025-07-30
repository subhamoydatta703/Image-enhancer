const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    }

    return (
        <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl hover:scale-105 transition-all ease-in-out duration-200'>
            <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-all duration-200 ease-in-out'>
                <input className='hidden' type="file" id='fileInput' onChange={ShowImageHandler} />
                <span className='text-lg font-medium text-gray-600'>Click and drag to upload your image</span>
            </label>
        </div>
    )
}

export default ImageUpload
