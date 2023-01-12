import React, { ReactElement, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/auth";
import { getStorage } from "../../utils/storage";

interface Props {
  children: ReactElement;
}

const TokenValidate: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [able, setAble] = useState<boolean>(false);
  // const localAuth: any = useContext(AuthContext);
  const user = getStorage("@AuthFirebase:user");

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    } else {
      setAble(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{able && <>{children}</>}</>;
};

export default TokenValidate;
