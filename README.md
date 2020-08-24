<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" />

<h3 align="center">
  Desafio 07: GoFinances Web
</h3>

<blockquote align="center">“Não espere resultados brilhantes se suas metas não forem claras”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leandroppf/gostack-desafio-fundamentos-reactjs?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Leandro Pedroso" src="https://img.shields.io/badge/made%20by-Leandroppf-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/leandroppf/gostack-desafio-fundamentos-reactjs/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/leandroppf/gostack-desafio-fundamentos-reactjs?style=social">
  </a>
</p>

## :rocket: Sobre o desafio

Nesse desafio, o objetivo era continuar desenvolvendo a aplicação de gestão de transações, a GoFinances. Para esse desafio foi utilizado React.js junto com TypeScript, utilizando rotas e envio de arquivos por formulário.

Essa aplicação se conecta com o backend do [Desafio 06](https://github.com/leandroppf/gostack-desafio-typeorm-upload), e exibe as transações criadas e permitindo a importação de um arquivo CSV para gerar novos registros no banco de dados.

### Layout da aplicação

Essa aplicação possui um layout criado pela equipe da Rocketseat.

O layout pode ser acessado através da página do Figma, no [seguinte link](https://www.figma.com/file/EgOhyj1Inz14dhWGVhRlhr/GoFinances?node-id=1%3A863).

### Funcionalidades da aplicação

- **`Listar as transações da sua API`**: Sua página `Dashboard` deve ser capaz de exibir uma listagem através de uma tabela, com o campo `title`, `value`, `type` e `category` de todas as transações que estão cadastradas na sua API.

- **`Exibir o balance da sua API`**: Sua página `Dashboard`, você deve exibir o balance que é retornado do seu backend, contendo o total geral, junto ao total de entradas e saídas.

- **`Importar arquivos CSV`**: Na sua página `Import`, você deve permitir o envio de um arquivo no formato `csv` para o seu backend, que irá fazer a importação das transações para o seu banco de dados. O arquivo csv deve seguir o seguinte [modelo](https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-database-upload/assets/file.csv).

### Específicação dos testes

O template também possui testes automatizados e um dos objetivos é que o código criado passe em todos os testes listados abaixo:

- **`should be able to list the total balance inside the cards`**: Para que esse teste passe, sua aplicação deve permitir que seja exibido na sua Dashboard, cards contendo o total de `income`, `outcome` e o total da subtração de `income - outcome` que são retornados pelo balance do seu backend.

* **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados dentro de uma tabela, toda as transações que são retornadas do seu backend.

- **`should be able to navigate to the import page`**: Para que esse teste passe, você deve permitir a troca de página através do Header, pelo botão que contém o nome `Importar`.

- **`should be able to upload a file`**: Para que esse teste passe, você deve permitir que um arquivo seja enviado através do componente de drag-n-drop na página de `import`, e que seja possível exibir o nome do arquivo enviado para o input.

---

Desafio concluído no dia 25/04/2020 por Leandro Pinto Pedroso Filho
