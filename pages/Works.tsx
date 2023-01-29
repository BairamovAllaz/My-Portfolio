import Head from "next/head";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGithubRepos} from "../slices/apiSlice";
import {RootState} from "../store";

function Works()
{
    const FetchedRepos = useSelector((state: RootState) => state.gitApi.repos);
    const dispatch = useDispatch();

    React.useEffect(() => {

        // @ts-ignore
        dispatch(fetchGithubRepos());
        console.log(FetchedRepos);
    },[])


    return(
        <>
            <Head>
                <title>Works</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className = "w-screen h-screen flex justify-center">
                <div className="mt-36">
                    <div className="text-center text-slate-100 font-bold text-4xl">
                        <h1>Works</h1>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Works;