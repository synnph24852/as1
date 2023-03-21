import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export const getAll = async (req, res) => {
  try {
    const { data } = await axios.get(`${process.env.API}/users`);
    if (data.length == 0) {
      res.status(400).json({
        message: "Lấy hết sản phẩm thất bại",
      });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const get = async (req, res) => {
    try {
      const { data } = await axios.get(`${process.env.API}/users/${req.params.id}`);
      if (data.length == 0) {
        res.status(400).json({
          message: "Lấy 1 sản phẩm thất bại",
        });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
}
export const add = async (req, res) => {
    t
}
