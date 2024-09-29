import { Schema, model } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const eCom = model("ProductDatas", schema);

export default eCom;
