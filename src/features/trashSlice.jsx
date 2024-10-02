import { createSlice, nanoid , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {sub} from "date-fns"

const intialState ={
    id:5, title :"karnan", content:26,
    id:7, title:"thakir", content:19
}
const newIntialState ={
    posts:[],
    status: Idle,
    error:null
}

export const fetchPosts = createAsyncThunk("post/fetchPosts", async()=>{
    try {
        const response = await axios.get("URL")
        const result = [response.data]
        return result;
        
        
    } catch (error) {
        return error.message
        
    }
})

const postSlice = createSlice({
    name:"posts",
    intialState,
    
    
    reducers:{
        postAdded :{
            reducer(state, action){
            state.posts.push(action.payload)
        },
        prepare(title, content, userId){
            return {
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    userId,
                    reactions: {
                        thumpsUp :0,
                        hearts:0,
                        wow:0,
                        rocket:0,
                        coffee:0
                    }
                }
            }
        }

    },
    reactionAdded:(state, action)=>{
        const {postId, reaction} = action.payload
        // here we got 2 arguments for the reactions
        const existingPost = state.posts.find(post=> post.id == postId)
        existingPost.reactions[reaction]++
        }
    

    
    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending, (state, action)=>{
            state.status = "loading"
        })
        .addCase(fetchPosts.fulfilled,(state, action)=>{
            state.status = "succeeded"
            let min =1
            const LoadedPosts = action.payload.map(post =>{
                post.date = sub(new Date(),{minutes : min++}).toISOString()
                post.reaction ={
                    thumpsUp :0,
                    hooray: 0,
                    heart :0,
                    eyes:0
                }
                return post;
            })
            state.posts = state.posts.concat(LoadedPosts)
        })
        .addCase(fetchPosts.rejected, (state, action)=> {
            state.status = "rejected"
        })
    }
})

export default postSlice.reducer
export const selectAllpost = (state)=>state.posts
export const {postAdded} = postSlice.actions

// const OnClick =()=>{
//     dispatch(postAdded(title, content))
// }