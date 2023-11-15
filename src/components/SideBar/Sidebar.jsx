import React, {useState} from "react";
import './Sidebar.css'
import logo from '../../imgs/logo.png'
import {UilSignOutAlt} from "@iconscout/react-unicons"

import { SideBarData } from "../../Data/Data";

export default function SideBar(){

    const [selected, setSelected] = useState(0)

    return(
        <div className="Sidebar">
            <div className="logo"> 
                <img src={logo} alt="logo"/>
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            <div className="menu">
                {SideBarData.map((elem,index)=>{
                    return (
                        <div key={index} onClick={()=>setSelected(index)} className={selected===index? 'menuItem active':'menuItem'}>
                            <elem.icon />
                            <span>
                                {elem.heading}
                            </span>
                        </div>
                    )
                })}
                <div classname='menuItem'>
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    )
}