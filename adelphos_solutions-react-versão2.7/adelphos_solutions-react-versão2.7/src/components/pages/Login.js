import { useState } from 'react';
import styles from './Login.module.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
/*import axios from "axios";*/

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
});

const handleChanges = (e, name) => {
    if(name === "category") {
        setValues({...values, [name]:parseInt(e.target.value)})
        return
    }
    setValues({...values, [name]:e.target.value})
}

const handleLogin = async (e) => {
    console.log(values);
    try{
        e.preventDefault()
        const response = await fetch(`https://localhost:44309/api/User/email=${values.email}/login/password=${values.password}`, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json', },
           body: JSON.stringify(values)
        })
        const json = await response.json()
        console.log(response.status)
        console.log(json)

    } catch (err) {
        console.error(err);
    }
}
 /*{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Requisição POST para o backend
      const response = await axios.post("https://localhost:4040/login", {
        email,
        password,
      });

      // Verifica se o login foi bem-sucedido
      if (response.data.token) {
        alert("Login bem-sucedido!");

        // Salvar token no localStorage (ou sessionStorage)
        localStorage.setItem("token", response.data.token);

        // Redirecionar para a página de dashboard
        window.location.href = "/AdmPage";
      } else {
        setError("Login falhou. Verifique suas credenciais.");
      }
    } catch (err) {
      // Exibir erro caso a API retorne falha
      setError("Erro de autenticação. Tente novamente.");
      console.error(err);
    }
  };*/

  return (
          <div className={styles.div_principal}>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className={styles.input_field}> 
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    value={values.email} 
                    onChange={(e) => handleChanges(e, 'email')}
                    required />
                    <FaUser className={styles.icon} />
                </div>
                <div className={styles.input_field}>
                    <input 
                    type="password" 
                    placeholder="Senha"
                    value={values.password} 
                    onChange={(e) => handleChanges(e, 'password')} 
                    required />
                    <FaLock className={styles.icon} />
                </div>
                <div className={styles.recallForget}>
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="/">Esqueceu a senha?</a>
                </div>
                
                <div className={styles.div_button}>

                <button type="submit" >
                  <Link to="/AdmPage">Entrar</Link>
                </button>
                    
                </div>
                <section>
                <div className={styles.div_cadastro}>
                    <p className={styles.pg_cadastro}>Ainda não é cadastrado? 
                        <a href="/Cadastro">  Cadastrar-se</a>
                    </p>
                </div>
                </section>
            </form>   
        </div>   
    );
};

export default Login