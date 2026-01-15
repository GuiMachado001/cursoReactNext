import { Container } from './components/Container/index';
import { Logo } from './components/Logo/index'
import { Menu } from './components/Menu/index'

import './styles/theme.css';
import './styles/global.css';

export function App(){
  return(
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  )
}