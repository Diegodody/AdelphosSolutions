import styles from './Sobre.module.css'

function Sobre () {
    return (
        <div className={styles.container} >
            <h1 className={styles.title_sobre}>Sobre Adelphos Solutions:</h1>
            <p className={styles.pg_sobre}>Adelphos Solutions † é uma empresa dedicada a fornecer 
                soluções tecnológicas para facilitar <br/>
                gestão e a comunicação das instituições não governamentais.</p>
            <p>Adelphos Solutions é um sistema web completo e intuitivo para gerenciar as 
                operações diárias de entidades não governamentais (ONGs). A plataforma visa 
                otimizar processos, facilitar a tomada de decisões e fortalecer a transparência, 
                contribuindo para o alcance dos Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030 da ONU.
                <br />Consiste em um sistema web abrangente para gerenciar doações, 
                comunicação, controle de atividades e emissão de avisos, visando otimizar 
                a administração de uma organização. 
                <br />O site será projetado para permitir 
                o cadastro e controle de frequência de membros/associados e visitantes, 
                além de fornecer relatórios financeiros detalhados e ferramentas de suporte 
                técnico. 
                <br />Serão incluídas funcionalidades de personalização de perfis, segurança 
                avançada de dados e integração com redes sociais, promovendo uma interação mais 
                eficaz e moderna. 
                <br />O projeto também contemplará a implementação de treinamentos 
                para os usuários e a coleta contínua de feedbacks, com o objetivo de fomentar 
                melhorias constantes no sistema, alinhando-se às necessidades e expectativas 
                dos usuários.</p>
            <p>A criação de um site para gerenciar as atividades de uma comunidade é essencial 
                em um cenário de crescente digitalização. As organizações que administram doações, 
                eventos e membros enfrentam desafios relacionados à organização eficiente, 
                ao controle de frequência e à gestão financeira transparente. A ausência de um 
                sistema centralizado gera ineficiências, duplicidade de esforços e dificuldades n
                a personalização de experiências para membros e visitantes. Além disso, a falta de 
                um canal adequado para coletar feedbacks impede melhorias contínuas</p>
        </div>
    )
}

export default Sobre;