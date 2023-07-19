import axios from "axios";

const url = `http://127.0.0.1:3000`;
export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}`);
        return response.data;

    } catch (err) {
        console.log(err.message)
    }

}