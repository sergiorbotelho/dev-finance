import { FiPlus } from "react-icons/fi";
export const ButtonAdd = () => {
  return (
    <div className="absolute top-32 flex justify-center items-center w-full ">
      <div className="bg-green-600 w-14 h-14 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80">
        <FiPlus size={35} color="#FFF" />
      </div>
    </div>
  );
};
