import { atom } from "recoil";

export const userAtom= atom({
    key: "userAtom",
    default: {
        firstName: "",
        lastName: "",
        isLoggedin: "false",
        isAdmin: "true",
        token: "",
        touched: false
    }
})

