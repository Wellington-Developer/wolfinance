import './style.css'
import { useUserContext } from "../UserContext";
import ButtonSideNav from '../Components/SideNav/ButtonSideNav';
import { Link } from 'react-router-dom';

function Sales() {
  const { data } = useUserContext();
  if(!data) return null;

  return (
      <div className="overview-container">
        <div className="top-side_overview">
          <div className="about-overview">
            <p>Veja suas</p>
            <h1>vendas<span>.</span></h1>
          </div>
        </div>
        <div className="sales-container">
          <ul>
            {
              data.map((sale) => {
                return (
                  <li>
                    <a href="">{sale.id}</a>
                    <p>{sale.nome}</p>
                    <p>{sale.preco.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL"
                    })}</p>
                    <Link to={`/sale/${sale.id}`}><ButtonSideNav>Visualizar venda</ButtonSideNav></Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
  )
}

export default Sales;