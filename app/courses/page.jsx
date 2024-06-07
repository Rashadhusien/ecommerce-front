"use client";
import { useEffect, useState } from "react";
import ProductApi from "../_utils/ProductApi";
import ProductList from "../_components/ProductList";

function ProductSection() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    ProductApi.getLatestProducts().then((res) => {
      setProductList(res.data.data);
    });
  };

  return (
    <div className="bg-gray-900 px-4 pb-20" id="header">
      <h2 className="bg-gradient-to-r from-blue-500  to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl py-10  text-center">
        Courses
      </h2>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductSection;
