import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import close from "../../assets/close.png";
import Entradas from "../../assets/Entradas.png"
import Saídas from "../../assets/Saídas.png"

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
        className="react-modal-close"
      >
        <img src={close} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Nome" />
        <input type="number" placeholder="Preço" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={Entradas} alt="Entradas" />
            <span>Entrada</span>
          </button>
            <button type="button">
            <img src={Saídas} alt="Saídas" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
