import { useState } from 'react';

import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

//import animationData from './animation.json';
import { useAuth } from '../../contexts/auth';



export const SignUp = () => {
    const { SignUp, isAuth } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    document.title = 'Signin || HelperDesk';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name !== '' && email !== '' && password !== '') {
            let data = { email, password, name }
            SignUp(data);
        }
    }

    return (

        <main className={styles.container}>
            <section className={styles.container_left}>
                <h1>Criar Cadastro <br /> </h1>
                <div className={styles.container_left_animate}>

                </div>
            </section>
            <section className={styles.container_right}>
                <form className={styles.container_right_card} onSubmit={handleSubmit}>
                    <div className={styles.card_textfield}>
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="name"
                            //placeholder='Seu nome'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.card_textfield}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            // placeholder='email@email.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.card_textfield}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder='******'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit'>{isAuth ? 'Carregando..' : 'Cadastrar'}</button>
                    <Link to="/">Já tem uma conta? Entre</Link>
                </form>

            </section>
        </main>

    );
}