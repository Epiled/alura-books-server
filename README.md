# 📚 Alura Books Server

Projeto do curso <a href="https://www.alura.com.br/curso-online-node-primeira-api-express">Node.js: continue seu projeto full stack criando uma 
API com Express</a> da Alura, curso ministrado pela instrutora <a href="https://www.linkedin.com/in/bernardosevero/">Bernardo Severo da Silveira</a>.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Alura Books Server**
| :label: Tecnologias | node.js, javascript, express, nodemon, postman

<!-- Inserir imagem com a #vitrinedev ao final do link -->

![alura-books-api-crud-rest](https://github.com/Epiled/alura-books-server/assets/55258483/20f29833-5bd1-4c73-84ca-55bcaeefcf36#vitrinedev)

<h2 id="detalhes-do-projeto"> 📃 Detalhes do projeto </h2>

 Projeto API de CRUD REST para consumir e modificar o arquivo "livros.json", que é usado como base de dados.

### Ferramentas e Configurações

- **Express:** Um framework web para Node.js que simplifica o desenvolvimento de aplicativos web e APIs.
- **Nodemon:** Uma ferramenta que monitora alterações nos arquivos do projeto e reinicia automaticamente o servidor quando detecta uma alteração.
- **Postman:** Permite enviar solicitações HTTP personalizadas, visualizar respostas, testar diferentes métodos e payloads, e automatizar fluxos de trabalho de teste.

### Funcionalidades Principais

- **Criação (Create):**
Permite a criação de novos registros ou objetos no sistema.
Geralmente envolve a coleta de dados por meio de formulários ou entradas do usuário.
Os dados são inseridos no banco de dados ou na fonte de armazenamento.

- **Leitura (Read):**
Oferece a capacidade de recuperar informações existentes do sistema.
Pode incluir operações de busca e filtragem para recuperar dados específicos.
A leitura geralmente está associada à apresentação de dados para os usuários.

- **Atualização (Update):**
Permite a modificação de registros ou objetos existentes no sistema.
Envolve a alteração de dados previamente armazenados.
Os usuários podem atualizar informações por meio de formulários ou interfaces específicas.

- **Exclusão (Delete):**
Oferece a capacidade de remover registros ou objetos do sistema.
Geralmente implementada com segurança para evitar exclusões acidentais.
A exclusão é realizada para remover dados que não são mais necessários.

![Badge](https://img.shields.io/github/last-commit/Epiled/alura-books-server?style=for-the-badge)
![Badge](https://img.shields.io/github/languages/code-size/Epiled/alura-books-server?style=for-the-badge)
![Badge](https://img.shields.io/github/languages/count/Epiled/alura-books-server?style=for-the-badge)
![Bagde](https://img.shields.io/badge/repo%20status-Beta-cyan?style=for-the-badge)
![Bagde](https://img.shields.io/github/v/release/Epiled/alura-books-server?style=for-the-badge)
![Bagde](https://img.shields.io/github/license/Epiled/alura-books-server?style=for-the-badge)

![Badge](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Badge](https://img.shields.io/badge/-Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Badge](https://img.shields.io/badge/-Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![Badge](https://img.shields.io/badge/-Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

<h2> 📑 Tabela de Conteúdos </h2>

<!--ts-->
   * [Detalhes do projeto](#detalhes-do-projeto)
   * [Tópicos Desenvolvidos](#topicos-curso)
   * [Demonstração](#demonstracao)
     - [home](#home)
   * [Pré-Requisito](#pre-requisito)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
   * [Tecnologias](#tecnologias)
   * [Autor](#autor)
<!--te-->

<h2 id="topicos-curso"> 👩‍🏫 Tópicos desenvolvidos</h2>

<!--ts-->
* Aprenda a criar uma API Node.js usando Express
* Entenda como funcionam requisições HTTP
* Compreenda como testar e validar uma API manualmente
* Aprenda a manipular arquivos JSON para armazenar dados
* Saiba como lidar com erros na sua aplicação
* Conheça os mais utilizados métodos HTTP
<!--te-->

<h2 id="demonstracao"> 👀 Demonstração </h2>

Para essa demonstração foi utilizado o programa Postman mas outros programas como o Insomia também poderiam ser utilizados.

<h3 id="buscar-livros"> Buscar Todos os Livros </h3>

https://github.com/Epiled/alura-books-server/assets/55258483/02f9fc3a-a7e8-4c61-b522-290691da1d2e

<h3 id="buscar-pod-id"> Buscar livro por ID </h3>


https://github.com/Epiled/alura-books-server/assets/55258483/4a858c8b-0302-41c5-96c2-1b6ab9fe5a24


<h3 id="salvar-livro"> Salvar Livro </h3>

https://github.com/Epiled/alura-books-server/assets/55258483/d5b4f3b2-f931-4a49-b287-f8cd05625a51

<h3 id="modificar-livro"> Modificar Livro </h3>

https://github.com/Epiled/alura-books-server/assets/55258483/1ae33e75-d01b-4744-b133-7ab953827f27

<h3 id="deletar-livro"> Deletar Livro </h3>

https://github.com/Epiled/alura-books-server/assets/55258483/81cfb5ab-0157-4eda-a722-5b1718420503

<h2 id="pre-requisito"> 🚨 Pré-requisito </h2>
<ul>
  <li>Node.js</li>
  <li>Postman</li>
</ul>

<h2 id="instalacao"> ⚙ Instalação </h2>

```
1. git clone https://github.com/Epiled/alura-books-server.git
2. cd alura-books-server
3. npm install
```

<h2 id="como-usar"> 👩‍🏫 Como usar </h2>

```
1. Abra a pasta alura-books-server no terminal
2. nodemon app.js
3. Abra o Postman
4. Importe o arquivo "Livros - API - 1" para dentro do postman
5. Agora teste as rotas conforme suas necessidades
```

<h2 id="tecnologias"> 🛠 Tecnologias </h2>

As seguintes tecnologias foram usadas na construção deste projeto:

<ul>
  <li><a href="https://nodejs.org/en" target="_blank">Node.js</a></li>
  <li><a href="https://www.w3schools.com/js/" target="_blank">Javascript</a></li>
  <li><a href="https://expressjs.com/pt-br/" target="_blank">Express</a></li>
  <li><a href="https://nodemon.io/" target="_blank">Nodemon</a></li>
  <li><a href="https://www.postman.com/" target="_blank">Postman</a></li>
</ul>

<h2 id="autor"> 👨‍💻 Autor </h2>

<a href="https://github.com/Epiled">

![Felindo](https://user-images.githubusercontent.com/55258483/178338085-2cea8bf2-6d0c-409a-9d0e-23359b7d303e.png)
 <br />
 <sub><b>Felipe De Andrade</b></sub></a>

Feito com ❤️ por Felipe De Andrade 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Felipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/fademendonca/)](https://www.linkedin.com/in/fademendonca/)
[![Gmail Badge](https://img.shields.io/badge/-felipe.deam98@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:felipe.deam98@gmail.com)](mailto:felipe.deam98@gmail.com)
[![Instagram Badge](https://img.shields.io/badge/-Instagram-e4405f?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/felipe.deam/)](https://www.instagram.com/felipe.deam/)
[![Codepen Badge](https://img.shields.io/badge/-Codepen-000000?style=flat-square&logo=Codepen&logoColor=white&link=https://codepen.io/epiled)](https://codepen.io/epiled)

