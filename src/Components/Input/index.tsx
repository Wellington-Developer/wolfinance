import { ComponentProps, Dispatch } from "react";

type IInput = ComponentProps<"input"> & {
  label: string;
  id: string;
  setState: Dispatch<React.SetStateAction<string>>
}

function Input({label, id, setState, ...props}: IInput) {
  
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} {...props} onChange={({target}) => setState(target.value)}/>
    </div>
  )
}

export default Input;