import { useEffect, useState } from 'react';
import styles from './ListarAssociados.module.css'; // Supondo que você tenha um arquivo CSS para estilizar a página

function ListarAssociados() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Estados para busca
    const [searchName, setSearchName] = useState("");
    const [searchEmail, setSearchEmail] = useState("");
    const [searchCpf, setSearchCpf] = useState("");
    const [searchCity, setSearchCity] = useState("");
    const [searchState, setSearchState] = useState("");

    // Função para buscar os usuários da API
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://localhost:44309/api/User'); // Sua URL de API
            if (!response.ok) {
                throw new Error('Falha ao carregar usuários');
            }
            const data = await response.json();
            setUsers(data); // Supondo que a API retorne um array de usuários
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Hook para carregar os dados assim que o componente for montado
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    // Filtrando os usuários com base nos campos de busca
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchName.toLowerCase()) &&
        user.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
        user.cpf.includes(searchCpf) &&
        user.city.toLowerCase().includes(searchCity.toLowerCase()) &&
        user.state.toLowerCase().includes(searchState.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <h1>Lista de Usuários</h1>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Buscar por Nome"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Buscar por E-mail"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Buscar por CPF"
                    value={searchCpf}
                    onChange={(e) => setSearchCpf(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Buscar por Cidade"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Buscar por Estado"
                    value={searchState}
                    onChange={(e) => setSearchState(e.target.value)}
                />
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>CPF</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Data de Cadastro</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.cpf}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{new Date(user.membershipDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarAssociados;
