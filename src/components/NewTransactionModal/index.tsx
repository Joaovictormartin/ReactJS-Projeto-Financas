import { useState } from "react";
import Modal from "react-modal";

import entradasImg from "../../assets/svg/entradas.svg";
import saidasImg from "../../assets/svg/saidas.svg";
import fecharImg from "../../assets/svg/fechar.svg";

import { Container, TransactionsTypeContainer, RadioBox } from "./styles";

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
  const [type, setType] = useState("deposit");

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

        <TransactionsTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={entradasImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={saidasImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionsTypeContainer>

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
