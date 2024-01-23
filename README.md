# Crud_app

requisitos
Angular CLI
Composer

1 abra o postgresql e crie um banco de dados guarde as informacões de conexão.
DB_HOST=localhost
  DB_PORT=5432
  DB_DATABASE=crud_app
  DB_USERNAME=postgres
  DB_PASSWORD=123456


2.1 - abra o cmd ou powershell e vá para o diretorio que deseja clonar a aplicacão; execulte o comando  "cd SeuDiretorio" para abrir o diretorio.

2.2-Clone o repositório do GitHub com o seguinte comando: "git clone https://github.com/baiacul/Crud_app.git"

2.3- Entre na pasta do back end com o comando: "cd Back_end" e execute o comando: "composer install" para instalar as dependencias do composer

2.4- abra o terminal integrado dentro da pasta back end e execulte o comando: "copy .env.example .env", para criar a conexao com o banco de dados 
configure estes campos com as informações do seu banco de dados:
  DB_CONNECTION=pgsql
  DB_HOST=localhost
  DB_PORT=5432
  DB_DATABASE=crud_app
  DB_USERNAME=postgres
  DB_PASSWORD=123456
  
2.5- depois execute "php artisan migrate" para criar as tabelas no banco de dados ou se preferir crie manualmente

2.6-  execute no pgsql para criar algumas categorias     
{
insert into categoria(nome_categoria)
values
('tóxico'),
('obras'),
('comida'),
('mantimentos')
}

2.7 execute "php artisan serve" para inciar o servidor, pegue o link q ele vai gerar e guarde

3-1 abre o terminal integrado dentro da pasta Front_end e execute o comando: "npm install" para instalar as dependencias do angular

3-2 abra o arquivo src/app/services/produtos.service.ts no const baseUrl = 'http://127.0.0.1:8000/api/produtos'; troque por (url que voce copio do laravel)/api/produtos 

3-3 execute o "ng serve" para iniciar o servidor entre no link mostrado;

<h2>OBS utilize no campo de insersão de categoria os valores de 1 a 4 respectivos pelos valores adicionados no bd na categoria</h2>


