import exp from "constants";
import {IRepo} from "../slices/gitApiTypes";
import Image from "next/image";
import {SiNamecheap} from 'react-icons/si'
// @ts-ignore
import {MdDescription} from 'react-icons/md'
import {FcOvertime} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

function ProjectBox(props: IRepo) {
    return (
        <div className="w-full sm:w-[25%] lg:min-w-[300px] bg-[#162033] mt-8 flex flex-col items-center sm:min-w-[300px]">
            <div className="w-[90%] relative overflow-hidden rounded-lg">
                <Image 
                    src="/git2.png" 
                    alt="Allaz Bairamov git" 
                    width={400} 
                    height={300}
                    className="object-contain transition-transform duration-300 hover:scale-110 pt-2"
                />
            </div>
            <div className="w-[90%] h-[80%] pt-8 pb-8">
                <div className="flex items-center mb-4 p-2">
                    <span className="text-slate-200 mr-3 flex-shrink-0">
                        <SiNamecheap className="w-5 h-5"/>
                    </span>
                    <span className="text-gray-300 text-xl font-medium">{props.name}</span>
                </div>
                {
                        <p className="flex items-center text-lg p-2">
                            <span className="text-slate-200 mr-3 flex-shrink-0">
                                <MdDescription className="w-5 h-5"/>
                            </span>
                            <span className="text-gray-300">
                                {props.language || 'No Language'}
                            </span>
                        </p>
                }
                <div className="flex items-center p-2 mt-4">
                    <span className="text-slate-200 mr-2">
                        <FcOvertime className="w-5 h-5"/>
                    </span>
                    <span className="text-gray-300">
                        {new Date(props.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        })}
                    </span>
                </div>
                <div className="mt-4 p-3">
                    <a 
                        href={props.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 flex items-center"
                    >
                        <span className="text-slate-200 mr-2">
                            <FaGithub className="w-5 h-5"/>
                        </span>
                        <span>View on GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;