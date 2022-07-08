import Axios from "../helpers/setupAxios";

export async function getUserService() {
  try {
    return await (
      await Axios.get(`/api/User/user`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}

export async function SearchUserService(searchUser) {
  try {
    return await (
      await Axios.get(`/api/User/seacrhUser`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          query: `${searchUser}`,
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}

export async function UpdateUserService(payload) {
  try {
    return await (
      await Axios.post(`/api/User/update`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}
export async function getUsersService() {
  try {
    return await (
      await Axios.get(`/api/User/users`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          Skip: 0,
          Take: 10,
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}
