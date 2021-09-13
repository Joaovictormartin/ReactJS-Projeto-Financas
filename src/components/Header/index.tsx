import logoImg from '../../assets/svg/logo.svg';

import { Container, Content, Logo, Button } from './styles';

export function Header() {
  return(
    <Container>
      <Content>
        <Logo src={logoImg}/>
        <Button type="button">
          Nova transação
        </Button>
      </Content>
    </Container>
  );
}

