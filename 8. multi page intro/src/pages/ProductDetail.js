import React from "react";
import { useParams } from "react-router-dom";
const ProductDetailPage = () => {
  const params = useParams(); // for fetching data from back-end

  return (
    <div>
      Product Details!
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetailPage;
