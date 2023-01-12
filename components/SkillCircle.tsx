import React from 'react'

export interface props {
    ration: any;
    percentText:number;
    title:string
}

function SkillCircle(props: props) {
    return (
        /*
           refactor styling percentage border
        **/
        <div className="flex justify-center items-center mt-4">
            <div
                className="
                    relative
                    text-center
                    w-[120px]
                    h-[120px]
                    rounded-full
                    "
                style={{background: `linear-gradient(${props.ration}deg, #72E2AE 50%, transparent 50%), linear-gradient(0deg, #72E2AE 50%, lightgray 50%)`}}>
                <div className="
                relative
                top-[10px]
                left-[10px]
                text-center
                w-[100px]
                h-[100px]
                rounded-full
                bg-[#162033]
                flex
                justify-center
                items-center
                text-slate-200
                font-bold
                text-2xl
                ">
                    <div>
                        %{props.percentText}
                    </div>
                </div>
                <div className="m-6 text-slate-200 font-bold pt-5 text-center">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

export default SkillCircle;