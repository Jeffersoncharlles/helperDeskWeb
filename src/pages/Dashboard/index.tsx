import { useState } from 'react';
import { FiEdit2, FiMessageSquare, FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import styles from './styles.module.scss';

export const Dashboard = () => {
    const [called, setCalled] = useState([]);
    document.title = 'Dashboard || HelperDesk';

    return (
        <>
            <Header />

            <main className={styles.container}>
                <Title name='Atendimentos'>
                    <FiMessageSquare size={24} />
                </Title>

                {called.length === 0 ? (
                    <section className={`${styles.content} ${styles.dashboard}`}>
                        <span>Nenhum Chamado Registrado...</span>
                        <Link to="/new" className={styles.new}>
                            <FiPlus size={24} />
                            Novo chamado
                        </Link>
                    </section>
                ) : (
                    <>

                        <Link to="/new" className={styles.new}>
                            <FiPlus size={24} />
                            Novo chamado
                        </Link>

                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Cliente</th>
                                    <th scope='col'>Assunto</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Criado em</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Cliente">Jefferson</td>
                                    <td data-label="Assunto">Suporte</td>
                                    <td data-label="Status">
                                        <span className={styles.badge} style={{ backgroundColor: '#5cb85c' }}>Em Aberto</span>
                                    </td>
                                    <td data-label="Cadastrado">20/06/2022</td>
                                    <td data-label="#">
                                        <button className={styles.action} style={{ backgroundColor: '#3583f6' }}>
                                            <FiSearch color='#fff' size={16} />
                                        </button>
                                        <button className={styles.action} style={{ backgroundColor: '#f6a935' }}>
                                            <FiEdit2 color='#fff' size={16} />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
                }
            </main>
        </>
    );
}