import Head from "next/head";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGithubRepos} from "../slices/apiSlice";
import {RootState} from "../store";
import WorksNavigationButtons from "../components/WorksNavigationButtons";
import ProjectBox from "../components/ProjectBox";
import {FaSpinner} from 'react-icons/fa';
import { AppDispatch } from "../store";

function Works()
{
    const FetchedRepos = useSelector((state: RootState) => state.gitApi.filteredRepos);
    const dispatch = useDispatch<AppDispatch>();
    const [loadCount,setLoadCount] = React.useState<number>(6);

    React.useEffect(() => {
        dispatch(fetchGithubRepos());
    },[dispatch]);

    function handleLoadMore() {
        setLoadCount(loadCount + 6);
    }

    function handleShowLess()
    {
        if(loadCount > 6) {
            setLoadCount(6);
        }
    }

    if(FetchedRepos == null)
    {
        return(
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin">
                    <FaSpinner className="w-12 h-12 text-blue-500" />
                </div>
            </div>
        );
    }
    return(
        <>
            <Head>
                <title>Works</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className = "w-full flex justify-center p-12">
                <div className="mt-12 sm:mt-36 w-full">
                    <div className="text-center text-slate-100 font-bold text-4xl">
                        <h1>Works</h1>
                    </div>
                    <div className = "block" >
                        <div className="flex justify-center">
                            <WorksNavigationButtons/>
                        </div>
                        <div className="w-full h-full flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 ">
                            {
                                FetchedRepos?.slice(0,loadCount).map((work,key) => (
                                        <ProjectBox key = {key} {...work}/>
                                ))
                            }
                        </div>
                        <div className = "flex  flex-wrap  justify-center">
                            {
                                loadCount > 6 ? (
                                    <div>
                                        <button
                                            className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={handleShowLess}
                                        >
                                            Show Less
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handleLoadMore}
                                    >
                                        Load More
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Works;