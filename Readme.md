Necessária pré configuração das seguintes tecnologias:

@angular/cli: 1.4.2 ( ou superior)
node: 8.4.0 ( ou superior)
npm 5.3.0 ( ou superior)

Projeto consiste nas seguintes Critérios:
1.1. - Fazer uma tela de login, que irá se autenticar em uma api que retornará o token.
1.2. - Criar uma tela que irá fazer uma listagem qualquer (por exemplo produto), e
esta tela só pode ser acessada se o usuário tiver o token de autenticação
antes, essa listagem deverá vir de uma api que deverá receber e validar o
token antes de devolver a listagem.
1.3. Caso o token esteja expirado deverá ser redirecionado para a tela de login.

API DISPONIVEL EM:
https://github.com/CamilaNachbar/api-jwt-final/

1.Fazer download do projeto.

2. Na Pasta do projeto digite npm start

3. Acesse localhost:4200/login

4. digite as informações de acesso de usuarios ( descritos no Readme.md da api)

5. Acessara a tela de produtos. Após 1 minuto o token expira e volta para tela de login.

