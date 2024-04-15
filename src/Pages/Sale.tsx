import './style.css'

import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import IUser from "../interfaces/IUser";

function Sale() {
  const { id } = useParams();
  const url = `https://data.origamid.dev/vendas/${id}`
  const [data, error, loading] = useFetch<IUser>(url, {})
  if(!data) return null;
  if(loading) return <h1 id="loading">Loading</h1>
  return (
    <div className="sale-container">
      <div>
        <h1>
          {data.status === "pago" && <div id={data.status}></div>}
          {data.status === "falha" && <div id={data.status}></div>}
          {data.status === "processando" && <div id={data.status}></div>}
          {data.nome}</h1>
        <span>{data.id}</span>
        <p id="payment">{data.pagamento}</p>
        {data.parcelas && <p id="x">{data.parcelas} parcelas</p>}
      </div>
      <p id="price">{data.preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })}</p>
    </div>
  )
}

export default Sale;