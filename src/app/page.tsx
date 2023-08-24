"use client";
import { ButtonAdd } from "@/components/ButtonAdd/buttonAdd";
import { CardVlaue } from "@/components/CardValue/cardValue";
import { Header } from "@/components/Header/header";
import { Modal } from "@/components/Modal/modal";
import { Transaction } from "@/types/transaction";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const [listEntry, setListEntry] = useState<Transaction[]>([]);

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-full">
      <Header />
      <ButtonAdd showModal={openModal} />
      <div className="flex justify-center items-center gap-4 flex-wrap absolute top-[28%] w-full">
        <CardVlaue />
        <CardVlaue />
        <CardVlaue />
      </div>

      {showModal && (
        <Modal showModal={openModal} list={listEntry} setList={setListEntry} />
      )}

      {listEntry.map((item, key) => (
        <div key={key}>{item.entry}</div>
      ))}
    </div>
  );
}
