# Delivery API 🌐

Uma API robusta para o sistema de delivery, construída com **Node.js** e **TypeScript**. Ela alimenta o frontend com dados em tempo real, gerenciando contas, pedidos, produtos e categorias. Projetada para demonstrar habilidades práticas em backend, como autenticação segura e integração com serviços externos, com deploy na **Vercel**.

![Node.js](https://img.shields.io/badge/Node.js-18-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Express](https://img.shields.io/badge/Express.js-4-000)

## Sobre o Projeto

Esta API é o coração do sistema de delivery, oferecendo endpoints rápidos e seguros para criar contas, gerenciar pedidos e organizar produtos. Usando **Prisma ORM** com **PostgreSQL** (hospedado no NeonDB), ela garante uma estrutura de dados confiável. Imagens de produtos sobem para o **Cloudinary**, e a autenticação é protegida por **JWT**. É um backend pronto para produção, testado com **Insomnia**.

## Funcionalidades Principais

- **Autenticação Segura**: Crie contas, faça login e receba um token JWT.
- **Gerenciamento Completo**: CRUD para categorias e produtos, com upload de imagens.
- **Sistema de Pedidos**: Crie e finalize orders com facilidade.
- **Carrinho Dinâmico**: Adicione ou remova produtos antes de fechar o pedido.
- **Proteção**: Middleware de autenticação em rotas sensíveis.

## Tecnologias que Movem a API

- **Node.js & Express.js**: Servidor rápido e leve.
- **TypeScript**: Código seguro e previsível.
- **Prisma ORM**: Acesso ao banco simplificado.
- **PostgreSQL**: Banco relacional robusto (NeonDB).
- **JWT**: Autenticação moderna.
- **Multer & Cloudinary**: Upload de imagens eficiente.

## Decisões Técnicas

- Escolhi **Prisma** por sua facilidade em gerenciar esquemas e migrations, acelerando o desenvolvimento.
- Usei **JWT** para autenticação stateless, ideal para APIs escaláveis.
- **Cloudinary** foi integrado com **Multer** para uploads diretos, economizando espaço local.

## Deploy

- Hospedado na **Vercel** para simplicidade e escalabilidade.
- Banco no **NeonDB**, um PostgreSQL serverless.
- Imagens no **Cloudinary** para desempenho otimizado.
