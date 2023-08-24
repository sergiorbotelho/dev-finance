import { FaCommentsDollar } from "react-icons/fa";
export const Header = () => {
  return (
    <div className="w-full h-80 bg-[rgb(45,74,34)] text-white ">
      <div className="flex gap-8 justify-center items-center py-8">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-[#49AA26] font-bold text-4xl">Dev</span>Finance
        </h1>
        <FaCommentsDollar color="#FFF" size={58} />
      </div>
    </div>
  );
};
