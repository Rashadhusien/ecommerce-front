"use client";
// import BreadCrumb from "../../_components/BreadCrumb";
import BreadCrumb from "/app/_components/BreadCrumb.jsx";
// import ProductApi from "../../_utils/ProductApi";
import ProductApi from "/app/_utils/ProductApi";
import { useEffect, useState } from "react";
// import ProductBanner from "../../_components/ProductBanner";
import ProductBanner from "/app/_components/ProductBanner.jsx";
// import ProductInfo from "../../_components/ProductInfo";
import ProductInfo from "/app/_components/ProductInfo.jsx";
// import ProductList from "../../_components/ProductList";
import ProductList from "/app/_components/ProductList.jsx";
import { usePathname } from "next/navigation";

function ProductDetails({ params }) {
  const path = usePathname();

  const [productDetails, setProductDetails] = useState({});

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductById_();
  }, [params?.productId]);

  const getProductById_ = () => {
    ProductApi.getProductById(params?.productId).then((res) => {
      // console.log(res.data.data);
      setProductDetails(res.data.data);
      getProductByCategory(res.data.data);
    });
  };

  const getProductByCategory = (product) => {
    ProductApi.getProductByCategory(product?.attributes?.category).then(
      (res) => {
        setProductList(res?.data?.data);
      }
    );
  };

  return (
    <div>
      <BreadCrumb path={path} className="px-10 py-8 md:px-28" />
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-5 max-w-[1200px]  mx-auto justify-around mt-10 ">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div className="mt-24">
        <h2 className="pb-10 text-4xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text md:text-center font-extrabold text-transparent sm:text-5xl">
          Similar Products
        </h2>
        <ProductList productList={productList} />
      </div>
    </div>
  );
}

export default ProductDetails;
