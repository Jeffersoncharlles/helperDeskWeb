import { useEffect, useState } from 'react';
import { FiEdit2, FiMessageSquare, FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import styles from './styles.module.scss';
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
import { formatDate } from '../../utils/format';
import { Modal } from '../../components/Modal';

interface ICalled {
    id: string;
    created_formatted: string;
    created_at: string;
    client: string;
    client_id: string;
    topic: string;
    status: string;
    subject: string;
}

const listRef = firebase.firestore().collection('calls')
    .orderBy('created_at', 'desc')

export const Dashboard = () => {
    const [called, setCalled] = useState<ICalled[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const [lastDocs, setLastDocs] = useState()
    const [showPostModal, setShowPostModal] = useState(false)
    const [detail, setDetail] = useState<ICalled>()
    document.title = 'Dashboard || HelperDesk';

    useEffect(() => {
        loadingCalls();
        return () => {

        }
    }, [])

    const loadingCalls = async () => {
        await listRef.limit(5)
            .get()
            .then((snapshot) => {
                updateState(snapshot)
            })
            .catch((error) => {
                console.log(error);
                toast.error("Ocorreu um erro ao carregar os chamados")
                setLoadingMore(false);
            })
        setLoading(false)
    }

    const updateState = async (snapshot: any) => {
        const isCollectionEmpty = snapshot.size === 0;
        if (!isCollectionEmpty) {
            //se ele nao for vazio
            let list: ICalled[] = [];
            snapshot.forEach((doc: any) => {
                list.push({
                    id: doc.id,
                    topic: doc.data().topic,
                    subject: doc.data().subject,
                    client: doc.data().client,
                    client_id: doc.data().client_id,
                    created_at: doc.data().created_at,
                    status: doc.data().status,
                    created_formatted: formatDate(doc.data().created_at.seconds * 1000 + doc.data().created_at.nanoseconds / 1000000)//converter
                })
            })
            const lastDoc = snapshot.docs[snapshot.docs.length - 1]; //pegando ultimo item buscado

            setCalled(calls => [...calls, ...list])
            //pegando todos os chamado que ja tem , e se ele a carregou mais vai acrescentar mais

            setLastDocs(lastDoc)//ultimo item buscado
        } else {
            setIsEmpty(true);//ta vazio nao tem mais que buscar
        }
        setLoadingMore(false);
    }

    const handleMore = async () => {
        setLoadingMore(true)
        await listRef.startAfter(lastDocs).limit(5)
            .get().then((snapshot) => {
                updateState(snapshot)
            }).catch()
    }

    const togglePostModal = (item: ICalled) => {
        setShowPostModal(!showPostModal)//invertendo de true para false
        setDetail(item);
    }

    if (loading) {
        return (
            <>
                <Header />
                <main className={styles.container}>
                    <Title name='Atendimentos'>
                        <FiMessageSquare size={24} />
                    </Title>
                    <section className={`${styles.content} ${styles.dashboard}`}>
                        <span>Buscando Chamados</span>
                    </section>
                </main>
            </>
        )
    }

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

                                {called.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td data-label="Cliente">{item.client}</td>
                                            <td data-label="Assunto">{item.topic}</td>
                                            <td data-label="Status">
                                                <span
                                                    className={styles.badge}
                                                    style={{ backgroundColor: item.status === 'Aberto' ? '#5cb85c' : '#999' }}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td data-label="Cadastrado">{item.created_formatted}</td>
                                            <td data-label="#">
                                                <button
                                                    className={styles.action}
                                                    style={{ backgroundColor: '#3583f6' }}
                                                    onClick={() => togglePostModal(item)}
                                                >
                                                    <FiSearch color='#fff' size={16} />
                                                </button>
                                                <Link
                                                    className={styles.action}
                                                    style={{ backgroundColor: '#f6a935' }}
                                                    to={`/new/${item.id}`}
                                                >
                                                    <FiEdit2 color='#fff' size={16} />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                        {loadingMore && <h3 style={{ marginTop: 15 }}>Buscando dados...</h3>}
                        {//se nao tiver carregando mais e se nao tiver vazia
                            !loadingMore && !isEmpty &&
                            <button className={styles.more} onClick={handleMore}>Buscar Mais</button>
                        }
                    </>
                )
                }
                {showPostModal && (
                    <Modal
                        content={detail}
                        close={togglePostModal}
                    />
                )}
            </main>
        </>
    );
}