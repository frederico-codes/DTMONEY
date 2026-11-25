import { Container } from "./styles";
import Entradas from "../../assets/Entradas.png";
import Saídas from "../../assets/Saídas.png";
import Total from "../../assets/Total.png";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Entradas} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={Saídas} alt="Saídas" />
        </header>
        <strong>-R$ 1.259,00</strong>
      </div>
      <div className="hightLight-background">
        <header>
          <p>Total</p>
          <img src={Total} alt="Total" />
        </header>
        <strong>R$ 16.141,00</strong>
      </div>
    </Container>
  );
}
