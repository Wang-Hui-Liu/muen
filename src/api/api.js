import axios from "../utils/http.js";

export const login=(params)=>axios.post("/api/login",params);

export const register=(params)=>axios.post("/api/register",params);

export const allVote=()=>axios.get("/api/vote/allVote");

export const newvote=(params)=>axios.post("/api/vote/newvote",params)

export const groupList=()=>axios.get("/api/group/list")