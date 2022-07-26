import React, { useState } from 'react'
import "./style.css";
import Menu from "./MenuApi.js";
import Menucard from './Menucard';
function Resturent() {
    const [menuData, setMenuData]=useState(Menu);

    const filterItem = (category) =>{
        const undatedList = Menu.filter((curElem) =>{
            return curElem.category === category;
        })
        setMenuData (undatedList);
    }
  return (
    <>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className="btn-group__item" onClick={(()=> filterItem("breakfast"))}>BreakFast</button>
                <button className="btn-group__item" onClick={(()=> filterItem("lunch"))}>LUNCH</button>
                <button className="btn-group__item" onClick={(()=> filterItem("evening"))}>Evening</button>
                <button className="btn-group__item" onClick={(()=> filterItem("dinner"))}>Diner</button>
                <button className="btn-group__item" onClick={(()=> setMenuData(Menu))}>All</button>
            </div>
        </nav>
       <Menucard menuData={menuData}/>
    </>
  )
}

export default Resturent
