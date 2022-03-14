import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss'

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
interface IModal {
    content?: ICalled;
    close?: (item: ICalled) => void;
}

export const Modal = ({ close, content }: IModal) => {

    return (
        <div className={styles.modal}>
            <div className={styles.modal_container}>
                <button className={styles.modal_container_close} onClick={close} >
                    <FiX size={24} />
                </button>

                <section>
                    <h2>Detalhes do chamado</h2>
                    <div className={styles.modal_container_row}>
                        <span>
                            Cliente: <a>{content?.client}</a>
                        </span>
                    </div>
                    <div className={styles.modal_container_row}>
                        <span>
                            Assunto: <a>{content?.topic}</a>
                        </span>
                        <span>
                            Cadastrado em: <a>{content?.created_formatted}</a>
                        </span>
                    </div>
                    <div className={styles.modal_container_row}>
                        <span>
                            Status: <a style={{ backgroundColor: content?.status === 'Aberto' ? '#5cb85c' : '#999', color: '#2b134b' }}>{content?.status}</a>
                        </span>
                    </div>

                    {content?.subject !== '' && (
                        <>
                            <h3>Complemento</h3>
                            <p>
                                {content?.subject}
                            </p>
                        </>
                    )}

                </section>
            </div>
        </div>
    );
}