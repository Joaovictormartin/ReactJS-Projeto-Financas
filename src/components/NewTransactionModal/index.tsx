import { useState } from "react";
import Modal from "react-modal";

import entradasImg from "../../assets/svg/entradas.svg";
import saidasImg from "../../assets/svg/saidas.svg";
import fecharImg from "../../assets/svg/fechar.svg";

import { Container } from "./styles";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-Close"
      >
        <img src={fecharImg} alt="Fechar" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="button">
          <img src={entradasImg} alt="Entrada" />
          <p>Entrada</p>
        </button>

        <button type="button">
          <img src={saidasImg} alt="Saída" />
          <p>Saída</p>
        </button>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
