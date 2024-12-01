import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2'
  ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
const Nemudar = (e) => {
    console.log(e)
    const data = {
        labels : ['1402/3','1402/3','1402/4','1402/5', '1402/6'],
        datasets:[
          {
            label: 'log Data',
            fill : false,
            lineTension : 0.1,
            backgroundColor : 'rgba(75,192,192,0.4)',
            borderColor : 'rgba(75,192,192,1)',
            borderCapStyle : 'round',
            borderDash: [],
            borderDashOffest: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor : '#fff',
            pointBorderWidth : 1,
            pointHoverRadius : 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius:1,
            pointHitRadius : 10,
            data: [Math.log(e.num), Math.log(e.num+3), Math.log(e.num+5), Math.log(e.num+1), Math.log(e.num-1)]
    
          } 
        ]
    }
    return (
        <div><Bar data={data}/></div>
    )
}
export default Nemudar;