import { useAuth } from '../../contexts/auth';
import styles from './styles.module.scss'
import avatar from '../../assets/avatar.png';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

export const Header = () => {
    const { user } = useAuth();


    return (
        <header className={styles.container}>
            <picture>
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="Foto Avatar" />
            </picture>

            <Link to="/dashboard">
                <FiHome size={24} color="#fff" />
                Chamados
            </Link>
            <Link to="/customers">
                <FiUser size={24} color="#fff" />
                Clientes
            </Link>
            <Link to="/profile">
                <FiSettings size={24} color="#fff" />
                Configurações
            </Link>

        </header>
    );
}