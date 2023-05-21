import { Header } from "../../components/Header";
import { CardList } from "../../components/CardList";
import { Cart } from "../../components/Cart";
import { useContext } from "react";
import { ProductContext } from "../../provider/ProductContext";
import { MediumButtonGreen } from "../../styles/buttons";
import { HomeContainer } from "./style";

export const Home = () => {
  const { cart, filterProducts, setFilterProducts, value } =
    useContext(ProductContext);

  return (
    <>
      <Header />
      {!!filterProducts.length && (
        <HomeContainer>
          <p className="pResult">
            Resultados para: <span>{value}</span>
          </p>
          <MediumButtonGreen onClick={() => setFilterProducts([])}>
            Limpar busca
          </MediumButtonGreen>
        </HomeContainer>
      )}
      <CardList />
      {cart && <Cart />}
    </>
  );
};
