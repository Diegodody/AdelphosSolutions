import styles from './AdmPages.module.css'
import { Link } from 'react-router-dom'

function AdmPage() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title_sobre}>Serviço de Gerenciamento</h1>

            <div className={styles.div_cards}>

                <div className={styles.imgLogo}>
                    <Link to="/ListarAssociados" >
                        <img src="images/membros.png" alt="Imagem membros" className={styles.img_membros} />
                        <p className={styles.parag_cards}>Lista dos Associados</p>
                    </Link>

                </div>

                <div className={styles.imgLogo}>
                    <Link>
                        <img src="images/checkin.png" alt="Imagem check-in" className={styles.img_checkin} />
                        <p className={styles.parag_cards}>Check-in</p>
                    </Link>
                </div>

                <div className={styles.imgLogo}>
                    <Link >
                        <img src="images/avisos.png" alt="Imagem avisos" className={styles.img_avisos} />
                        <p className={styles.parag_cards}>Criar Avisos</p>
                    </Link>
                </div>

                <div className={styles.imgLogo}>
                    <Link to="/VoluntRegister">
                        <img src="images/voluntarios.png" alt="Imagem voluntários" className={styles.img_voluntarios} />
                        <p className={styles.parag_cards}>Voluntários para Eventos</p>
                    </Link>
                </div>

                <div className={styles.imgLogo}>
                    <Link to="/CadastrarEvento">
                        <img src="images/kids.png" alt="Imagem kids" className={styles.img_kids} />
                        <p className={styles.parag_cards}>Registrar Eventos</p>
                    </Link>
                </div>

                <div className={styles.imgLogo}>
                    <Link to="/AdmDonationPage">
                        <img src="images/doar.png" alt="Imagem doar" className={styles.img_doar} />
                        <p className={styles.parag_cards}>Doação / Contribuição</p>
                    </Link>
                </div>

                <div className={styles.imgLogo}>
                    <Link>
                        <img src="images/votacao.png" alt="Imagem votação" className={styles.img_votacao} />
                        <p className={styles.parag_cards}>Votação</p>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default AdmPage