import React from "react";
import { products } from "../Utils";

const ProductCard = () => {
  return (
    <div>
      <p className="my-8  text-2xl text-gray-800 font-bold">Our Products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <a
            key={product.id}
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-60 md:h-48"
              src={product.image}
              alt={product.name}
            />
            <div className="flex flex-col justify-between p-4">
              <h5 className="mb-2 text-lg font-semibold text-gray-900">
                {product.name}
              </h5>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xl font-bold text-red-600">
                  <span className="text-2xl text-gray-600 font-bold">
                    Price:{" "}
                  </span>
                  ₹{product.price}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
