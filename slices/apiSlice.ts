import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {IRepo} from "./gitApiTypes";
import {stat} from "fs";

interface IApiSlice {
    repos: IRepo[] | null
}

const initialState : IApiSlice = {
    repos : []
};

export const fetchGithubRepos = createAsyncThunk(
    'users/fetchByIdStatus',
    async (thunkAPI) => {
        const response = await getGithubRepos();
        console.log("Redux length: " + response?.length)
        return response;
    }
)

async function getGithubRepos() : Promise<IRepo[] | null>
{
    try{
        const data = await fetch("https://api.github.com/users/BairamovAllaz/repos");
        const jsonData : IRepo[] = await data.json();
        return jsonData;
    }catch(err){
        console.log("Something went wrong");
        return null;
    }
}

export const repoSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGithubRepos.fulfilled, (state, action) => {
            // @ts-ignore
            action.payload?.map(pay => {
                state?.repos?.push(pay);
            })
        })
    },
});

export const {  } = repoSlice.actions;

export default repoSlice.reducer;
