import assets from "../assets/assests"

const DotLoading = ({className}) => {

  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        onError={()=>console.log("Error while loading")}
        className="max-w-full h-auto"
      >
        <source src={assets.dot_loading} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DotLoading