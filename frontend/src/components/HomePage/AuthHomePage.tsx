import axios from "axios";
import { useEffect, useState } from "react";
import MyInformation from "../../MyInformation";

export interface IGetUserList {
    _id: String;
    name: string;
    email: string;
    passsord: string;
    role: string;
    __v: number;
}

function AuthHomePage() {
    const [users, setUsers] = useState<IGetUserList[]>([]);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        async function fetchData(){
            axios
            .get("https://localhost:3000/users/list", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                const userList: IGetUserList[] = response?.data?.users;
                setUsers(userList || []);
            })
            .catch((error) => {
                alert("Error fetching users ");
            });
        }
        fetchData();


    }, []);

    return (
        <div>
            {users?.map((user, index) => {

                return ( <MyInformation 
                    key={index}
                    email={user?.email}
                    name={user?.name} id={0}                    />
                );
            })}
        </div>
    );

}
export default AuthHomePage;
