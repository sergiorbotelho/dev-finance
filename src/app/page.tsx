"use client";
import { ButtonAdd } from "@/components/ButtonAdd/buttonAdd";
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
      <div>
        <Header />
        <ButtonAdd showModal={openModal} />
      </div>
      {showModal && <Modal />}
    </div>
  );
}
