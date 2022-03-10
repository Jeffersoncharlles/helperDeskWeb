import { FiEdit2, FiSearch } from 'react-icons/fi';
import styles from './styles.module.scss'

interface ITable {

}

export const Table = () => {

    return (
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
    );
}