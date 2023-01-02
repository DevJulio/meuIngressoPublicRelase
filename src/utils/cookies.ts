
export const setCookie = (cname: string, cvalue: any, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getCookie = (cname: string) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return JSON.parse(c.substring(name.length, c.length));
        }
    }
    return "";
}


export const eraseCookie = (name: string) => {
    const token = getCookie(name);
    setCookie(name, JSON.stringify(token.token), 0);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    setCookie,
    getCookie,
    eraseCookie
}