/**
 * Arquivo de documentação principal do Angolaxy
 * 
 * Este arquivo contém informações sobre a estrutura do projeto,
 * componentes principais, e instruções para manutenção e expansão.
 */

# Documentação do Marketplace Angolaxy

## Visão Geral

Angolaxy é um marketplace angolano completo para compra e venda online com segurança.
O projeto foi desenvolvido utilizando React, TypeScript e Tailwind CSS, seguindo
uma arquitetura modular e responsiva.

## Estrutura do Projeto

```
src/
├── assets/          # Imagens, ícones, fontes
├── components/      # Componentes reutilizáveis
│   ├── common/      # Componentes genéricos (botões, cards, etc.)
│   ├── layout/      # Componentes de layout (header, footer, etc.)
│   └── sections/    # Seções específicas de páginas
├── context/         # Contextos React para estado global
├── hooks/           # Custom hooks
├── pages/           # Componentes de página
├── routes/          # Configuração de rotas
├── services/        # Serviços (API, autenticação, etc.)
├── styles/          # Estilos globais
└── utils/           # Funções utilitárias
```

## Componentes Principais

### Layout

- **Header**: Barra de navegação superior com logo, busca, carrinho e menu de usuário
- **Footer**: Rodapé com links, informações de contato e copyright
- **Layout**: Componente que envolve todas as páginas com Header e Footer

### Páginas

- **HomePage**: Página inicial com banners, categorias e produtos em destaque
- **ProductPage**: Página de detalhes do produto
- **CategoryPage**: Listagem de produtos por categoria com filtros
- **CartPage**: Carrinho de compras
- **CheckoutPage**: Finalização de compra
- **LoginPage**: Autenticação de usuário
- **RegisterPage**: Cadastro de novo usuário
- **ProfilePage**: Perfil do usuário com informações e pedidos
- **NotFoundPage**: Página 404 para rotas não encontradas

### Contextos Globais

- **AuthContext**: Gerencia estado de autenticação do usuário
- **CartContext**: Gerencia estado do carrinho de compras

## Fluxos Principais

### Fluxo de Compra
1. Usuário navega pela HomePage ou CategoryPage
2. Seleciona um produto (ProductPage)
3. Adiciona ao carrinho
4. Acessa o carrinho (CartPage)
5. Finaliza a compra (CheckoutPage)

### Fluxo de Autenticação
1. Usuário acessa LoginPage
2. Insere credenciais ou se cadastra (RegisterPage)
3. É redirecionado para a página anterior ou HomePage

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **React Router**: Biblioteca para roteamento
- **Context API**: Para gerenciamento de estado global

## Convenções de Código

- Componentes utilizam PascalCase (ex: ProductCard)
- Funções e variáveis utilizam camelCase (ex: handleSubmit)
- Arquivos de componentes são nomeados igual ao componente (ex: ProductCard.tsx)
- Cada componente tem sua própria pasta quando necessário incluir arquivos relacionados

## Manutenção e Expansão

### Adicionando Novas Páginas
1. Crie o componente da página em `src/pages/`
2. Adicione a rota em `src/routes/AppRoutes.tsx`
3. Atualize links de navegação conforme necessário

### Adicionando Novos Componentes
1. Identifique se é um componente comum, de layout ou de seção
2. Crie o componente na pasta apropriada
3. Documente o propósito e uso do componente

### Modificando o Estilo
- Estilos globais estão em `src/styles/`
- Configurações do Tailwind estão em `tailwind.config.js`
- Cada componente tem seus próprios estilos usando classes do Tailwind

## Integração com Backend

Atualmente, o projeto utiliza dados simulados para demonstração. Para integrar com um backend real:

1. Crie serviços de API em `src/services/`
2. Substitua os dados simulados por chamadas de API
3. Implemente tratamento de erros e estados de carregamento

## Considerações de Performance

- Utilize React.memo para componentes que não mudam frequentemente
- Evite renderizações desnecessárias com useMemo e useCallback
- Otimize imagens antes de adicioná-las ao projeto
- Considere lazy loading para componentes grandes ou raramente usados

## Testes

Para implementar testes:
1. Utilize Jest e React Testing Library
2. Crie testes unitários para componentes em arquivos `.test.tsx`
3. Crie testes de integração para fluxos principais

## Deployment

O projeto pode ser construído para produção usando:

```bash
npm run build
```

Os arquivos gerados estarão na pasta `build/` prontos para serem servidos por qualquer servidor web estático.
