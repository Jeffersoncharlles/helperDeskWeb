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
    close: (item: any) => void;
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
                            Cliente: <i>{content?.client}</i>
                        </span>
                    </div>
                    <div className={styles.modal_container_row}>
                        <span>
                            Assunto: <i>{content?.topic}</i>
                        </span>
                        <span>
                            Cadastrado em: <i>{content?.created_formatted}</i>
                        </span>
                    </div>
                    <div className={styles.modal_container_row}>
                        <span>
                            Status: <i style={{ backgroundColor: content?.status === 'Aberto' ? '#5cb85c' : '#999', color: '#2b134b' }}>{content?.status}</i>
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