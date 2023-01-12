export const setStorage = (cname: string, cvalue: object,) => {
    localStorage.setItem(cname, JSON.stringify(cvalue));
}

export const getStorage = (cname: string) => {
    const storedObj = localStorage.getItem(`${cname}`);
    return JSON.parse(storedObj as string)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    setStorage,
    getStorage,
}