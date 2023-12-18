import { Link } from "react-router-dom";
import { PRODUCT_HOST_API } from "../../../constants/api-constants";

const ProductItem = (props) => {
  const { name, img, id } = props.product;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <Link to={`/products/${id}`}>Mua</Link>
      </div>
    </div>
  );
};

export default ProductItem;
