import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import IUser from "../../interfaces/IUser";

interface VendaDia {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

function transformData(data: IUser[]): VendaDia[] {
  const dias = data.reduce((acc: {[key: string]: VendaDia}, act) => {
    const day = act.data.split(" ")[0];
    if(!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    } 
    acc[day][act.status] += act.preco;
    return acc;
  }, {});


  return Object.values(dias)
}


function GraphicSales({data}: {data: IUser[]}) {
  const transformedData = transformData(data)

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={transformedData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="pago" stroke="#8884d8" strokeWidth={2}/>
        <Line type="monotone" dataKey="processando" stroke="#63C879" strokeWidth={2}/>
        <Line type="monotone" dataKey="falha" stroke="#ffa500" strokeWidth={2}/>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default GraphicSales;