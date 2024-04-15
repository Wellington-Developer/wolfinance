import './style.css';
import Resume from "./Resume";
import { useUserContext } from '../../UserContext';

function ResumeSales() {
  const { data } = useUserContext();

  const totalValue = data?.reduce((acc, act) => {
      return acc + act.preco
    }, 0)

  const totalReceived = data?.filter((sale) => sale.status == "pago")
    .reduce((acc, act) => {
      return acc + act.preco
    }, 0)

    const totalProcessing = data?.filter((sale) => sale.status == "processando")
    .reduce((acc, act) => {
      return acc + act.preco
    }, 0)
  
  if(!totalValue) return null;
  if(!totalReceived) return null;
  if(!totalProcessing) return null;

  return (
    <div className="resumesales-container">
      <Resume title="Vendas" value={totalValue} />
      <Resume title="Recebido" value={totalReceived} />
      <Resume title="Processando" value={totalProcessing} />
    </div>
  )
}

export default ResumeSales;