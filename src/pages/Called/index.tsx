import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { useAuth } from '../../contexts/auth';
import styles from './styles.module.scss';
import firebase from '../../services/firebaseConnection'

interface ICustomers {
    id: string;
    nameFantasy: string;
    address?: string;
    cnpj?: string;
}

export const Called = () => {
    const { user } = useAuth();
    const [customers, setCustomers] = useState<ICustomers[]>([])
    const [loadingCustomers, setLoadingCustomers] = useState(true)
    const [customerSelected, setCustomerSelected] = useState(0)
    const [topic, setTopic] = useState('Suporte')
    const [status, setStatus] = useState('Aberto')
    const [subject, setSubject] = useState('')

    useEffect(() => {
        loadCustomers()
    }, [])

    const loadCustomers = async () => {
        await firebase.firestore().collection('customers')
            .get()
            .then((snapshot) => {
                let list: ICustomers[] = []
                snapshot.forEach((customer) => {
                    list.push({
                        id: customer.id,
                        nameFantasy: customer.data().nameFantasy
                    })
                })

                if (list.length === 0) {
                    setCustomers([{ id: '1', nameFantasy: '', address: '', cnpj: '' }])
                    setLoadingCustomers(false);
                    return;
                }

                setCustomers(list)
                setLoadingCustomers(false)

            })
            .catch((error) => {
                console.log('deu erro')
                setLoadingCustomers(false);
                setCustomers([{ id: '1', nameFantasy: '', address: '', cnpj: '' }])
                //data fake invalid error
            })
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }

    const handleChangeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(e.target.value)
    }

    const handleChangeCustomers = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //console.log('index do client selecionado: ', e.target.value);
        //console.log('cliente selecionado', customers[Number(e.target.value)]);
        setCustomerSelected(Number(e.target.value));

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
                        {loadingCustomers ? (
                            <input type="text" disabled value="carregando clientes..." />
                        ) : (
                            <select value={customerSelected} onChange={handleChangeCustomers}>
                                {customers.map((item, index) => {
                                    return (
                                        <option key={item.id} value={index}>
                                            {item.nameFantasy}
                                        </option>
                                    )
                                })}
                            </select>
                        )}


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