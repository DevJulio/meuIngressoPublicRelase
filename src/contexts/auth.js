import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../services/firebaseConfig";

export const AuthContext = createContext({});

export const SingInProvider = ({ children }) => {
  const auth = getAuth(app);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");
      const storageToken = sessionStorage.getItem("@AuthFirebase:token");
      if (storageToken && storageUser) {
        setUser(storageUser);
      }
    };
    loadStorageData();
  });

  const signIn = async ({ email, password }) => {
    let retorno = false;
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userLocal = userCredential.user;
        setUser(userLocal);
        const token = userLocal.accessToken;
        sessionStorage.setItem("@AuthFirebase:accessToken", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(userLocal));
        retorno = true;
      })
      .catch((error) => {
        retorno = false;
        return error.message;
      });
    return retorno;
  };
  return (
    <AuthContext.Provider value={{ signIn, signed: !!user, user }}>
      {children}
    </AuthContext.Provider>
  );
};
