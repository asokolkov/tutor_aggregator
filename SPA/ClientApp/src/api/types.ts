export type V1ExternalRegisterDto = {
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    accountType: AccountType
}

export enum AccountType {
    Tutor = "Tutor",
    Student = "Student"
}

export type V1LoginDto = {
    email: string,
    password: string,
    rememberMe: boolean
}

export type V1RegisterDto = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    accountType: AccountType
}