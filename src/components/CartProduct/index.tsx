import { useContext } from "react";
import { CartProductContainer } from "./style";
import { ProductContext } from "../../provider/ProductContext";

interface iCartProductProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
  };
}

interface iCartProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const CartProduct = ({ product }: iCartProductProps) => {
  const { cartProducts, setCartProducts } = useContext(ProductContext);

  const removeProduct = (product: iCartProduct) => {
    const deleteList = cartProducts.filter((element) => {
      return element.id !== product.id;
    });

    setCartProducts(deleteList);
  };

  return (
    <CartProductContainer>
      <img src={product.img} alt="" />

      <div className="cartBox">
        <div>
          <h1>{product.name}</h1>
          <p>{product.category}</p>
        </div>

        <button onClick={() => removeProduct(product)}>Remover</button>
      </div>
    </CartProductContainer>
  );
};
