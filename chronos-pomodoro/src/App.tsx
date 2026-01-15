import { Container } from './components/Container/index';
import { Heading } from './components/Heading/index';

import { Logo } from './components/Logo/index'

import './styles/theme.css';
import './styles/global.css';

export function App(){
  return(
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}