import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const mockProduct = {
        id: 1,
        name: "Producto Detallado",
        description: "Descripción del producto",
      };
      setTimeout(() => setProduct(mockProduct), 2000);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="container">
      {product ? (
        <div className="product-detail">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Cargando detalle del producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
