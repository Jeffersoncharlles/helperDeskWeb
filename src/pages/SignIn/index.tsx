import styles from './styles.module.scss'

import Lottie from 'react-lottie';
import animationData from './animation.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    document.title = 'Signin || HelperDesk';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (

        <main className={styles.container}>
            <section className={styles.container_left}>
                <h1>HelperDesk <br /> </h1>
                <div className={styles.container_left_animate}>
                    <Lottie
                        options={defaultOptions}
                    />
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
                    <button type='submit'>Login</button>
                    <Link to="/register">Criar uma Conta</Link>
                </form>

            </section>
        </main>

    );
}