import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/ItemListContainer.css";

function ItemListContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const mockProducts = id
        ? [
            { id: 1, name: "Producto 1" },
            { id: 2, name: "Producto 2" },
          ]
        : [
            { id: 3, name: "Producto General 1" },
            { id: 4, name: "Producto General 2" },
          ];

      setTimeout(() => setProducts(mockProducts), 2000);
    };
    fetchProducts();
  }, [id]);

  return (
    <div className="container">
      <h1>Productos {id ? `de la categoría ${id}` : "generales"}</h1>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemListContainer;
