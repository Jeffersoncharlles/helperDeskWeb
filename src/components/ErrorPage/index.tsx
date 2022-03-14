import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

export const ErrorPage = () => {

    return (
        <div className={styles.container}>
            <h2>Not Found 404...</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}