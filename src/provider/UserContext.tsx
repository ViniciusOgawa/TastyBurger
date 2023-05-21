import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useEffect } from "react";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserRegisterProps {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface iUserContext {
  loadingRegister: boolean;
  loadingLogin: boolean;
  userRegister: (formData: iUserRegisterProps) => void;
  userLogin: (formData: iUserLoginProps) => void;
}

interface iUserLoginProps {
  email: string;
  password: string;
}

interface iLoginResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();

  const [loadingRegister, setLoadingRegister] = useState(false);

  const userRegister = async (formData: iUserRegisterProps) => {
    try {
      setLoadingRegister(true);
      const response = await api.post("/users", formData);
      toast.success("Cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    } catch (error) {
      toast.error("Email já cadastrado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoadingRegister(false);
    }
  };

  const [loadingLogin, setLoadingLogin] = useState(false);

  const userLogin = async (formData: iUserLoginProps) => {
    try {
      setLoadingLogin(true);
      const response = await api.post<iLoginResponse>("/login", formData);
      localStorage.clear();
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      toast.success("Login efetuado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } catch (error) {
      toast.error("Senha ou email incorretos!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoadingLogin(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    (async () => {
      try {
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate("/");
      } catch (error) {
        window.localStorage.clear();
      }
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{ loadingRegister, userRegister, loadingLogin, userLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};
