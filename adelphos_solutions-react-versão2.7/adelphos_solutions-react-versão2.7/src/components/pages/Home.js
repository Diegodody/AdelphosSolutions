import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.imgLogo}>
            <img src="images/adelphos_logo.png" alt="Logo do Adelphos" />
            <div>
                <h1 className={styles.title_sobre}>Sobre:</h1>
                <p className={styles.pg_sobre}>Adelphos Solutions † é uma empresa dedicada a fornecer soluções tecnológicas para facilitar <br/>
                a gestão e a comunicação das instituições não governamentais.</p>
            </div>   
        </div>
        
    )
}

export default Home