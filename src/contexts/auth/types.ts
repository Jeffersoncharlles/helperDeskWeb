
export interface IAuthContext {
    signed: boolean;
    user: User;
    loading: boolean;
    SignUp: (data: ISignUp) => Promise<void>;
    signOut: () => Promise<void>;
}

export interface User {
    uid?: string;
    name: string;
    email?: string | null;
    avatarUrl?: string | null
}

export interface ISignUp {
    name: string;
    password: string;
    email: string;
}