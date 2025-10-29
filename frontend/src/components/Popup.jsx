import { AiFillCloseCircle } from "react-icons/ai";

const Popup = ({title, children, open, setOpen}) => {

  return (
    <div
      className={`absolute bg-slate-200 min-w-[50%] min-h-[30%] top-[20%] left-[25%] p-5 z-50 rounded-2xl ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between text-3xl mb-10">
        <h1>{title}</h1>
        <button onClick={()=>setOpen(false)}>
          <AiFillCloseCircle />
        </button>
      </div>
      <div className="px-[2%]">{children && children}</div>
    </div>
  );
};

export default Popup;
