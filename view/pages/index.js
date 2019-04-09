import Logo from '../components/Logo';
import {
  Container,
  Header,
  HeaderSide,
  HeaderContent,
  Content,
  Footer,
} from '../components/Layout';
import LoginForm from '../components/LoginForm';

export default () => {
  return (
    <Container>
      <Header>
        <HeaderSide>
          <Logo />
        </HeaderSide>
        {/* <HeaderContent>H</HeaderContent> */}
      </Header>
      <Content justifyContent="center">
        <LoginForm />
      </Content>
      <Footer>
        License: <b>MIT</b>
      </Footer>
    </Container>
  );
};
