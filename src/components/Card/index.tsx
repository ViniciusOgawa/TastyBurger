import { useContext } from "react";
import { ProductContext } from "../../provider/ProductContext";
import { MediumButtonGreen } from "../../styles/buttons";
import { ProductContainer } from "./style";
import { toast } from "react-toastify";

interface iCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
  };
}

interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const Card = ({ product }: iCardProps) => {
  const { cartProducts, setCartProducts } = useContext(ProductContext);

  const addProduct = (product: iProduct) => {
    const find = cartProducts.find((element) => {
      return element.id === product.id;
    });

    if (find === undefined) {
      setCartProducts([...cartProducts, product]);
    } else {
      toast.error("Produto já adicionado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <ProductContainer>
      <div className="boxImg">
        <img src={product.img} alt="Logo" />
      </div>

      <div className="box">
        <h1>{product.name}</h1>
        <p>{product.category}</p>
        <span>R$ {product.price}</span>
        <MediumButtonGreen onClick={() => addProduct(product)}>
          Adicionar
        </MediumButtonGreen>
      </div>
    </ProductContainer>
  );
};
