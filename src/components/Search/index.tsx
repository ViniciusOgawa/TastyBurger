import { SearchContainer } from "./style";
import { MediumButtonGreen } from "../../styles/buttons";
import { useContext } from "react";
import { ProductContext } from "../../provider/ProductContext";
import searchButton from "../../img/searchInput.svg";

export const Search = () => {
  const { setFilterProducts, products, value, setValue } =
    useContext(ProductContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filteredProducts = products.filter((element) => {
      return element.name.toLowerCase().includes(value.toLowerCase());
    });

    setFilterProducts(filteredProducts);
  };

  return (
    <>
      <SearchContainer onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sanduíche"
          onChange={(event) => setValue(event.target.value)}
        />
        <MediumButtonGreen type="submit">
          <img src={searchButton} alt="Botao" />
        </MediumButtonGreen>
      </SearchContainer>
    </>
  );
};
