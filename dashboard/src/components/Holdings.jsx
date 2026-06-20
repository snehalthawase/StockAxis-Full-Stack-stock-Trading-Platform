import React from "react";
// import { holdings } from "../data/data";
import { useState , useEffect} from "react";
import axios from 'axios';
import { VerticalGraph } from "./VerticalChart";

const Holdings = () => {

  let [allHolding , setallHolding] = useState([]);

useEffect(()=>{
    axios.get("http://localhost:8080/allHolding")
    .then((res)=>{
      console.log(res.data);
      setallHolding(res.data);
    })
    .catch((e)=>{
      console.log(e);
    });
  } , []);


//  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = allHolding.map((subArray)=>subArray["name"]);

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: allHolding.map((stock) =>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

  return (
    <>
      <h3 className="title">Holdings ({allHolding.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          { allHolding.map((stock,index)=>{
            const currVal = stock.price * stock.qty;
            const isProfit =  currVal - stock.avg * stock.qty >=0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass  = stock.isLoss ? "loss" : "profit";

            return(
           <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{currVal.toFixed(2)}</td>  
            <td className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2)}</td>
            <td className={profClass}>{stock.net}</td>
            <td className={dayClass}>{stock.day}</td>
        </tr>
            )
          })}

        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
       
      </div>
       <div>
            <VerticalGraph data={data}/>  
        </div>
    </>
  );
};

export default Holdings;
