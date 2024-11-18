"use client";
import { AppDispatch } from "../store";
import { fetchUsersStart, fetchUsersSuccess } from "../userSlice/userSlice";

export const fetchUsersDataApi = () => async (dispatch: AppDispatch) => {
    const apiroute = "https://randomuser.me/api/?results=10";
    dispatch(fetchUsersStart());
    const response = await fetch(apiroute);
    const json = await response.json();
    dispatch(fetchUsersSuccess(json.results));
};
