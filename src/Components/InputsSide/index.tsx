import './style.css'
import { useUserContext } from "../../UserContext";
import Input from "../Input";

function InputsSide() {
  const { inicio, setInicio, final, setFinal } = useUserContext();
  
  return (
    <div className="inputside-container">
      <Input id="data_inicio" label="Data de início" type="date" value={inicio} setState={setInicio}/>
      <Input id="data_final" label="Data final" type="date" value={final} setState={setFinal}/>
    </div>
  )
}

export default InputsSide;