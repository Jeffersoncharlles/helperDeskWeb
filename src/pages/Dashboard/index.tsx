import { Header } from '../../components/Header';
import { useAuth } from '../../contexts/auth';
import styles from './styles.module.scss'

export const Dashboard = () => {
    const { signOut } = useAuth();
    document.title = 'Dashboard || HelperDesk';

    return (
        <div className="">
            <Header />
            <button onClick={() => signOut()}>Fazer Logout</button>
        </div>
    );
}