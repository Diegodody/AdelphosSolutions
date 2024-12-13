import { Link, Outlet } from "react-router-dom"
import styles from './NavbarAdm.module.css'

function NavbarAdm() {
    return (
        <div>
            <nav className={styles.navbar}>
                <div> <p>Adelphos Soluções † </p> </div>

                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to="/AdmPage">Página Inicial</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/ListarAssociados">Lista dos Associados</Link>
                    </li>


                    <li className={styles.item}>
                        <Link to="/">Sair</Link>
                    </li>

                </ul>
            </nav>
            <main>
                {/* Aqui as páginas podem ser renderizadas correspondente à rota */}
                <Outlet />
            </main>
        </div>
    )
}
export default NavbarAdm