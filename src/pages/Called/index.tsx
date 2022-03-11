import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import styles from './styles.module.scss';

export const Called = () => {
    const [topic, setTopic] = useState('Suporte')
    const [status, setStatus] = useState('Aberto')
    const [subject, setSubject] = useState('')

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }

    const handleChangeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(e.target.value)
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
                        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
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
                                onChange={(e) => setStatus(e.target.value)}
                                checked={status === 'Aberto'}
                            />
                            <span>Em Aberto</span>

                            <input
                                type="radio"
                                name="radio"
                                value="Progresso"
                                onChange={(e) => setStatus(e.target.value)}
                                checked={status === 'Progresso'}
                            />
                            <span>Em Progresso</span>

                            <input
                                type="radio"
                                name="radio"
                                value="Atendido"
                                onChange={(e) => setStatus(e.target.value)}
                                checked={status === 'Atendido'}
                            />
                            <span>Finalizado</span>
                        </div><br />

                        <label htmlFor="Complemento">Complemento</label>
                        <textarea
                            placeholder='Descreva seu problema (opcional).'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />

                        <button type='submit'>Registrar</button>
                    </form>

                </section>
            </main>
        </>
    );
}