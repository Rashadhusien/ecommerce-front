import ProductItem from "./ProductItem";

import LoadingCard from "./LoadingCard";

function ProductList({ productList }) {
  return productList[0]?.id === undefined ? (
    <LoadingCard productList={productList} />
  ) : (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20">
      {productList.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
