import React, {useEffect} from 'react';
import {getUsers} from "../api";
import User from "./User";

const Users = ({users,setUsers,value, setOpen}) => {

    const toggleModal = () => {
        setOpen(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
            setUsers(filteredData);
            console.log(users)
        }
        fetchData();
    }, [value]);
    return (
        <>

            <div className="inner-items">
                {users.map((user, index) => {
                    if (index < 6) {
                        return <User toggleModal={toggleModal} key={index} item={user}/>
                    } else {
                        return null;
                    }
                })}

            </div>

        </>
    );
};

export default Users;
