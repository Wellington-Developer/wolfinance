import { Link } from 'react-router-dom';
import ButtonSideNav from './ButtonSideNav';
import './style.css';

function SideNav() {
  return (
    <div className="sidenav-container">
      <div className="sidenav-content">
        <h1>WolFinance</h1>
        <ul>
          <li><Link to="/"><ButtonSideNav>Overview</ButtonSideNav></Link></li>
          <li><Link to="/sales"><ButtonSideNav>Vendas</ButtonSideNav></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SideNav;