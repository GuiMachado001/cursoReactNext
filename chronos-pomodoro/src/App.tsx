import { Container } from './components/Container/index';
import { Heading } from './components/Heading/index';

import './styles/theme.css';
import './styles/global.css';

export function App(){
  return(
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}