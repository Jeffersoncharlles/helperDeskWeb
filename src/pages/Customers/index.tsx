import styles from './styles.module.scss'
import { Header } from '../../components/Header';

import { Title } from '../../components/Title';

import { FiUser, FiUpload } from 'react-icons/fi'

import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
import { configTost } from '../../contexts/auth/helpers';
import { useState } from 'react';
import { cnpjMask } from '../../utils/Mask';

export const Customers = () => {
    const [nameFantasy, setNameFantasy] = useState('')
    const [cnpj, setCnpj] = useState('');
    const [address, setAddress] = useState('');

    document.title = 'Customers || HelperDesk';


    const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nameFantasy !== '' && cnpj !== '' && address !== '') {
            await firebase.firestore().collection('customers')
                .add({
                    nameFantasy,
                    cnpj,
                    address
                }).then(() => {
                    setNameFantasy('');
                    setCnpj('');
                    setAddress('');

                    toast.success("Empresa Cadastrada com sucesso!", configTost as any)
                }).catch((error) => {
                    toast.error("Ocorreu um erro tenta novamente mais tarde", configTost as any)
                })
        } else {
            toast.error("Preencha todos os campos!", configTost as any)
        }
    }

    return (
        <>
            <Header />
            <main className={styles.container}>
                <Title name="Clientes">
                    <FiUser size={24} />
                </Title>
                <section className={styles.content}>
                    <form className={`${styles.content_form} ${styles.customers}`} onSubmit={handleAdd}>
                        <label htmlFor="Nome fantasia">Nome Fantasia</label>
                        <input type="text" value={nameFantasy} onChange={(e) => setNameFantasy(e.target.value)} />


                        <label htmlFor="CNPJ">CNPJ</label>
                        <input type="text" value={cnpj} onChange={(e) => setCnpj(cnpjMask(e.target.value))} />

                        <label htmlFor="Endereço">Endereço</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

                        <button type='submit'>Cadastrar</button>
                    </form>

                </section>

            </main>
        </>
    );
}