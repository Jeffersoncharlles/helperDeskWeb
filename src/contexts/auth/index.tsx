import { createContext, useContext, useEffect, useState } from "react";
import firebase from "../../services/firebaseConnection";
import { IAuthContext, ISignUp, User } from './types'


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

    const SignUp = async ({ email, password, name }: ISignUp) => {
        setIsAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                let uid = user?.uid;
                await firebase.firestore().collection('users')
                    .doc(uid).set({
                        name: name,
                        avatarUrl: null
                    }).then(() => {
                        let data = {
                            uid: user?.uid,
                            name: name,
                            email: user?.email,
                            avatarUrl: null
                        }
                        setUser(data);
                        storageSave(data)
                        setIsAuth(false);
                    })
            }).catch((error) => {
                console.log(error)
                setIsAuth(false);
            })
    }

    const storageSave = async (data: User) => {
        localStorage.setItem('@deskSystem', JSON.stringify(data))
    }

    const signOut = async () => {
        await firebase.auth().signOut();
        localStorage.removeItem('@deskSystem')
        setUser({} as User)
    }

    return (
        <AuthContext.Provider value={{ signed: !!user.email, user, loading, SignUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

//!!user converte para true ou false