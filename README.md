#APP

GymPass style app.

## RFs (Requisistos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuario logado;
- [ ] Deve ser possível obter o numero de checkins realizados pelo usuarios logado;
- [ ] Deve ser possivel o usuario obter seu historico de check-ins;
- [ ] Deve ser possivel o usuario buscar academias proximas;
- [ ] Deve ser possivel o usuario buscar academias pelo nome;
- [ ] Deve ser possivel o usuario realizar check-in em uma academia;
- [ ] Deve ser possivel validar o check-in de um usuario;
- [ ] Deve ser possiel cadastrar uma academia;

## RNs (Regras de negócio)

- [ ] O usuario não deve poder se cadastrar com o e-mail duplicado;
- [ ] O usuario não pode fazer 2 checkin no mesmo dia;
- [ ] O usuario não pode fazer check-in se não estiver perto da academia;
- [ ] O check-in so pode ser validado até 20 min após criado;
- [ ] A academia só pode ser cadastrada por administradores;
- [ ] O check-in so pode ser validado por administradores;

## RNFs (Requisitos não funcionais)

- [ ] A senha do usuario precisa estar criptografada;
- [ ] OS dados da aplicação precisam estar persistidos em um banco PostgresSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por paginas;
- [ ] O Usuario deve ser autenticado por um JWT;