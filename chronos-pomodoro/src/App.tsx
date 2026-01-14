import { Container } from './components/Container/Container';
import { Heading } from './components/Heading/Heading';

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