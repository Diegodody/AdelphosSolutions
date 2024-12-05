# 🎉 Adelphos Soluções

## 📖 Descrição do Projeto
 **Adelphos Soluções** foi desenvolvida para facilitar o gerenciamento de eventos. Com ela, os usuários podem:
c Inscrever-se em eventos.
- Visualizar detalhes completos dos eventos.
- Receber notificações sobre atividades relacionadas.

A API e sua interface web são **conteinerizadas**, garantindo uma implantação simplificada e fácil manutenção.

Metolodogia Kanban: https://trello.com/b/Z5DnJtXE

---

## 📖 Autores

- Alesson Calaça [@alessoncalassa](https://github.com/ale-calassa) - 01378540 - Desenvolvedor Front-End e Back-End

- Diego Lima [@Diegodody](https://github.com/Diegodody) - 01401412 - Documentador

- Gilvanelson Nascimento [@Gilvanelson](https://github.com/Gilvanelson) - 01395387 - Scrum Master

---
## 📖 Documentação da API

Event
- GET /api/Event
- POST /api/Event
- PUT /api/Event
- GET /api/Event/{id}
- DELETE /api/Event/{id}

User
- GET /api/User
- POST /api/User
- PUT /api/User
- GET /api/User/{id}
- DELETE /api/User/{id}
- POST /api/User/registration
- DELETE /api/User/RegistrationClosure

## ⚙️ Definições de ferramentas 

 ### Softwares
- Visual Studio (IDE)
- Docker : Containerizar a API 
- NuGet : Gerenciamento de pacotes da API

### Framework
- Microsoft.EntityFrameworkCore.Disign
- Pomelo.EntityFrameworkCore.MySql

### Bibliotecas / Pacotes
- Microsoft.AspNetCore.Authentication.JwtBearer
- Microsoft.IdentityModel.Tokens
- Swasbuckle.AspNetCore.SwaggerGen
- Swasbuckle. AspNetCore.SwaggerGenUI
- System.IdentityModel.Tokens.Jwt

### Dispositivos
- 5 Notebooks

  ---

## 🚀 Funcionalidades Principais
### 1. **Gerenciamento de Eventos (CRUD)**
- Criar, editar, excluir e listar eventos.
- Informações dos eventos incluem:
  - Nome
  - Local
  - Data
  - Tipo de evento

### 2. **Gerenciamento de Inscrições (CRUD)**
- Inscrição de usuários em eventos.
- Regras implementadas para:
  - Controle do número máximo de inscritos.
  - Evitar inscrições duplicadas no mesmo evento.

### 3. **Gerenciamento de Usuários (CRUD)**
- Cadastro e gerenciamento de usuários.
- Funcionalidades adicionais:
  - Listagem de eventos nos quais o usuário está inscrito.
  - Histórico completo de participações.

### 4. **Busca e Listagem de Eventos**
- Permite buscas por:
  - Data
  - Tipo de evento
  - Localidade

---

## ⚙️ Pré-requisitos
Certifique-se de que os seguintes requisitos estão atendidos antes de começar:
- **Docker**: Necessário para conteinerização da API e da interface web.
- **Node.js**: Versão mínima recomendada: **16.x**.
- **Git**: Para clonar e gerenciar o repositório.
- **Banco de Dados**: MySQL ou outro compatível com a API.

---

## 📥 Como Baixar e Configurar o Repositório
Siga os passos abaixo para clonar e configurar o projeto:

```bash
# Clone o repositório
git clone https://github.com/Diegodody/MegaEventApi.git

# Acesse o diretório do projeto
cd AdelphosSolutions

# Construa e inicie os containers com Docker
docker-compose up --build


