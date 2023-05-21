import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("O email digitado é inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "É necessário pelo menos 6 caracteres"),
  passwordConfirmation: yup
    .string()
    .required("É necessário confirmar a senha")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
