import exp from "constants";
import {IRepo} from "../slices/gitApiTypes";

function ProjectBox(props : IRepo)
{
    return(
        <div className = "w-[25%] h-[300px] bg-slate-200 mt-8">
            <h1>{props.name}</h1>
        </div>
    )
}
export default ProjectBox;