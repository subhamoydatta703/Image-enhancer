import Loading from "./Loading"

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold bg-gray-800 text-white py-2 text-center">Original Image</h2>
        {props.uploaded ? (
          <img className='w-full h-full object-cover' src={props.uploaded} alt="" />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">No Image selected</div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold bg-blue-800 text-white py-2 text-center">Enhanced Image</h2>

        {props.enhanced && !props.loading && (
          <img className='w-full h-full object-cover' src={props.enhanced} alt="" />
        )}

        {props.loading ? (
          <Loading />
        ) : (
          !props.enhanced && <div className="flex items-center justify-center h-80 bg-gray-200">No Enhanced Image</div>
        )}
      </div>

    </div>
  )
}

export default ImagePreview
