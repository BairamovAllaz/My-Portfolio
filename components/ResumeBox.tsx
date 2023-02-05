import React from 'react'
import SkillCircle, {props} from "./SkillCircle";
import SkillBox from "./SkillBox";



function ResumeBox(props: props)
{
    return(
        <div className = "w-[80%] h-[250px] rounded-lg sm:w-64 sm:h-64 bg-[#162033] sm:mt-12 mt-8 ml-3">
            <div>
                <SkillCircle ration={props.ration} percentText={props.percentText} title={props.title}/>
            </div>
        </div>
    )
}
export default ResumeBox;