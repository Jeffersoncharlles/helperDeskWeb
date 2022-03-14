import styles from './styles.module.scss'


import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../contexts/auth';
import * as yup from 'yup';

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string()
})


// import animationData from './animation.json';


export const SignIn = () => {
    const { SignIn, isAuth } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    document.title = 'Signin || HelperDesk';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email !== '' && password !== '') {
            SignIn(email, password)
        }
    }

    return (
        <main className={styles.container}>
            <section className={styles.container_left}>
                <h1>HelperDesk <br /> </h1>
                <div className={styles.container_left_animate}>

                </div>
            </section>
            <section className={styles.container_right}>
                <form className={styles.container_right_card} onSubmit={handleSubmit}>
                    <div className={styles.card_textfield}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder='email@email.com'
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
                    <button type='submit'>{isAuth ? 'Carregando..' : 'Acessar'}</button>
                    <Link to="/register">Criar uma Conta</Link>
                </form>

            </section>
        </main>

    );
}