import exp from "constants";
import {IRepo} from "../slices/gitApiTypes";
import Image from "next/image";
import {SiNamecheap} from 'react-icons/si'
// @ts-ignore
import {MdDescription} from 'react-icons/md'
import {FcOvertime} from 'react-icons/fc'

function ProjectBox(props: IRepo) {
    return (
        <div className="w-[25%] h-[400px] bg-[#162033] mt-8 flex flex-col items-center">
            <div className="w-[90%] h-[20%]">
                <Image src="/git2.png" alt="Allaz Bairamov git" width={"600"} height={"600"}/>
            </div>
            <div className="w-[90%] h-[80%] mt-[150px]">
                <p className="flex text-xl p-2">
                    <span className="text-slate-200"><SiNamecheap/></span>
                    <span className="text-gray-300">{props.name}</span>
                </p>
                {
                    props.language != undefined && (
                        <p className="flex text-xl p-2">
                            <span className="text-slate-200">
                                <MdDescription/>
                            </span>
                            <span className="text-gray-300">
                                {props.language}
                            </span>
                        </p>
                    )
                }
                <p className="flex text-xl p-2">
                    <span className="text-slate-200">
                        <FcOvertime/>
                    </span>
                    <span className="text-gray-300">
                        {new Date(props.created_at).toUTCString()}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ProjectBox;