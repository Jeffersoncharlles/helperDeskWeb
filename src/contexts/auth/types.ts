
export interface IAuthContext {
    signed: boolean;
    user: User;
    loading: boolean;
}

export interface User {
    name: string;
    email: string;
}