
import styles from './FaleConosco.module.css'

import { useState } from 'react'

function FaleConosco() {

    const [values, setValues] = useState({

        id: 0,
        fullname: "",
        email: "",
        subject: ""
    });

    const handleChanges = (e, name) => {
        if (name === "vacancies") {
            setValues({ ...values, [name]: parseInt(e.target.value) })
            return
        }
        setValues({ ...values, [name]: e.target.value })
    }

    const handleForm = async (e) => {
        console.log(values);
        try {
            e.preventDefault()
            const response = await fetch(`https://localhost:44309/api/Event`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(values)
            })
            const json = await response.json()
            console.log(response.status)
            console.log(json)
            alert("Cadastro realizado com Sucesso!")
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.container}>                

                <div className={styles.div_formulario}>
                    <form onSubmit={handleForm}>
                        <h1>Fale Conosco</h1>

                        <div className={styles.div_label}>
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                placeholder="fullname"
                                id='one'
                                value={values.fullname}
                                onChange={(e) => handleChanges(e, 'fullname')}
                                required />
                        </div>

                        <div className={styles.div_label}>
                            <label>E-mail</label>
                            <input
                                type=""
                                placeholder="email"
                                id='two'
                                value={values.email}
                                onChange={(e) => handleChanges(e, 'email')}
                                required />
                        </div>

                        <div className={styles.div_label}>
                            <textarea
                                type="textarea"
                                placeholder="Digite o Assunto"
                                id='five'
                                value={values.subject}
                                onChange={(e) => handleChanges(e, 'subject')}
                                required />
                        </div>

                        <div className={styles.button_cadastro}>
                            <button type="submit">
                                Enviar
                            </button>
                        </div>

                    </form>   
                </div> 

                <div className={styles.div_text}>
                            <h2 className={styles.text_title}>Contate <br /> nos <br /> Hoje!!!</h2>
                            <p className={styles.text_parag}>Utilize o formulário ao lado 
                                <br />para entrar em contato Conosco
                                <br />e saber mais sobre nosso Projeto,
                                <br />doações para instituições e 
                                <br />organizações não governamentais
                            </p>
                        </div>
            </div>
    )
}
export default FaleConosco