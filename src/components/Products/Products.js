import { Container, Row } from "react-bootstrap";
import useProducts from "../hooks/useProducts";
import Product from "../Product/Product";
import "../Style/Style.css";

const Products = () => {
    const [products] = useProducts([]);

    return (
        <div className="product_section">
            <Container>
                <div className="pt-4">
                    <h1 className="text-start pt-5 pb-1 text-uppercase d-block align-items-center">
                        Some fresh fruit{" "}
                        <div className="text-end ">
                            <button className="text-end btn btn-primary">
                                Manage Inventory
                            </button>
                        </div>
                    </h1>
                </div>
                <Row>
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
