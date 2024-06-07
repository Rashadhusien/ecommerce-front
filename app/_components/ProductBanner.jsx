import Image from "next/image";
function ProductBanner({ product }) {
  return (
    <div>
      {product?.attributes?.banner?.data?.attributes?.url ? (
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="banner-product"
          width={500}
          height={500}
          className="rounded-lg w-[500px] object-contain"
        />
      ) : (
        <div
          className={`w-[500px] h-[225px] rounded-lg bg-slate-500 animate-pulse`}
        ></div>
      )}
    </div>
  );
}

export default ProductBanner;
