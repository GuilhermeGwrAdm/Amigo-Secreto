# Desafio ONE Amigo Secreto

## Objetivo

Este projeto tem como objetivo praticar conceitos de programação em JavaScript, desenvolvendo um sorteio de "Amigo Secreto". O código permite que os usuários adicionem nomes à lista de amigos e, a partir dessa lista, realiza um sorteio aleatório para determinar quem tirou quem no Amigo Secreto.

## Descrição do Projeto

O código consiste em três funções principais:

1. **Adicionar Amigos**: Permite ao usuário inserir nomes de amigos em um campo de texto. Os nomes são validados para evitar duplicatas e, uma vez inseridos corretamente, são exibidos em uma lista na tela.

2. **Atualizar Lista de Amigos**: Exibe os amigos que foram adicionados na lista. Cada nome é exibido em um item de lista (`<li>`), que é atualizado sempre que um novo nome é adicionado.

3. **Sortear Amigo Secreto**: Realiza o sorteio de um amigo secreto. Quando o usuário clica no botão de sorteio, o código seleciona um nome aleatório da lista e o exibe na tela.

As ferramentas e conceitos importantes implementados neste projeto são:

- **`while`**: Utilizado para iterar sobre a lista de amigos e atualizar a exibição da lista.
- **`Math.random()`**: Usado para gerar um número aleatório, fundamental para o sorteio do amigo secreto.
- **`Math.floor()`**: Aplica-se para garantir que o número sorteado seja um número inteiro dentro do intervalo adequado.

## Funcionalidades

- **Adicionar nome à lista**: O usuário pode inserir o nome de um amigo para adicioná-lo à lista de amigos.
- **Ver lista de amigos**: A lista de amigos é exibida dinamicamente na página.
- **Sortear amigo secreto**: O sorteio é feito de forma aleatória e o nome sorteado é mostrado para o usuário.

## Como Usar

1. Abra o arquivo HTML no navegador.
2. No campo de texto, insira o nome do amigo que deseja adicionar à lista.
3. Clique em "Adicionar Amigo" para incluir o nome na lista.
4. Quando desejar realizar o sorteio, clique no botão "Sortear Amigo Secreto".
5. O nome sorteado será exibido na tela.

## Tecnologias Usadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilo simples para exibir a lista de amigos (se desejar, você pode personalizar).
- **JavaScript**: Lógica de programação para adicionar amigos e realizar o sorteio.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou sugestões! Se você encontrar algum erro ou tiver ideias para novas funcionalidades, pode abrir um "issue" ou enviar um "pull request".
