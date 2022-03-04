import styles from './styles.module.scss'
export const SignIn = () => {

    return (

        <main className={styles.container}>
            <section className={styles.container_left}>
                <h1>Faca Login <br /> E entre para o nosso time</h1>
            </section>
            <section className={styles.container_right}>
                <div className={styles.container_right_card}>
                    <div className={styles.card_textfield}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder='Digite seu email'
                        />
                    </div>
                    <div className={styles.card_textfield}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder='Digite seu password'
                        />
                    </div>
                    <button>Login</button>
                </div>

            </section>
        </main>

    );
}