import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import {toogleisNavigationOpen} from "../slices/stateSlice";
import {useRouter} from 'next/router'
function Navigation() {
    const router = useRouter();
    const dispatch = useDispatch();
    function redirect(path : string) : void
    {
        dispatch(toogleisNavigationOpen());
        router.push(path);
    }

    return(
            <div className = "w-full h-full bg-[#0F172A] flex justify-center text-center cursor-pointer">
                <div
                    className = "w-1/6 h-full flex items-center justify-center border-gray-200 border-2 hover:w-2/6 duration-700 text-6xl font-black"
                    onClick = {() => redirect("/")}
                    >
                    <p className = "text-[#72E2AE]">0.1</p>
                    <h1 className = "text-[#FAFAFA]">Home</h1>
                </div>
                <div
                    className = "w-1/6 h-full flex items-center justify-center border-2 hover:w-2/6 duration-700 text-6xl font-black"
                    onClick = {() => redirect("/About")}>
                    <p className = "text-[#72E2AE]">0.2</p>
                    <h1 className = "text-[#FAFAFA]">About</h1>
                </div>
                <div
                    className = "w-1/6 h-full flex items-center justify-center border-2 hover:w-2/6 duration-700 text-6xl font-black"
                    onClick = {() => redirect("/Resume")}>
                    <p className = "text-[#72E2AE]">0.3</p>
                    <h1 className = "text-[#FAFAFA]">Resume</h1>
                </div>
                <div
                    className = "w-1/6 h-full flex items-center justify-center border-2 hover:w-2/6 duration-700 text-6xl font-black"
                    onClick = {() => redirect("/Works")}>
                    <p className = "text-[#72E2AE]">0.4</p>
                    <h1 className = "text-[#FAFAFA]">Works</h1>
                </div>
                <div
                    className = "w-1/6 h-full flex items-center justify-center border-2 hover:w-2/6 duration-700 text-6xl font-black"
                    onClick = {() => redirect("/Blogs")}>
                    <p className = "text-[#72E2AE]">0.5</p>
                    <h1 className = "text-[#FAFAFA]">Blogs</h1>
                </div>
                <div
                    className = "w-1/6 h-full flex items-center justify-center border-2 hover:w-2/6 duration-700  font-black"
                    onClick = {() => redirect("/Contact")}>
                    <p className = "text-[#72E2AE] text-5xl">0.6</p>
                    <h1 className = "text-[#FAFAFA] text-6xl">Contact</h1>
                </div>
            </div>
    )
}

export default Navigation