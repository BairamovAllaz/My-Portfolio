import React from 'react'
import Icon from "./Icon";
import {AiOutlineMenu,AiOutlineCloseCircle} from 'react-icons/ai'

interface props {
    handleIsNavigationOpen : (event) => void,
    IsNavigationOpen : boolean
}

function Bar(props : props) {
    function handleClick()
    {
        props.handleIsNavigationOpen(!props.IsNavigationOpen);
    }

    return (
            <div className="bg-slate-300 h-screen bg-[#0B1223] border-r-2 border-x-slate-200">
                <div className = "w-full flex justify-center pt-4 h-1/6">
                <Icon size = {60}/>
            </div>
            <div className = "w-full flex justify-center items-center h-5/6">
                {
                    !props.IsNavigationOpen ? (
                        <AiOutlineMenu className = "text-4xl text-slate-200 cursor-pointer" onClick = {handleClick}/>
                    ) : (
                            <AiOutlineCloseCircle className = "text-4xl text-slate-200 cursor-pointer" onClick = {handleClick}/>
                    )
                }
            </div>
        </div>
    )
}

export default Bar