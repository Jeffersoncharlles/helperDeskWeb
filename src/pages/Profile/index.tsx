import { Header } from '../../components/Header';
import { Title } from '../../components/Title';

import { FiSettings, FiUpload } from 'react-icons/fi'
import styles from './styles.module.scss'
import { useState } from 'react';
import { useAuth } from '../../contexts/auth';

import avatar from '../../assets/avatar.png'

interface IUser {
    name: string;
    email: string;
    avatarUrl: string;
}

export const Profile = () => {
    const { user, signOut } = useAuth();
    const [name, setName] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

    return (
        <>
            <Header />
            <main className={styles.container}>
                <section>
                    <Title name="Meu perfil">
                        <FiSettings size={24} />
                    </Title>

                    <div className={styles.content}>
                        <form className={styles.content_form}>
                            <label htmlFor="upload avatar" className={styles.content_form_avatar}>
                                <span>
                                    <FiUpload color="#FFF" size={25} />
                                </span>
                                <input type="file" accept="image/*" onChange={() => { }} />
                                {avatarUrl === null ?
                                    <img src={avatar} width="250" height="250" alt="Foto de perfil do usuário" />
                                    :
                                    <img src={avatarUrl} width="250" height="250" alt="Foto de perfil do usuário" />
                                }
                            </label>
                            <label htmlFor="Nome">Nome</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                            <label htmlFor="Email">Email</label>
                            <input type="email" value={String(email)} disabled={true} />

                            <button type='submit'>Salvar</button>
                        </form>
                    </div>
                    <div className={styles.content}>
                        <button className={styles.content_logout} onClick={() => signOut()}>Sair</button>
                    </div>
                </section>
            </main>

        </>
    );
}