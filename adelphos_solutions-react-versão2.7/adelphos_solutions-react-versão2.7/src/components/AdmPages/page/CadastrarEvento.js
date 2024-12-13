import styles from './CadastrarEvento.module.css'

import { useState } from 'react'

function CadastrarEvento() {

    const [values, setValues] = useState({

        id: 0,
        title: "",
        locationoftheactivity: "",
        typeEvent: 0,
        vacancies: 0,
        eventStartDate: new Date().toISOString(),
        eventenddate: ""
    });
    
    const handleChanges = (e, name) => {
        if(name === "vacancies"){
            setValues({...values, [name]:parseInt(e.target.value)})
            return
        }
        setValues({...values, [name]:e.target.value})
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

            <div className={styles.div_img}>
                <img src="images/party_img.png" alt="Imagem cadastro" />
            </div>

        <div className={styles.div_formulario}>
            <form onSubmit={handleForm}>

                <h1>Formulário de Cadastro de Evento</h1>

                <div className={styles.div_label}>
                    <label>Nome do Evento</label>
                    <input 
                    type="text" 
                    placeholder="Event" 
                    id='one'
                    value={values.title}
                    onChange={(e) => handleChanges(e, 'title')} 
                    required />
                </div>

                <div className={styles.div_label}>
                    <label>Local do Evento</label>
                    <input 
                    type="text" 
                    placeholder="text"
                    id='two' 
                    value={values.locationoftheactivity}
                    onChange={(e) => handleChanges(e, 'locationoftheactivity')}
                    required />
                </div>

                <div className={styles.div_label}>
                    <label>Data Final</label>
                    <input 
                    type="date" 
                    placeholder="Date"
                    id='five' 
                    value={values.eventenddate}
                    onChange={(e) => handleChanges(e, 'eventenddate')}
                    required />
                </div>

                <div className={styles.div_label}>
                    <label id='' >Vagas Disponíveis</label>
                    <input 
                    type="number" 
                    placeholder=""
                    id='six' 
                    value={values.vacancies}
                    onChange={(e) => handleChanges(e, 'vacancies')}
                    required />
                </div>

                <div className={styles.button_cadastro}>
                    <button type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default CadastrarEvento