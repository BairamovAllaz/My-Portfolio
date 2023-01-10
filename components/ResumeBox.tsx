import React from 'react'
import SkillCircle, {props} from "./SkillCircle";

function ResumeBox(props: props)
{
    return(
        <div className = "w-64 h-48 bg-[#162033] mt-12 ml-3">
            <SkillCircle ration={props.ration}/>
        </div>
    )
}
export default ResumeBox;