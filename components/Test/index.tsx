"use client";

import { useEffect, useState } from "react";
import { UserType } from "../Type";
import { fetchApiDataCommon } from "@/lib/features/Api/common";
import { fetchUsersSuccess } from "@/lib/features/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Home() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isDataInLocalStorage, setIsDataInLocalStorage] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    {
      const fetchUsers = async () => {
        const apiroute = "https://randomuser.me/api/?results=10";
        try {
          const json = await fetchApiDataCommon(apiroute);
          const userApiData = json?.results;
          if (userApiData) {
            setUsers(userApiData);
            dispatch(fetchUsersSuccess(userApiData));

            localStorage.setItem("userData", JSON.stringify(userApiData));
            setIsDataInLocalStorage(true);
          }
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      fetchUsers();
    }
  }, [dispatch]);

  const navigateToBlog = () => {
    router.push("/Routing/1");
  };

  const blog = () => {
    router.push("/Blog");
  };

  return (
    <div>
      <h1>Fetched Users</h1>
      {isDataInLocalStorage && (
        <div className="text-green-600">● Data saved</div>
      )}
      {users ? (
        <ul>
          {users.map((user: UserType, index) => (
            <li key={user.name.first + index}>
              {user.name.first} {user.name.last} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
      <button className="border-4 border-black m-5" onClick={navigateToBlog}>
        Routing
      </button>
      <button className="border-4 border-black m-5" onClick={blog}>
        Blog
      </button>
    </div>
  );
}
