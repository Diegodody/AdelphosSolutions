import styles from './Cadastro.module.css'
import { useState } from 'react'

function Cadastro() {

    const [values, setValues] = useState({
        id: 0,
        email: "",
        name: "",
        password: "",
        yearsOfAge: 0,
        cpf: "",
        city: "",
        state: "",
        address: "",
        category: 0,
        membershipDate: new Date().toISOString()
    });

    const handleChanges = (e, name) => {
        if(name === "category") {
            setValues({...values, [name]:parseInt(e.target.value)})
            return
        }
        setValues({...values, [name]:e.target.value})
    }

    const handleForm = async (e) => {
        console.log(values);
        try{
            e.preventDefault()
            const response = await fetch(`https://localhost:44309/api/User`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json', },
               body: JSON.stringify(values)
            })
            const json = await response.json()
            console.log(response.status)
            console.log(json)
            alert("Cadastro realizado com Sucesso!!!")

            //Limpa os campos do formulário após o cadastro
            setValues({
                email: "",
                name: "",
                password: "",
                yearsOfAge: 0,
                cpf: "",
                city: "",
                state: "",
                address: "",
                category: 0,
            });

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.div_img}>
                <img src="images/teste.png" alt="plano de Fundo" />
            </div>

        <div className={styles.div_formulario}>

            <form onSubmit={handleForm}>
                <h1>Formulário de Cadastro</h1>

                <div className={styles.div_label}>
                    <label>Nome Completo</label>
                    <input 
                    type="text" 
                    placeholder="full name"
                    id='one'
                    value={values.name} 
                    onChange={(e) => handleChanges(e, 'name')}
                    required />
                </div>

                <div className={styles.div_label}>
                    <label>E-mail</label>
                    <input 
                    type="email" 
                    placeholder="E-mail" 
                    id='two'
                    value={values.email}
                    onChange={(e) => handleChanges(e, 'email')}
                    required />
                </div>

                <div className={styles.div_label}>
                    <label>CPF</label>
                    <input 
                    type="tel" 
                    placeholder="cpf"
                    id='three'
                    value={values.cpf}
                    onChange={(e) => handleChanges(e, 'cpf')}
                    required />
                </div>

                <div className={styles.div_label}>
                    <label>Idade</label>
                    <input 
                    type="number" 
                    placeholder="Idade"
                    id='four'
                    value={values.yearsOfAge}
                    onChange={(e) => handleChanges(e, 'yearsOfAge')}
                    required />
                </div>

                <div className={styles.div_label}>
                    <label>Endereço</label>
                    <input 
                    type="text" 
                    placeholder="Endereço"
                    id='five'
                    value={values.address}
                    onChange={(e) => handleChanges(e, 'address')}
                    required />
                </div>

                <div className={styles.div_label}>
                    <label>Cidade</label>
                    <input 
                    type="text" 
                    placeholder="Cidade"
                    id='six'
                    value={values.city} 
                    onChange={(e) => handleChanges(e, 'city')}
                    required />
                </div>

                <div className={styles.div_label}>
                    <label>Bairro</label>
                    <input 
                    type="text" 
                    placeholder="Bairro"
                    id='seven'
                    value={values.state} 
                    onChange={(e) => handleChanges(e, 'state')}
                    required />
                </div>

                <div className={styles.div_label}>
                    <label>Senha</label>
                    <input 
                    type="text" 
                    placeholder="password"
                    id='one'
                    value={values.password} 
                    onChange={(e) => handleChanges(e, 'password')}
                    required />
                </div>
                
                <div className={styles.button_cadastro}>
                <button type="submit" >Cadastrar</button>
            </div>
            </form>
        </div>
        </div>
    )
}

export default Cadastro