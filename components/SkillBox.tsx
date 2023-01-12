import React from "react";

interface props{
    skillTitle: string;
    skillPercent:number;
}
function SkillBox(props:props)
{
    return(
        <div className="min-w-[48%] h-24 mt-8 ml-4 ">
            <div className="pt-8 pb-4 text-slate-200 text-xl font-bold">
                <h1>{props.skillTitle} - <span className="text-[#72E2AE]">({props.skillPercent}%)</span></h1>
            </div>
            <div>
                <div className="w-full h-[20px] bg-[#233F45] rounded-full">
                    <div className="h-[20px] bg-[#72E2AE] rounded-lg" style={{width:`${props.skillPercent}%`}}/>
                </div>
            </div>
        </div>
    )
}
export default SkillBox;