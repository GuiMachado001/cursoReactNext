import { Container } from './components/Container/index';
import { Logo } from './components/Logo/index'
import { Menu } from './components/Menu/index'
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';

import { PlayCircleIcon } from 'lucide-react';

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

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action="" className='form'>
          <div className="formRow">
            <DefaultInput 
              type='text' 
              id='input' 
              labelText= 'task'
              placeholder='Digite Algo'
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={ <PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  )
}