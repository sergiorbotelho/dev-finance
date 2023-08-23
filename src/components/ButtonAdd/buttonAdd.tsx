interface Props {
  showModal: () => void;
}
import { FiPlus } from "react-icons/fi";
export const ButtonAdd = ({ showModal }: Props) => {
  return (
    <div className="absolute top-32 flex justify-center items-center w-full ">
      <div
        className="bg-green-600 w-14 h-14 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80"
        onClick={showModal}
      >
        <FiPlus size={35} color="#FFF" />
      </div>
    </div>
  );
};
