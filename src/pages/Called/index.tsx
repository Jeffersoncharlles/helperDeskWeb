import { FiPlus } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import styles from './styles.module.scss';

export const Called = () => {

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return (
        <>
            <Header />
            <main className={styles.container}>
                <Title name='Novo chamado'>
                    <FiPlus size={24} />
                </Title>

                <section className={`${styles.content}`}>
                    <form className={`${styles.content_form}`} onSubmit={handleRegister}>
                        <label htmlFor="Cliente">Cliente</label>
                        <select>
                            <option key={1} value={1}>Jefferson Charlles</option>
                        </select>
                        <label htmlFor="Assunto">Assunto</label>
                        <select>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Técnica">Visita Técnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label htmlFor="Status">Status</label>
                        <div className={styles.status}>
                            <input
                                type="radio"
                                name="radio"
                                value="Aberto"
                            />
                            <span>Em Aberto</span>

                            <input
                                type="radio"
                                name="radio"
                                value="Progresso"
                            />
                            <span>Em Progresso</span>

                            <input
                                type="radio"
                                name="radio"
                                value="Atendido"
                            />
                            <span>Finalizado</span>
                        </div>

                        <label htmlFor="Complemento">Complemento</label>
                        <textarea
                            placeholder='Descreva seu problema (opcional).'
                        />

                        <button type='submit'>Registrar</button>
                    </form>

                </section>
            </main>
        </>
    );
}