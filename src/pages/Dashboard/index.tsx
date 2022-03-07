import { useAuth } from '../../contexts/auth';
import styles from './styles.module.scss'

export const Dashboard = () => {
    const { signOut } = useAuth();

    return (
        <div className="">
            <button onClick={() => signOut()}>Fazer Logout</button>
        </div>
    );
}