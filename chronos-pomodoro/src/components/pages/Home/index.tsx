import { MainTemplate } from "../../../templates/MainTemplates";
import { Container } from "../../Container";
import { CountDown } from "../../CountDown";
import { MainForm } from "../../MainForm";

export function Home(){
  return(
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  )
}