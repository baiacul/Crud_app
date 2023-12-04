# Crud_app

Precisa do postgresql
Angular CLI
Composer

1 abra o postgresql e crie um database guarde as informacoes de conexao
DB_HOST=localhost
  DB_PORT=5432
  DB_DATABASE=crud_app
  DB_USERNAME=postgres
  DB_PASSWORD=123456


2.1 - abra o cmd ou powershell e va para o diretorio que deseja clocar a aplicacao com o comando  "cd SeuDiretorio"

2.2-Clone o repositório do GitHub: git clone https://github.com/baiacul/Crud_app.git

2.3- Entre na pasta do back end com o comando cd Back_end e execute o comando  "composer install" para instalar as dependencias do composer

2.4- "cp .env.example .env" para criar a conexao com o banco de dados {
configure esess campos com as informações do seu banco de dados:
  DB_CONNECTION=pgsql
  DB_HOST=localhost
  DB_PORT=5432
  DB_DATABASE=crud_app
  DB_USERNAME=postgres
  DB_PASSWORD=123456
  
2.5- depois execute "php artisan migrate" para criar as tabelas no banco de dados ou se preferir crie manualmente

2-6  execute no pgsql para criar algumas categorias       
insert into categoria(nome_categoria){
values
('tóxico'),
('obras'),
('comida'),
('mantimentos')
}

por ultimo execute "php artisan serve" para inciar o servidor pegue o link q ele vai gerar e guarda

3-1 abre um terminal no Front_end e execute "npm install"

3-2 abra o arquivo src/app/services/produtos.service.ts == const baseUrl = 'http://127.0.0.1:8000/api/produtos'; troque http://127.0.0.1:8000 pela url q voce copiou la do laravel

3-3 execute o "ng serve" para iniciar o servidor entre no link mostrado;

<h2>OBS utilize no campo de insersão de categoria os valores de 1 a 4 respectivos pelos valores adicionados no bd na categoria</h2>


