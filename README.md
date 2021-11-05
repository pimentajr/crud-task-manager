# Boas vindas ao repositório do projeto Task Manager!

- Nesse projeto foi desenvolvido uma aplicação completa com front-end utilizando React, e back-end utilizando Node.js e MongoDB. 

- O principal problema resolvido com esse sistema, é auxiliar as pessoas colaboradoras de uma empresa fictícia apresentada no Blitz de Carreira da Trybe. A empresa estava passando por dificuldades na organização das tarefas de seus colaboradores, que afetava a produtividade da equipe.

- Para auxiliar os colaboradores em suas tarefas diárias, foi implementado um sistema de gerenciamento de tasks individual e interativo, ou seja, cada usuário tem seu login e senha para criar, editar e excluir suas tarefas de forma fácil e efetiva.

---

## 🛠 Tecnologias

Esse projeto foi desenvolvido utilizando:

* [ReactJS](https://reactjs.org/)
* [Node](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)

---

---

## 🎨 Layout

<div align="center">
   <img src="./.github/demo.png" width="600px">
</div>
 
---

## 📋 Execução

- Antes de executar o projeto, é importante você ter instalado as seguintes ferramentas:

* Um editor de sua preferência. Utilizei o [VSCode](https://code.visualstudio.com) no desenvolvimento do projeto.
* O sistema de controle de versões [Git](https://git-scm.com).
* O banco de dados [MongoDB](https://www.mongodb.com/).

- Primeiramente, é necessário que seu banco de dados esteja ativo. Pra isso, após configurar o MongoDB em sua máquina, acesse o terminal e inicie seu banco de dados com o comando abaixo.

```bash
# Ativa o banco de dados MongoDB
sudo service mongod start
```

- Verifique se o MongoDB está ativo com o comando abaixo.

```bash
# Verifica o status do banco de dados
sudo service mongod status
```

- Siga os procedimentos abaixo, para clonar e instalar as dependências do projeto:

```bash
# Clonar o repositório com https
git clone https://github.com/pimentajr/task-manager.git

# Ou clonar o repositório com ssh
git clone git@github.com:pimentajr/task-manager.git

# Entrar no diretório
cd task-manager

# Baixar as dependências
# ATENÇÃO: As dependências devem ser instaladas tanto na pasta frontend, quanto backend!
npm i
```

- Agora, é necessário executar o script abaixo para ativar o servidor da aplicação (esse script deve ser inserido na pasta backend do projeto).

```bash
# Executa o servidor da aplicação
npm run dev
```

- E por fim, é necessário executar a aplicação. Após executar o código abaixo na pasta frontend, basta acessar `http://localhost:3000/` em seu navegador.

```bash
# Executa a aplicação
npm start
```



