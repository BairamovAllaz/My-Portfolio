import React from 'react'
import Icon from "./Icon";
import {AiOutlineMenu} from 'react-icons/ai'
function Bar() {
    return (
            <div className="w-24 bg-slate-300 h-screen bg-[#0b1123] border-r-2 border-x-slate-200">
                <div className = "w-full flex justify-center pt-4 h-1/6">
                <Icon size = {60}/>
            </div>
            <div className = "w-full flex justify-center items-center h-5/6">
                <AiOutlineMenu className = "text-4xl text-slate-200 cursor-pointer"/>
            </div>
        </div>
    )
}

export default Bar