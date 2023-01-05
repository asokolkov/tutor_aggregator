import {V1LoginDto} from "./types";
import {AiFillWallet} from "react-icons/all";

const post = async (url: string, content: any) => {
    return await fetch(url, {
        method: "POST",
        body: JSON.stringify(content),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}

export const login = async (loginDto: V1LoginDto) => {
    const response = await post("/account/signin", loginDto)
    if (response.ok) {
        return AuthenticationStatus.Authenticated;
    }
    if (response.status === 401) {
        return AuthenticationStatus.Unauthenticated;
    }
    return AuthenticationStatus.NoInfo;
}

export const loginViaExternalProvider = async (provider: string, returnUrl: string) => {
    const response = await post(`/account/signin-external?provider=${provider}&returnUrl=${returnUrl}`, {})
    if (response.ok) {
        return AuthenticationStatus.Authenticated;
    }
    if (response.status === 401) {
        return AuthenticationStatus.Unauthenticated;
    }
    return AuthenticationStatus.NoInfo;
}

export enum AuthenticationStatus {
    Authenticated = "Authenticated",
    Unauthenticated = "Unauthenticated",
    NoInfo = "NoInfo"
}