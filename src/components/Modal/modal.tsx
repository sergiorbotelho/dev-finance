import { Transaction } from "@/types/transaction";
import { useState } from "react";

interface Props {
  list: Transaction[];
  setList: React.Dispatch<React.SetStateAction<Transaction[]>>;
  showModal: () => void;
}
export const Modal = ({ showModal, list, setList }: Props) => {
  const [entry, setEntry] = useState("");
  const [valueEntry, setValueEntry] = useState("");
  const [date, setDate] = useState("");

  const handleAddButton = () => {
    setList((prev) => [
      ...prev,
      {
        entry,
        value: valueEntry,
        date,
      },
    ]);
  };

  const closeModal = () => {
    showModal();
  };

  return (
    <div className="w-full h-full bg-black/40 absolute top-0 flex justify-center items-center px-2">
      <div className="max-w-5xl bg-[#f0f2f5] rounded-md p-3">
        <h1 className="font-bold text-lg mb-4 uppercase">Nova Transação</h1>
        <form className="flex flex-col" onSubmit={handleAddButton}>
          <input
            placeholder="Descrição"
            maxLength={20}
            type="text"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className=" p-2 w-full rounded my-2 outline-none"
          />
          <input
            placeholder="0,00"
            type="text"
            value={valueEntry}
            onChange={(e) => setValueEntry(e.target.value)}
            className=" p-2 w-full rounded my-2 outline-none"
          />
          <p className="text-sm">
            Use o sinal - (negativo) para despesas e , (vírgula) para casas
            decimais.
          </p>
          <input
            type="date"
            placeholder="dd/MM/YYYY"
            value={date}
            onChange={(item) => setDate(item.target.value)}
            className=" p-2 w-full rounded my-2 outline-none"
          />
          <div className="flex justify-between items-center gap-2 pt-4 ">
            <button
              className="w-full border-2 border-red-500 px-4 py-2 rounded text-red-500 hover:opacity-60"
              onClick={closeModal}
            >
              Cancelar
            </button>
            <input
              type="submit"
              className="w-full bg-green-500 px-4 py-2 rounded text-white border-green-500 border-2 hover:opacity-70"
              value="Salvar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
