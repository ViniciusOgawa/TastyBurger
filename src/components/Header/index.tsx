import { HeaderContainer } from "./style";
import { GlobalStyle } from "../../styles/global";
import Logo from "../../img/logo.png";
import SearchDefault from "../../img/searchDefault.svg";
import IconLogout from "../../img/logout.svg";
import Cart from "../../img/cart.svg";
import { Search } from "../Search";
import { useContext, useState } from "react";
import { ProductContext } from "../../provider/ProductContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const { setCart, cartProducts } = useContext(ProductContext);

  const Logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <div className="box">
          <img src={Logo} alt="Logo" className="logo" />

          <div className="boxButtons">
            <div className="boxSearch">
              <Search />
            </div>
            <div className="boxCart">
              <div className="counter">
                <p>{cartProducts.length}</p>
              </div>
              <img
                src={Cart}
                alt="Icone de carrinho"
                onClick={() => setCart(true)}
              />
            </div>
            <img
              src={IconLogout}
              alt="Icone de logout"
              onClick={() => Logout()}
            />
          </div>
        </div>
      </HeaderContainer>
    </>
  );
};
