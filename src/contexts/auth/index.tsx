import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import firebase from "../../services/firebaseConnection";
import { configTost } from "./helpers";
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
                        toast.success('Bem vindo a plataforma!', configTost as any)
                    })
            }).catch((error) => {
                console.log(error)
                toast.error('Ops algo deu errado!', configTost as any)
                setIsAuth(false);
            })
    }

    const SignIn = async (email: string, password: string) => {
        setIsAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                let uid = user?.uid;
                const userProfile = await firebase.firestore()
                    .collection('users')
                    .doc(uid).get();
                let data = {
                    uid: user?.uid,
                    name: userProfile.data()?.name,
                    email: user?.email,
                    avatarUrl: userProfile.data()?.avatarUrl
                }
                setUser(data);
                storageSave(data)
                setIsAuth(false);
                toast.success('Bem vindo de volta!', configTost as any)

            })
            .catch((error) => {
                console.log(error)
                toast.error('Ops algo deu errado!', configTost as any)
                setIsAuth(false)
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
        <AuthContext.Provider
            value={{
                signed: !!user.email, user, loading, isAuth,
                SignUp, signOut, SignIn
            }}

        >
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

//!!user converte para true ou false