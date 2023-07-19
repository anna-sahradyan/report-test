import React, {useState} from 'react';
import InfoModal from "./InfoModal";

import Users from "./Users";
import Search from "./Search";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <React.Fragment>
            <div className={"container"}>
                <div className="input_div">
                   <Search value={value} setValue={setValue}/>
                </div>
                <section className="users">
                    <Users setOpen={setOpen} value={value} setValue={setValue} users={users} setUsers={setUsers}/>
            </section>
                <InfoModal open={open} setOpen={setOpen} users={users}/>
            </div>

        </React.Fragment>
    );
};

export default Home;
