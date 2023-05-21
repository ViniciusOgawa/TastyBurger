import { SubmitHandler, useForm } from "react-hook-form";
import { MediumButtonGreen } from "../../styles/buttons";
import { GlobalStyle } from "../../styles/global";
import { Input } from "../Input";
import { FormRegisterContainer } from "./style";
import { registerSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link2 } from "../../styles/buttons";
import { useContext } from "react";
import { UserContext } from "../../provider/UserContext";

interface iRegisterData {
  name: string;
  password: string;
  email: string;
  passwordConfirmation: string;
}

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  const { loadingRegister, userRegister } = useContext(UserContext);

  const submit: SubmitHandler<iRegisterData> = (data) => {
    userRegister(data);
  };

  return (
    <FormRegisterContainer>
      <GlobalStyle />
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <h1>Cadastro</h1>
          <Link2 to={"/login"}>Retornar para o login</Link2>
        </div>
        <Input
          type="text"
          placeholder="Digite seu nome"
          id="name"
          label="Nome"
          {...register("name")}
        />
        <span className="alert">{errors.name?.message}</span>
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
        <Input
          type="password"
          placeholder="Digite sua senha novamente"
          id="passwordConfirmation"
          label="Confirmar senha"
          {...register("passwordConfirmation")}
        />
        <span className="alert">{errors.passwordConfirmation?.message}</span>
        <MediumButtonGreen disabled={loadingRegister}>
          {loadingRegister ? "Cadastrando..." : "Cadastrar"}
        </MediumButtonGreen>
      </form>
    </FormRegisterContainer>
  );
};
