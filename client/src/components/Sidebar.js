import React from 'react';
import "../App.css";
import { SideBarData } from './SideBarData';
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {
          SideBarData.map((val,key)=>{
            return (
              <Link to={val.link}  key={key} className="link">
                <li  className="row" id={window.location.pathname == val.link ? "active" : ""}>
                  <div id='icon'>{val.icon}</div>
                  <div id='title'>{val.title}</div>               
                </li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar;