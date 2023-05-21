import { useContext } from "react";
import { ProductContext } from "../../provider/ProductContext";
import { CartContainer } from "./style";
import { DefaultButtonGrey } from "../../styles/buttons";
import { CartProduct } from "../CartProduct";

export const Cart = () => {
  const { cartProducts, setCartProducts, setCart } = useContext(ProductContext);

  const total = () => {
    const total = cartProducts.reduce((acc, currentValue) => {
      return acc + currentValue.price;
    }, 0);

    return total.toFixed(2);
  };

  return (
    <CartContainer>
      <div className="Modal">
        <div className="ModalHeader">
          <h1 className="title">Carrinho de compras</h1>
          <button onClick={() => setCart(false)}>X</button>
        </div>
        {!!cartProducts.length ? (
          <div className="boxTotal">
            <ul>
              {cartProducts.map((element, index) => {
                return <CartProduct product={element} key={index} />;
              })}
            </ul>
            <div className="bar"></div>
            <div>
              <p>Total</p>
              <span>R$ {total()}</span>
            </div>
            <DefaultButtonGrey onClick={() => setCartProducts([])}>
              Remover todos
            </DefaultButtonGrey>
          </div>
        ) : (
          <div className="noItensBox">
            <p>Sua sacola está vazia</p>
            <span>Adicione itens</span>
          </div>
        )}
      </div>
    </CartContainer>
  );
};
