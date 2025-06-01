import React from "react";

interface props{
    skillTitle: string;
    skillPercent:number;
}
function SkillBox(props:props)
{
    return(
        <div className="w-full sm:w-[48%] h-24 mt-8 ml-4 p-4 bg-[#0B1223] rounded-lg">
            <div className="text-slate-200 text-lg font-bold">
                <div className="flex justify-between items-center">
                    <span>{props.skillTitle}</span>
                    <span className="text-[#72E2AE]">{props.skillPercent}%</span>
                </div>
            </div>
            <div className="mt-2">
                <div className="w-full h-2 bg-[#233F45] rounded-full">
                    <div className="h-2 bg-[#72E2AE] rounded-lg" style={{width:`${props.skillPercent}%`}}/>
                </div>
            </div>
        </div>
    )
}
export default SkillBox;