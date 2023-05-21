import { RegisterContainer } from "./style";
import Logo from "../../img/logo.png";
import icon from "../../img/shopping-bag.svg";
import group from "../../img/group.svg";
import { FormRegister } from "../../components/FormRegister";

export const Register = () => {
  return (
    <RegisterContainer>
      <div className="box">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="boxDescription">
          <div>
            <img src={icon} alt="Icones" />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os
            <strong> melhores</strong> ingredientes.
          </p>
        </div>
        <img src={group} alt="Group" className="group" />
      </div>
      <FormRegister />
    </RegisterContainer>
  );
};
