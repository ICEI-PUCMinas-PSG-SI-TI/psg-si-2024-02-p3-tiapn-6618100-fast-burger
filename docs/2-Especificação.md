# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>
# Especificações do Projeto

Este documento detalha as especificações do projeto FastBurger, incluindo personas, histórias de usuário, requisitos funcionais e não funcionais, e restrições.  Para a elicitação de requisitos, foram utilizadas as técnicas de Personas, Histórias de Usuário e priorização MoSCoW.


## Personas

Para o FastBurger, identificamos as seguintes personas:

**1. Cliente Casual (Ana):** Ana, 28 anos, trabalha em escritório e gosta de sair para almoçar ou jantar com amigos. Valoriza praticidade, rapidez no atendimento e opções de comida saborosa e de qualidade. Usa frequentemente aplicativos de delivery e procura por promoções. É avessa a interfaces complexas e prefere experiências simples e intuitivas.

**2. Cliente Frequentador (João):** João, 35 anos, trabalha em casa e costuma pedir lanches online pelo menos 2 vezes por semana.  Valoriza a consistência da qualidade, o sabor e a variedade do cardápio. Gosta de ter um histórico de seus pedidos e formas de pagamento salvas para facilitar novas compras. Busca por um sistema rápido e eficiente.

**3. Gerente (Maria):** Maria, 45 anos, é a gerente de uma hamburgueria. Precisa de um sistema que lhe forneça controle total do estoque, gestão de funcionários e relatórios de vendas. Valoriza informações precisas e em tempo real, que ajudem a tomar decisões estratégicas sobre compras de insumos, cardápio e equipe. Busca otimização do tempo e redução de erros.

**4. Cozinheiro (Pedro):** Pedro, 22 anos, trabalha na cozinha da hamburgueria. Necessita de um sistema que apresente os pedidos de forma clara e eficiente, sem ambiguidades, para que possa preparar os itens com agilidade e precisão.  Busca reduzir o tempo de preparação e evitar erros na execução dos pedidos.

## Histórias de Usuário

As histórias de usuário abaixo foram agrupadas por contexto (Cliente, Gerente e Cozinheiro) para melhor organização:


**Contexto: Cliente**

| EU COMO...                               | QUERO/PRECISO...                                           | PARA...                                                                 |
|------------------------------------------|--------------------------------------------------------------|-------------------------------------------------------------------------|
| Cliente Casual (Ana)                      | Acessar o cardápio de forma simples e intuitiva.             | Escolher meu pedido rapidamente.                                       |
| Cliente Casual (Ana)                      | Fazer meu pedido com facilidade.                             | Receber meu lanche rapidamente e sem problemas.                         |
| Cliente Casual (Ana)                      | Pagar meu pedido de forma segura e prática (cartão ou dinheiro).| Finalizar a compra de forma rápida e segura.                            |
| Cliente Frequentador (João)               | Salvar meus dados de endereço e pagamento para pedidos futuros. | Agilizar o processo de pedidos futuros.                                  |
| Cliente Frequentador (João)               | Visualizar o histórico dos meus pedidos.                     | Acompanhar os pedidos que realizei anteriormente e avaliar a frequência. |


**Contexto: Gerente**

| EU COMO...                 | QUERO/PRECISO...                                                    | PARA...                                                                           |
|-----------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| Gerente (Maria)             | Controlar o estoque de insumos em tempo real.                     | Evitar desperdícios, garantir a disponibilidade de ingredientes e otimizar compras. |
| Gerente (Maria)             | Gerenciar os pedidos e verificar o andamento de cada um.           | Monitorar as operações, identificar possíveis problemas e otimizar o atendimento.   |
| Gerente (Maria)             | Acessar relatórios de vendas e controle de estoque.                 | Analisar o desempenho do negócio, identificar tendências e tomar decisões estratégicas. |
| Gerente (Maria)             | Gerenciar as informações do cardápio (adicionar, remover ou alterar itens). | Manter o cardápio atualizado e atrativo para os clientes.                           |


**Contexto: Cozinheiro**

| EU COMO...                  | QUERO/PRECISO...                                         | PARA...                                                                  |
|------------------------------|-------------------------------------------------------------|------------------------------------------------------------------------|
| Cozinheiro (Pedro)           | Visualizar os pedidos de forma clara e organizada.          | Preparar os pedidos de forma eficiente e precisa, evitando erros.             |
| Cozinheiro (Pedro)           | Receber notificações sobre novos pedidos.                   | Manter-se atualizado sobre os pedidos pendentes e evitar atrasos na entrega. |


## Requisitos

**Priorização MoSCoW:** Foi utilizada a técnica MoSCoW para priorizar os requisitos.  Requisitos *Must have* são essenciais para o funcionamento básico do sistema.  *Should have* são importantes, mas não críticos para a primeira versão. *Could have* são desejáveis, mas podem ser adiados.  *Won't have* são requisitos que não serão implementados nesta versão.


### Requisitos Funcionais

| ID    | Descrição do Requisito                                  | Prioridade | MoSCoW |
|------|----------------------------------------------------------|------------|---------|
| RF-001| Cadastro de novos itens no cardápio.                   | Alta        | Must    |
| RF-002| Realizar pedidos online.                               | Alta        | Must    |
| RF-003| Sistema de pagamento integrado (cartão e dinheiro).    | Alta        | Must    |
| RF-004| Controle de estoque de ingredientes.                    | Alta        | Must    |
| RF-005| Histórico de pedidos para clientes.                      | Média       | Should  |
| RF-006| Relatórios gerenciais (vendas e estoque).               | Média       | Should  |
| RF-007| Gerenciamento de usuários (acesso diferenciado).       | Média       | Should  |
| RF-008| Notificações em tempo real para cozinheiros e atendentes.| Média       | Should  |
| RF-009| Integração com sistemas de delivery (futuro).           | Baixa       | Could   |
| RF-010| Sistema de fidelidade para clientes.                     | Baixa       | Could   |


### Requisitos Não Funcionais

| ID     | Descrição do Requisito                                   | Prioridade | MoSCoW |
|-------|-----------------------------------------------------------|------------|---------|
| RNF-001| Interface responsiva para dispositivos móveis.            | Alta        | Must    |
| RNF-002| Tempo de resposta do sistema inferior a 3 segundos.     | Alta        | Must    |
| RNF-003| Segurança dos dados dos clientes e do sistema.           | Alta        | Must    |
| RNF-004| Disponibilidade do sistema de 99.9%                      | Alta        | Must    |
| RNF-005| Escalabilidade para atender ao crescimento do negócio.   | Média       | Should  |
| RNF-006| Facilidade de uso e navegação intuitiva.                 | Média       | Should  |
| RNF-007| Documentação completa para usuários e administradores. | Baixa       | Could   |


## Restrições

| ID | Restrição                                                 |
|---|----------------------------------------------------------|
| 01 | O projeto deverá ser entregue até o final do semestre.      |
| 02 | O sistema não deve depender de um módulo de backend na primeira versão. |


Lembre-se que este documento é um exemplo e deve ser adaptado para refletir especificamente as necessidades do seu projeto FastBurger.  As prioridades e classificação MoSCoW podem ser ajustadas conforme a avaliação da equipe.
