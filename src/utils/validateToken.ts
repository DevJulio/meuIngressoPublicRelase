import jwtDecode from "jwt-decode";
import { getCookie } from "./cookies";

export const checkToken = () => {
    const token = getCookie("user")
    try {
        const body: any = jwtDecode(token.token);
        return body.exp < Date.now() / 1000;
    } catch (error) {
        return true
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    checkToken
}