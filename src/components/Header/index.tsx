import logoImg from "../../assets/svg/logo.svg";

import { Container, Content, Logo, Button } from "./styles";

interface HeaderProps {
  onOpenNewTransactionsModal: () => void;
}

export function Header({onOpenNewTransactionsModal} : HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo src={logoImg} />

        <Button type="button" onClick={onOpenNewTransactionsModal}>
          Nova transação
        </Button>
      </Content>
    </Container>
  );
}
