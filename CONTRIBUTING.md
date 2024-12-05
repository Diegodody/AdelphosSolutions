# Contribuindo para a Adelphos Soluções

Obrigado por se interessar em contribuir para o MegaEventApi! Este guia irá orientá-lo durante todo o processo de contribuição, ajudando a garantir que as mudanças sejam feitas de maneira eficiente e organizada.

## 📋 Como Contribuir
1. Fork o Repositório

Para começar a contribuir, faça o fork do repositório para sua conta do GitHub:

    Acesse o repositório: AdelphosSolutions.
    Clique no botão Fork no canto superior direito.

2. Clone o Repositório

Clone o repositório forkado para sua máquina local:

git clone https://github.com/SeuUsuario/AdelphosSolutions.git
cd AdelphosSolutions

3. Crie uma Branch para Sua Alteração

Sempre crie uma branch nova para realizar suas alterações. Evite trabalhar diretamente na branch main.

git checkout -b nome-da-sua-branch

4. Faça suas Alterações

Realize as modificações necessárias no código. Certifique-se de seguir os padrões de codificação e de que sua alteração está bem testada.

    Evite alterações desnecessárias em arquivos que não têm relação com a sua contribuição.
    Atualize a documentação caso sua alteração afete a API ou a configuração do projeto.

5. Commit suas Alterações

Quando terminar suas alterações, faça o commit. Escreva uma mensagem de commit clara e objetiva, explicando as mudanças realizadas:

git add .
git commit -m "Descrição clara e objetiva da alteração"

6. Push para o Repositório Remoto

Depois de commitadas suas alterações, envie sua branch para o repositório no GitHub:

git push origin nome-da-sua-branch

7. Crie um Pull Request (PR)

    Acesse seu repositório no GitHub.
    Clique em New Pull Request.
    Descreva claramente suas alterações e o motivo delas.

Ao criar o PR, tenha em mente as seguintes informações:

    Título claro e objetivo.
    Descrição detalhada: Explique o que foi alterado e por que.

## ⚙️ Padrões de Codificação

Para manter a consistência e legibilidade do código, siga os padrões de codificação descritos abaixo:
Indentação e Formatação

    Use 4 espaços para indentação (nunca tabulação).
    Quebre linhas longas e mantenha uma largura máxima de 80 caracteres por linha.

Nomenclatura

    Variáveis e Funções: Use o padrão camelCase.
        Exemplo:

    public void cadastrarUsuario() { }

Classes: Use o padrão PascalCase.

    Exemplo:

        public class Evento { }

Comentários

    Comente funções e lógica complexa, mas evite comentar código óbvio.
    Evite comentários redundantes; o código deve ser autoexplicativo.

## 🧪 Testes

Antes de submeter um PR, execute e garanta que todos os testes estejam passando.
Testes Unitários

    Sempre que adicionar ou modificar uma funcionalidade, adicione testes unitários correspondentes para garantir que o comportamento esperado seja mantido.
    Utilize a estrutura de testes existente no projeto.

Testes Funcionais

    Verifique se os endpoints da API continuam funcionando corretamente após a sua alteração.

Banco de Dados

    Teste as operações de CRUD para garantir que o acesso ao banco de dados não tenha sido afetado.

## 🐛 Reportando Bugs ou Sugestões

Caso encontre um bug ou tenha uma sugestão de melhoria, abra uma issue no GitHub. Ao abrir uma issue, siga estas diretrizes:

    Título Claro e Objetivo: Descreva o problema ou sugestão de forma concisa.
    Passos para Reproduzir: Se for um bug, forneça os passos detalhados para reproduzi-lo.
    Informações Relevantes: Informe sobre o ambiente em que o problema foi identificado, como versões de Docker, Node.js, etc.

## 📄 Licença

Este projeto está licenciado sob a MIT License. Ao contribuir, você concorda com os termos da licença.

## 🧑‍🤝‍🧑 Código de Conduta

Todos os colaboradores devem seguir o nosso Código de Conduta, garantindo um ambiente respeitoso e colaborativo. O código de conduta está disponível aqui.

## 💬 Contato

Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato com os mantenedores do projeto.

Ou crie uma issue no GitHub para discutir ideias e problemas.
