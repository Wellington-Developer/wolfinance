import './style.css';
import InputsSide from "../Components/InputsSide";
import ResumeSales from '../Components/ResumeSales';
import GraphicSales from '../Components/GraphicSales';
import { useUserContext } from '../UserContext';

function Overview() {
  const { data } = useUserContext();
  if(!data) return null;
  
  return (
    <div className="overview-container">
      <div className="top-side_overview">
        <div className="about-overview">
          <p>Bem vindo ao</p>
          <h1>resumo<span>.</span></h1>
        </div>
        <InputsSide />
      </div>
      <ResumeSales />
      <GraphicSales data={data} />
    </div>
  )
}

export default Overview;