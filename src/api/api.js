import axios from "@/utils/http.js"


export const login= (params) =>axios.post("/api/login",params);

export const register= (params)=>axios.post("/api/register",params);
