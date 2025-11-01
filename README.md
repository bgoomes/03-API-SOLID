# 03-API-SOLID

API em **Node.js + TypeScript** construída seguindo os princípios **SOLID**, com arquitetura modular (MVC) e foco em boas práticas.  
O domínio da aplicação é um sistema de **check-in de academias**, inspirado no modelo do *GymPass*.

---

## 🚀 Tecnologias

- **Node.js** + **TypeScript**  
- **Prisma ORM**  
- **Express**  
- **Zod** (validação de dados)  
- **JWT** (autenticação)  
- **PostgreSQL**

---

## 📋 Funcionalidades

- Cadastro e autenticação de usuários  
- Perfil do usuário autenticado  
- Cadastro e busca de academias (por nome ou localização)  
- Check-in em academias (com validações de distância e tempo)  
- Histórico e contagem de check-ins  
- Validação de check-ins (admin)  

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/bgoomes/03-API-SOLID.git
cd 03-API-SOLID

# Instale as dependências
npm install

# Copie e configure o .env
cp .env.example .env

# Execute as migrações
npx prisma migrate dev

# Inicie o servidor
npm run dev
