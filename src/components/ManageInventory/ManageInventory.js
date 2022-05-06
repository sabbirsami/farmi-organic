import { Container, Table } from "react-bootstrap";
import useProducts from "../hooks/useProducts";
import SingleInventory from "./SingleInventory";

const ManageInventory = () => {
    const [products, setProducts] = useProducts([]);

    return (
        <div>
            <Container>
                <div className="py-5">
                    <h1>Welcome to manage inventory</h1>
                    <div className="py-4">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className="text-start">Name</th>
                                    <th className="text-start">
                                        Supplier Name
                                    </th>
                                    <th className="text-start">Quantity</th>
                                    <th className="text-start">Price</th>
                                    <th className="text-start">
                                        Want To Delete?
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-start">
                                {products.map((product) => (
                                    <SingleInventory
                                        key={product._id}
                                        product={product}
                                    ></SingleInventory>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ManageInventory;
