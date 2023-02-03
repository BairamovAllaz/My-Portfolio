import React from "react";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {toogleisMobilNavigationMenuOpen} from "../slices/stateSlice";

function MobilNavigation()
{
    const router = useRouter();
    const dispatch = useDispatch();
    function Navigate(path : string)
    {
        dispatch(toogleisMobilNavigationMenuOpen());
        router.push(path);
    }
    return (
        <div className = "block sm:hidden w-screen h-screen bg-[#0B1223]">
            <div className="flex flex-col justify-center items-center mt-[200px]">
                <p className="text-slate-200 font-bold text-2xl p-5"
                    onClick = {() => Navigate("/")}>
                    <span className = "text-[#72E2AE]">0.1.</span> HOME
                </p>
                <p className="text-slate-200 font-bold text-2xl p-5"
                   onClick = {() => Navigate("/About")}>
                    <span className = "text-[#72E2AE]">0.2.</span> ABOUT
                </p>
                <p className="text-slate-200 font-bold text-2xl p-5"
                   onClick = {() => Navigate("/Resume")}>
                    <span className = "text-[#72E2AE]">0.3.</span> RESUME
                </p>
                <p className="text-slate-200 font-bold text-2xl p-5"
                    onClick = {() => Navigate("/Works")}>
                    <span className = "text-[#72E2AE]">0.4.</span> WORKS
                </p>
                <p className="text-slate-200 font-bold text-2xl p-5"
                   onClick = {() => Navigate("/Blogs")}>
                    <span className = "text-[#72E2AE]">0.5.</span> BLOGS
                </p>
                <p className="text-slate-200 font-bold text-2xl p-5"
                   onClick = {() => Navigate("/Contact")}>
                    <span className = "text-[#72E2AE]">0.6.</span> CONTACT
                </p>
            </div>
        </div>
    )
}
export default MobilNavigation;