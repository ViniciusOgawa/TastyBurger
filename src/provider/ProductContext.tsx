import { createContext } from "react";
import { useState } from "react";

interface iProductProviderProps {
  children: React.ReactNode;
}

interface iProductContext {
  products: iProducts[];
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  cartProducts: iProducts[];
  setCartProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  filterProducts: iProducts[];
  setFilterProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const ProductContext = createContext({} as iProductContext);

export const ProductProvider = ({ children }: iProductProviderProps) => {
  const [products, setProducts] = useState<iProducts[]>([]);
  const [cartProducts, setCartProducts] = useState<iProducts[]>([]);
  const [filterProducts, setFilterProducts] = useState<iProducts[]>([]);
  const [cart, setCart] = useState(false);
  const [value, setValue] = useState("");

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        cart,
        setCart,
        filterProducts,
        setFilterProducts,
        value,
        setValue,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
