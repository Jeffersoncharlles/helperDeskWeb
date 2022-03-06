import { createContext, useContext, useEffect, useState } from "react";
import firebase from "../../services/firebaseConnection";
import { IAuthContext, User } from './types'


const AuthContext = createContext<IAuthContext>({} as IAuthContext);


export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>({} as User);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStorage();

    }, [])

    const loadStorage = () => {
        const storageUser = localStorage.getItem('@deskSystem');

        if (storageUser) {
            setUser(JSON.parse(storageUser));
            setLoading(false)
        }
        setLoading(false)
    }

    return (
        <AuthContext.Provider value={{ signed: !!user.email, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

//!!user converte para true ou false