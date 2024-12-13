import { Link, Outlet } from "react-router-dom"
import styles from './Navbar.module.css'



function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>

                <div>
                    <Link to="/"> <p>Adelphos Soluções † </p> </Link>
                </div>

                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to="/Login">Login</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/Cadastro">Cadastro</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/Sobre">Sobre</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/FaleConosco">Fale Conosco</Link>
                    </li>
                    
                    <li className={styles.item}>
                        <Link to="/DonationPage">Faça uma doação</Link>
                    </li>

                    <div>
                        <img src="images/Login1.png" alt="LogoLogin" />
                    </div>

                </ul>

            </nav>

            <main>
                {/* Aqui será renderizada a página correspondente à rota */}
                <Outlet />
            </main>

        </div>
    )
}
export default Navbar