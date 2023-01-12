import React from 'react'
import SkillCircle, {props} from "./SkillCircle";
import SkillBox from "./SkillBox";



function ResumeBox(props: props)
{
    return(
        <div className = "w-64 h-64 bg-[#162033] mt-12 ml-3">
            <div>
                <SkillCircle ration={props.ration} percentText={props.percentText} title={props.title}/>
            </div>
        </div>
    )
}
export default ResumeBox;