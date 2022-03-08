import { Header } from '../../components/Header';
import { Title } from '../../components/Title';

import { FiSettings } from 'react-icons/fi'
import styles from './styles.module.scss'

export const Profile = () => {

    return (
        <>
            <Header />
            <main className={styles.container}>
                <section>
                    <Title name="Meu perfil">
                        <FiSettings size={24} />
                    </Title>

                </section>
            </main>

        </>
    );
}