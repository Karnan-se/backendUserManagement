// import { createSlice, nanoid , createAsyncThunk} from "@reduxjs/toolkit"
// import axios from "axios"
// import {sub} from "date-fns"
// import { useDispatch } from "react-redux"

// const intialState ={
//     posts:[],
//     status: Idle,
//     error:null

// }


// export const fetchPosts = createAsyncThunk("post/fetchPosts", async()=>{
//     try {
//         const response = await axios.get("URL")
//         const result = [response.data]
//         return result;
        
        
//     } catch (error) {
//         return error.message
        
//     }
// })

// const postSlice = createSlice({
//     name:"posts",
//     intialState,
    
    
//     reducers:{
//         postAdded :{
//             reducer(state, action){
//             state.posts.push(action.payload)
//         },
//         prepare(title, content, userId){
//             return {
//                 payload:{
//                     id:nanoid(),
//                     title,
//                     content,
//                     userId,
//                     reactions: {
//                         thumpsUp :0,
//                         hearts:0,
//                         wow:0,
//                         rocket:0,
//                         coffee:0
//                     }
//                 }
//             }
//         }

//     },
//     reactionAdded:(state, action)=>{
//         const {postId, reaction} = action.payload
//         // here we got 2 arguments for the reactions
//         const existingPost = state.posts.find(post=> post.id == postId)
//         existingPost.reactions[reaction]++
//         }

//     },
//     // dispatch = useDispatch();
//     // dispatch(reactionAdded(postId, reaction))

//     extraReducers(builder){
//         builder
//         .addCase(fetchPosts.pending, (state, action)=>{
//             state.status = "loading"
//         })
//         .addCase(fetchPosts.fulfilled,(state, action)=>{
//             state.status = "succeeded"
//             let min =1
//             const LoadedPosts = action.payload.map(post =>{
//                 post.date = sub(new Date(),{minutes : min++}).toISOString()
//                 post.reaction ={
//                     thumpsUp :0,
//                     hooray: 0,
//                     heart :0,
//                     eyes:0
//                 }
//                 return post;
//             })
//             state.posts = state.posts.concat(LoadedPosts)
//         })
//         .addCase(fetchPosts.rejected, (state, action)=> {
//             state.status = "rejected"
//             state.error = action.error.message;
//         })
//     }
// })

// export default postSlice.reducer
// export const selectAllpost = (state)=>state.posts.posts
// export const  getStatus = (state)=>state.posts.status
// export const  errorStatus = (state)=>state.posts.error

// export const {postAdded, reactionAdded} = postSlice.actions

// // const OnClick =()=>{
// //     dispatch(postAdded(title, content))
// // }

// // while we creating a createAsyncThink we can import all the 
// // the things to the otherPage and display 
// // use dispacthc for this custom addcase fethPost methods