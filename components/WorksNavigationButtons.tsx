import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {filterByLanguage} from "../slices/apiSlice";
function WorksNavigationButtons()
{
    const repos = useSelector((state: RootState) => state.gitApi.repos);
    const [programmingLanguages,setProgrammingLanguages] = React.useState<string[] | null>(null);
    const [selected,setSelected] = React.useState<string | null>("All");
    const DisPatch = useDispatch();

    React.useEffect(() => {
            let result : string[] = []
            repos?.map(element => {
                if( element != null && !result.includes(element.language))
                {
                    result.push(element.language);
                }
            })
            result[0] = "All"
            setProgrammingLanguages(result);
    },[repos])

    function handleSelected(element : string)
    {
        setSelected(element)
        DisPatch(filterByLanguage(element));
    }

    if(programmingLanguages == null)
    {
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div className="flex space-x-2 mt-12">
            {
                programmingLanguages?.map((repo,key) => {
                    return (
                        <div key={key}>
                            <div>
                                <button
                                    className="text-white font-bold py-2 px-4 rounded"
                                    style = {{backgroundColor : selected === repo ? '#72E2AE' : '#2D484D'}}
                                    onClick={() => handleSelected(repo)}
                                >
                                    <span style = {{color : selected === repo ? 'black' : '#72E2AE'}}>{repo}</span>
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}
export default WorksNavigationButtons;