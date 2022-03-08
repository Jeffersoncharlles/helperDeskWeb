import styles from './styles.module.scss'

interface ITitle {
    children: React.ReactNode;
    name: string;
}

export const Title = ({ children, name }: ITitle) => {

    return (
        <section className={styles.container}>
            {children}
            <span>{name}</span>
        </section>
    );
}