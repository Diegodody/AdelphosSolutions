import styles from './VoluntRegister.module.css';
import { useState, useEffect } from 'react';

function VoluntRegister() {
    const [values, setValues] = useState({
        idUser: "",
        idEvent: "",
    });

    const [users, setUsers] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch users and events when the component mounts
        fetchUsers();
        fetchEvents();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://localhost:44309/api/User');  // Ajuste a URL conforme necessário
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            console.error('Erro ao buscar usuários:', err);
        }
    };

    const fetchEvents = async () => {
        try {
            const response = await fetch('https://localhost:44309/api/Event');  // Ajuste a URL conforme necessário
            const data = await response.json();
            setEvents(data);
        } catch (err) {
            console.error('Erro ao buscar eventos:', err);
        }
    };

    const handleChanges = (e, name) => {
        setValues({ ...values, [name]: e.target.value });
    };

    const handleForm = async (e) => {
        e.preventDefault();
        console.log(values);
        try {
            const response = await fetch(`https://localhost:44309/api/User/registration?userId=${values.idUser}&eventId=${values.idEvent}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });
            const json = await response.json();
            console.log(response.status);
            console.log(json);
            if (response.ok) {
                alert("Cadastro realizado com Sucesso!");
            } else {
                alert("Erro ao realizar cadastro. Tente novamente.");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={styles.container}>
            
            <div className={styles.div_img}>
                <img src="images/party_img.png" alt="Imagem cadastro" />
            </div>

            <div className={styles.div_form}>
                <form onSubmit={handleForm}>
                    <h1>Cadastrar Voluntário em nossos Eventos</h1>

                    <div className={styles.div_label}>
                        <label>Voluntário</label>
                        <select
                            value={values.idUser}
                            onChange={(e) => handleChanges(e, 'idUser')}
                            required
                        >
                            <option value="">Selecionar Voluntário </option>
                            {users.map(user => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.div_label}>
                        <label>Evento</label>
                        <select
                            value={values.idEvent}
                            onChange={(e) => handleChanges(e, 'idEvent')}
                            required
                        >
                            <option value="">Selecionar Evento</option>
                            {events.map(event => (
                                <option key={event.id} value={event.id}>
                                    {event.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.button_cadastro}>
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VoluntRegister;
