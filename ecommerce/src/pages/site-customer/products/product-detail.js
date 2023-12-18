import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../api/product-api";

const ProductDetail = () => {
  //   const params = useParams();
  //   const productId = params.productId;
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const getProductDetail = async () => {
    const productDetail = await getProductById(productId);
    setProduct(productDetail);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <div>
        <img src={product.img} alt="" />
      </div>
      <div>
        <h3>{product.name}</h3>
        <h3>{product.price}</h3>
      </div>
    </div>
  );
};

export default ProductDetail;
