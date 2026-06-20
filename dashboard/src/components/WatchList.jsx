import React from "react";
import { useState , useContext } from "react";
import { watchlist } from "../data/data";
import { Tooltip , Grow } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GeneralContext from "./GeneralContext";
import { DoughNutChart } from "./DoughNutChart";

const labels= watchlist.map((subArray) => subArray["name"]);   //subArray["name"] == subArray.name //and map creates default array
const WatchList = () => {

  const data = {
  labels,
  datasets: [
    {
      label: 'Prices',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return(
            <WatchListItem stock={stock} key={index}/>
          )
        })}
      </ul>
      <DoughNutChart data={data}/>
    </div>
  );
};

export default WatchList;


const WatchListItem = ({stock})=>{

  let [ showWatchListAction , setWatchListAction ] = useState(false);

  //event handlers

  const handleMouseEnter = (e)=>{
    setWatchListAction(true);
  }
  const handleMouseLeave = (e)=>{
    setWatchListAction(false);
  }

  return(
   <>
   <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="item">
      <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
      <div className="itemInfo">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? <KeyboardArrowDownIcon className="down" /> : <KeyboardArrowUpIcon className="up" />}
         <span className="price">{stock.price}</span>
      </div>
      
    </div>
    {showWatchListAction && <WatchListAction uuid={stock.name}/>}
   </li>
   </>
  )
}


const WatchListAction = ({uuid})=>{

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () =>{
    generalContext.openBuyWindow(uuid);
  }

  return(
    <>
    <span className="actions">
    <span >
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} >
       <button className="buy" onClick={handleBuyClick}>Buy</button>
      </Tooltip>
    </span>
    <span >
      <Tooltip title="Sell (s)" placement="top" arrow TransitionComponent={Grow}>
       <button className="sell">Sell</button>
      </Tooltip>
    </span>
     <span >
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
       <button className="action">
       <BarChartOutlinedIcon className="icon"/>
       </button>
      </Tooltip>
    </span>
    <span >
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
       <button className="action">
       <MoreHorizIcon className="icon"/>
       </button>
      </Tooltip>
    </span>
    </span>
    </>
  )
}