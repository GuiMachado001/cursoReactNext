import { PlayCircleIcon } from "lucide-react";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";


import { Cycles } from "../Cycles";


export function MainForm(){
    return(
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
    );
}