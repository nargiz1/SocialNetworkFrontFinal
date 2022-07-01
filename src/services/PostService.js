import Axios from "../helpers/setupAxios";
import { useSelector } from "react-redux";

export async function getAllPostsService() {
  try {
    return await (
      await Axios.get(`/api/Post/getAllPosts`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        params: {            
            "skip": 0,
            "take": 10,
        }
      })
      ).data;
  } catch (error) {
    console.log("err: ", error);
  }
};

export async function getUserPostsService(user) {
  try {
    return await (
      await Axios.get(`/api/Post/getUserPosts`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        params:{
          "userId":`${user.id}`
        }
       
      })
      ).data;
  } catch (error) {
    console.log("err: ", error);
  }
};

export async function createPostService(formData) {
  try {
    return await (
      await Axios.post(`/api/Post/create`, formData , {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
        },   
      })
      ).data;
  } catch (error) {
    console.log("err: ", error);
  }
};

