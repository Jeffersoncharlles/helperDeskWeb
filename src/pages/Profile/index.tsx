import { Header } from '../../components/Header';
import { Title } from '../../components/Title';

import { FiSettings, FiUpload } from 'react-icons/fi'
import styles from './styles.module.scss'
import { useState } from 'react';
import { useAuth } from '../../contexts/auth';

import avatar from '../../assets/avatar.png'

import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
import { configTost } from '../../contexts/auth/helpers';


export const Profile = () => {
    const { user, signOut, setUser, storageSave } = useAuth();
    const [name, setName] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState<File | null | undefined>(null);

    document.title = 'Profile || HelperDesk';

    const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        //aqui cria um preview 

        if (e.target.files?.[0]) {
            const image = e.target.files?.[0];
            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setImageAvatar(image);

                //criar o preview
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            } else {
                toast.warning("Envie imagem do tipo PNG ou JPEG", configTost as any);
                setImageAvatar(null)
                return null;
            }
        }
        // console.log(e.target.files[0])
    }

    const handleUpload = async () => {
        const currentUid = user.uid;

        //salvar a imagem na storage 
        const uploadTask = await firebase.storage()
            .ref(`images/${currentUid}/${imageAvatar?.name}`)
            .put(imageAvatar as File)
            .then(async () => {

                //pegar a url image para salvar na tabela user
                await firebase.storage().ref(`images/${currentUid}`)
                    .child(imageAvatar?.name as string).getDownloadURL()
                    .then(async (url) => {
                        let urlFoto = url;

                        //salvar url na tabela users
                        await firebase.firestore().collection('users')
                            .doc(user.uid)
                            .update({
                                avatarUrl: urlFoto,
                                name: name
                            }).then(() => {
                                let data = { ...user, name: name, avatarUrl: urlFoto }
                                setUser(data);
                                storageSave(data);
                                toast.success("Foto Salva com Sucesso", configTost as any);
                            })
                    })
            })

    }


    const handleChange = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //se so ta mudando o nome e nao a foto 
        if (imageAvatar === null && name !== '') {
            await firebase.firestore().collection('users')
                .doc(user.uid)
                .update({
                    name: name
                })
                .then(() => {
                    let data = { ...user, name: name }
                    setUser(data);
                    storageSave(data);
                    toast.success("Nome alterado com sucesso!", configTost as any)
                }).catch((error) => {
                    toast.error("Ocorreu um erro!tente mais tarde!", configTost as any)
                })
        } else if (name !== '' && imageAvatar !== null) {
            //se for mudar o nome e a foto 
            handleUpload();
        }

    }

    return (
        <>
            <Header />
            <main className={styles.container}>
                <section>
                    <Title name="Meu perfil">
                        <FiSettings size={24} />
                    </Title>

                    <div className={styles.content}>
                        <form className={styles.content_form} onSubmit={handleChange}>
                            <label htmlFor="upload avatar" className={styles.content_form_avatar}>
                                <span>
                                    <FiUpload color="#FFF" size={25} />
                                </span>
                                <input type="file" accept="image/*" onChange={handleFile} />
                                {avatarUrl === null ?
                                    <img src={avatar} width="250" height="250" alt="Foto de perfil do usuário" />
                                    :
                                    <img src={avatarUrl} width="250" height="250" alt="Foto de perfil do usuário" />
                                }
                            </label>
                            <label htmlFor="Nome">Nome</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                            <label htmlFor="Email">Email</label>
                            <input type="email" value={String(email)} disabled={true} />

                            <button type='submit'>Salvar</button>
                        </form>
                    </div>
                    <div className={styles.content}>
                        <button className={styles.content_logout} onClick={() => signOut()}>Sair</button>
                    </div>
                </section>
            </main>

        </>
    );
}