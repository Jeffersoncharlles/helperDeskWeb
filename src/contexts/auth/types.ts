
export interface IAuthContext {
    signed: boolean;
    user: User;
    loading: boolean;
    isAuth: boolean;
    SignUp: (data: ISignUp) => Promise<void>;
    signOut: () => Promise<void>;
    SignIn: (email: string, password: string) => Promise<void>;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    storageSave: (data: User) => Promise<void>
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