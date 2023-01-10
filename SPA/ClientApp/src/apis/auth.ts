import axiosInstance from './_share';

export enum AccountType {
    Student = "Student",
    Tutor = "Tutor"
}

export type V1LoginDto = {
    email: string,
    password: string,
    rememberMe: boolean,
}


export type V1RegisterDto = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    accountType: AccountType
}

export type V1RegisterViaExternalDto = {
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    accountType: AccountType
}

export default class AuthAPI {
    static async login(loginDto: V1LoginDto): Promise<undefined> {
        await axiosInstance.post('account/signin', loginDto);
        return undefined;
    }

    static async register(registerDto: V1RegisterDto): Promise<undefined> {
        await axiosInstance.post('account/signup', registerDto);
        return undefined;
    }

    static async loginViaExternal(provider: string, returnUrl: string): Promise<undefined> {
        const response = await axiosInstance.get(`account/signin-external`, {
            params: {provider: provider, returnUrl: returnUrl}
        }).then((res) => {
            const {status, headers: {Location}} = res;
            if (status === 302) {
                window.location.href = Location;
            }
        });
        return undefined;
    }

    static async registerViaExternal(registerViaExternalDto: V1RegisterViaExternalDto): Promise<undefined> {
        const response = await axiosInstance.post(`/account/signup-external`, registerViaExternalDto);
        return undefined;
    }
}
