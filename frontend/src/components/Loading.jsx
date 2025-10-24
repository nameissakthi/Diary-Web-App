import assets from "../assets/assests"

const Loading = ({className}) => {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <img src={assets.loading} alt="Loading" />
      <p className="text-2xl">Loading...</p>
    </div>
  )
}

export default Loading