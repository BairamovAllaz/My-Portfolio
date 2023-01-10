import React from 'react'

export interface props{
    ration : any
}

function SkillCircle(props : props)
{

    React.useLayoutEffect(() => {
        document.documentElement.style.setProperty('--ratio',props.ration);
        console.log(props.ration)
    },[])

    return(
        <div className = "flex justify-center items-center">
            <div className="
             h-[150px] w-[150px]
             rounded-[50%]
             relative
             .clip-path-style
             before:content-['']
             before:relative
             before:w-full
             before:h-full
             before:top-[0]
             before:left-[0]
             before:bg-[conic-gradient(red 0 calc(0.3 * 360deg), lime calc(0.3 * 360deg) 360deg)]
             before:z-[-2]
             after:content-['']
             after:relative
             after:w-[80%]
             after:h-[80%]
             after:top-[10%]
             after:left-[10%]
             after:bg-slate-200
             after:rounded-[50%]
             after:z-[-1]
             "></div>
        </div>
    )
}
export default SkillCircle;