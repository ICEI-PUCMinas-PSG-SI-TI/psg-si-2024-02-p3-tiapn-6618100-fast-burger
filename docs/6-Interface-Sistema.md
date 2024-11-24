# 6. Interface do Sistema

**Pré-requisitos:** [Projeto da Solução](4-Projeto-Solucao.md)

Esta seção descreve a interface do usuário (UI) do sistema FastBurger, fornecendo uma visão geral da interação do usuário através das principais telas.  As imagens reais substituirão os placeholders `[`Tela principal do sistema`](images/)` e similares.


## 6.1. Tela Principal do Sistema

A tela principal do sistema FastBurger apresenta uma interface limpa e intuitiva, projetada para uma fácil navegação.  Ela inclui:

* **Cabeçalho:**  Contém o logotipo do FastBurger e um menu de navegação principal com opções para: Cardápio, Pedidos (somente para clientes), Estoque (somente para gerentes), Relatórios (somente para gerentes) e Sair.
* **Conteúdo Principal:**  Esta área varia dependendo do tipo de usuário. **...**
* **Rodapé:**  Contém informações de contato e copyright.


[`Tela principal do sistema`](images/tela_principal.png)


## 6.2. Telas do Processo de Realização de Pedido (Cliente)

**6.2.1. Tela de Cardápio:**

Esta tela apresenta o cardápio de forma organizada por categorias (Hambúrgueres, Bebidas, Acompanhamentos). Cada item do cardápio exibe uma imagem, o nome, a descrição e o preço.  Botões "+" e "-" permitem ajustar a quantidade desejada de cada item. Um botão "Adicionar ao Pedido" adiciona o item ao carrinho.

[`Tela do Cardápio`](images/tela_cardapio.png)

**6.2.2. Tela de Carrinho:**

Exibe uma lista dos itens selecionados pelo cliente, a quantidade de cada item, o preço unitário e o preço total.  Permite remover itens ou modificar as quantidades.  Um botão "Finalizar Pedido" direciona para a tela de pagamento.

[`Tela do Carrinho`](images/tela_carrinho.png)

**6.2.3. Tela de Pagamento:**

Oferece opções de pagamento (cartão de crédito/débito ou dinheiro).  No caso de pagamento com cartão, integra-se com uma gateway de pagamento (exemplo: Stripe ou PagSeguro).  Após o pagamento, exibe uma mensagem de confirmação do pedido.

[`Tela de Pagamento`](images/tela_pagamento.png)

**6.2.4. Tela de Confirmação do Pedido:**

Após o pagamento, exibe uma confirmação do pedido com o número do pedido, os itens e o valor total.


## 6.3. Telas do Processo de Gestão de Estoque (Gerente)

**6.3.1. Tela de Estoque:**

Apresenta uma lista de todos os insumos em estoque, com seus respectivos nomes, quantidades e um campo para solicitar reposição.  Permite pesquisar por insumo e filtrar os resultados.

[`Tela de Estoque`](images/tela_estoque.png)

**6.3.2. Tela de Solicitação de Reposição:**

Permite ao gerente solicitar a reposição de um ou mais insumos, indicando a quantidade desejada.

[`Tela de Solicitação de Reposição`](images/tela_reposicao.png)


**(Adicione seções semelhantes para outras telas e processos, como a tela de gestão de cardápios, tela de relatórios, etc., com imagens representativas e descrições detalhadas de cada uma.  Lembre-se de que todas as telas devem ser coerentes com o design proposto e funcionarem de forma intuitiva para o usuário.)**

**Observações:**  Substitua os placeholders `[`Tela ...`](images/)` pelas imagens reais dos seus protótipos.  Este documento descreve a interface, e não o código.  É importante que as imagens estejam em alta resolução e representem fielmente o design final da interface do usuário.
