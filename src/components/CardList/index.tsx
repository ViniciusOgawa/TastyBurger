import { Card } from "../Card";
import { CardListContainer } from "./style";
import { api } from "../../services/api";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ProductContext } from "../../provider/ProductContext";

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const CardList = () => {
  const token = localStorage.getItem("@TOKEN");
  const { products, setProducts, filterProducts } = useContext(ProductContext);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    (async () => {
      try {
        const response = await api.get<iProducts[]>("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {token ? (
        <CardListContainer>
          <ul>
            {!!filterProducts.length
              ? filterProducts.map((element, index) => {
                  return <Card product={element} key={index} />;
                })
              : products.map((element, index) => {
                  return <Card product={element} key={index} />;
                })}
          </ul>
        </CardListContainer>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
