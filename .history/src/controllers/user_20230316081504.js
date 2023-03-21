import axios from "axios";
import dotenv from "dotenv";
import joi from "joi";
const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});
dotenv.config();
export const getAll = async (req, res) => {
  try {
    //validate
    const { error } = userSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      const { data } = await axios.get(`${process.env.API}/users`);
      if (data.length == 0) {
        res.status(400).json({
          message: "Lấy hết sản phẩm thất bại",
        });
      } else {
        res.status(200).json(data);
      }
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const get = async (req, res) => {
  try {
    const { data } = await axios.get(
      `${process.env.API}/users/${req.params.id}`
    );
    if (data.length == 0) {
      res.status(400).json({
        message: "Lấy 1 sản phẩm thất bại",
      });
    } else {
      res.status(200).json({
        message: "Lấy 1 sản phẩm thành công",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const add = async (req, res) => {
  try {
    const { data } = await axios.post(`${process.env.API}/users`, req.body);
    if (data.length == 0) {
      res.status(400).json({
        message: "Thêm sản phẩm thất bại",
      });
    } else {
      res.status(200).json({
        message: "Thêm sản phẩm thành công",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const update = async (req, res) => {
  try {
    const { data } = await axios.put(
      `${process.env.API}/users/${req.params.id}`,
      req.body
    );
    if (data.length == 0) {
      res.status(400).json({
        message: "Cập nhật sản phẩm thất bại",
      });
    } else {
      res.status(200).json({
        message: "Cập nhật sản phẩm thành công",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const remove = async (req, res) => {
  try {
    await axios.delete(`${process.env.API}/users/${req.params.id}`);
    res.status(200).json({ message: "Xóa sản phẩm thành công" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
