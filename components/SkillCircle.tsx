import React from 'react'

export interface props {
    ration: any;
    percentText:number;
    title:string
}

function SkillCircle(props: props) {
    return (
        <div className="flex justify-center items-center mt-4">
            <div
                className="
                    relative
                    text-center
                    w-[120px]
                    h-[120px]
                    rounded-full
                    mt-6
                    "
                style={{
                    background: `conic-gradient(#72E2AE ${props.percentText * 3.6}deg, #162033 ${props.percentText * 3.6}deg)`
                }}>
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
                        {props.percentText}%
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