import { LoginContainer } from "./style";
import { FormLogin } from "../../components/FormLogin";
import Logo from "../../img/logo.png";
import icon from "../../img/shopping-bag.svg";
import group from "../../img/group.svg";

export const Login = () => {
  return (
    <LoginContainer>
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
      <FormLogin />
    </LoginContainer>
  );
};
