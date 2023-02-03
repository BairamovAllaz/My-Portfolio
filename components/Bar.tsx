import React from 'react'
import Icon from "./Icon";

import {AiOutlineMenu,AiOutlineCloseCircle} from 'react-icons/ai'

import { useSelector, useDispatch } from 'react-redux'
import { toogleisNavigationOpen } from '../slices/stateSlice'
import type { RootState } from '../store'

function Bar() {
    const isNavigationOpen = useSelector((state: RootState) => state.state.isNavigationOpen);
    const dispatch = useDispatch();

    return (
            <div className="hidden sm:block bg-slate-300 fixed top-0 left-0 h-full bg-[#0F172A] border-r-2 border-x-slate-200">
                <div className = "w-full flex justify-center pt-4 h-1/6">
                <Icon size = {60}/>
            </div>
            <div className = "w-full flex justify-center items-center h-5/6">
                {
                    isNavigationOpen ? (
                        <AiOutlineMenu className = "text-4xl text-slate-200 cursor-pointer" onClick = {() => dispatch(toogleisNavigationOpen())}/>
                    ) : (
                            <AiOutlineCloseCircle className = "text-4xl text-slate-200 cursor-pointer" onClick = {() => dispatch(toogleisNavigationOpen())}/>
                    )
                }
            </div>
        </div>
    )
}

export default Bar