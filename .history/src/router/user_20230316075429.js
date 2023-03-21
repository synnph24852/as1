import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
export const getAll = async (req, res) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/users`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
