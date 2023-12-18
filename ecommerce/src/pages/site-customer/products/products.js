import { useEffect, useState } from "react";
import { getProducts } from "../../../api/product-api";
import ProductItem from "./product-item";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    initPage();
  }, []);

  const initPage = async () => {
    const productsResponse = await getProducts();
    setProducts(productsResponse);
  };

  return (
    <div>
      <h3 className="mt-5">List Product</h3>
      <div className="row justify-content-center">
        {products.map((product) => {
          return <ProductItem product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
