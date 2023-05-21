import { SubmitHandler, useForm } from "react-hook-form";
import { MediumButtonGreen, Link1 } from "../../styles/buttons";
import { GlobalStyle } from "../../styles/global";
import { Input } from "../Input";
import { FormLoginContainer } from "./style";
import { loginSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../provider/UserContext";

interface iLoginData {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const { loadingLogin, userLogin } = useContext(UserContext);

  const submit: SubmitHandler<iLoginData> = (data) => {
    userLogin(data);
  };

  return (
    <FormLoginContainer>
      <GlobalStyle />
      <form onSubmit={handleSubmit(submit)}>
        <h1>Login</h1>
        <Input
          type="email"
          placeholder="Digite seu email"
          id="email"
          label="Email"
          {...register("email")}
        />
        <span className="alert">{errors.email?.message}</span>
        <Input
          type="password"
          placeholder="Digite sua senha"
          id="password"
          label="Senha"
          {...register("password")}
        />
        <span className="alert">{errors.password?.message}</span>
        <MediumButtonGreen disabled={loadingLogin}>
          {loadingLogin ? "Entrando..." : "Entrar"}
        </MediumButtonGreen>
      </form>

      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>

      <Link1 to={"/register"}>Cadastrar</Link1>
    </FormLoginContainer>
  );
};
