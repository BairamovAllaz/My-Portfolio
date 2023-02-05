import React from "react";
import { IconType } from "react-icons";
import {MdDeveloperMode} from 'react-icons/md'
interface props{
    icon : IconType;
    title : string;
    about : string;
}

function ServiceBox(props:props)
{
    return(
        <div className="w-[90%] mt-3 sm:mt-0 sm:w-2/6 h-full bg-slate-300 bg-[#162033] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  duration-300 cursor-pointer">
            <div className= "flex">
                <div className = "w-24 h-24 bg-slate-800 flex justify-center items-center sm:m-3 rounded-full">
                    <props.icon className="text-5xl text-[#72e2ae]"/>
                </div>
            </div>
            <div>
                <div className="text-slate-200 font-bold p-3">
                    <h1>{props.title}</h1>
                </div>
            </div>
            <div>
                <div className = "p-3 text-gray-300">
                    <p>{props.about}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceBox;