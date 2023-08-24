import { FiArrowUpCircle } from "react-icons/fi";

export const CardVlaue = () => {
  return (
    <div className="bg-white w-96 p-4 rounded-md ">
      <div className="flex justify-between items-center gap-2">
        <h3 className="text-lg text-[${data.cor}]">Entradas</h3>
        <FiArrowUpCircle color={"#408b50"} size={32} />
      </div>
      <p className="font-semibold text-3xl">R$ 12.000,00</p>
    </div>
  );
};
