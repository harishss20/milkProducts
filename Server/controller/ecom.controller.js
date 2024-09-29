import eCom from "../model/ecom.model.js";

export const getAllProduct = async (req, res) => {
  try {
    const getProduct = await eCom.find();

    return res.status(200).json(getProduct);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
