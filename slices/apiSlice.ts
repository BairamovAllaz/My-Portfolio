import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {IRepo} from "./gitApiTypes";
import {stat} from "fs";

interface IApiSlice {
    repos: IRepo[] | null,
    filteredRepos: IRepo[] | null,
}

const initialState : IApiSlice = {
    repos : [],
    filteredRepos : []
};

export const fetchGithubRepos = createAsyncThunk(
    'users/fetchByIdStatus',
    async (thunkAPI) => {
        const response = await getGithubRepos();
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
        filterByLanguage: (state, action: PayloadAction<string>) => {
            if(action.payload != "All")
            {
                // @ts-ignore
                state.filteredRepos = state?.repos?.filter((el) => el.language == action.payload);
            }else{
                state.filteredRepos = state.repos;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGithubRepos.fulfilled, (state, action) => {
            // @ts-ignore
            if(state?.repos?.length == 0) {
                action.payload?.map(pay => {
                    // @ts-ignore
                    state?.repos?.push(pay);
                    state?.filteredRepos?.push(pay);
                })
            }
        })
    },
});

export const { filterByLanguage } = repoSlice.actions;

export default repoSlice.reducer;
