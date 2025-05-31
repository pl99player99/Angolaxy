# Instruções de Uso do Marketplace Angolaxy

## Visão Geral

O Angolaxy é um marketplace angolano completo para compra e venda online com segurança. Este documento fornece instruções para executar, testar e expandir o projeto.

## Requisitos do Sistema

- Node.js (versão 16 ou superior)
- npm ou pnpm (recomendado)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

## Estrutura do Projeto

O projeto segue uma arquitetura modular baseada em React e TypeScript:

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

## Instalação e Execução

1. **Instalar dependências:**
   ```bash
   cd angolaxy
   pnpm install
   # ou
   npm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```
   O aplicativo estará disponível em `http://localhost:5173`

3. **Compilar para produção:**
   ```bash
   pnpm build
   # ou
   npm run build
   ```
   Os arquivos compilados estarão na pasta `dist/`

4. **Visualizar versão de produção localmente:**
   ```bash
   pnpm preview
   # ou
   npm run preview
   ```

## Funcionalidades Principais

### Para Compradores
- Navegação por categorias de produtos
- Busca de produtos
- Visualização detalhada de produtos
- Carrinho de compras
- Processo de checkout
- Gerenciamento de perfil e pedidos
- Lista de favoritos

### Para Vendedores
- Painel do vendedor
- Gerenciamento de produtos
- Acompanhamento de vendas e pedidos
- Análise de desempenho

## Personalização

### Modificando o Tema
- As cores principais podem ser ajustadas no arquivo `tailwind.config.js`
- Estilos globais estão em `src/styles/`

### Adicionando Novas Páginas
1. Crie o componente da página em `src/pages/`
2. Adicione a rota em `src/routes/AppRoutes.tsx`
3. Atualize links de navegação conforme necessário

### Integrando com Backend Real
Atualmente, o projeto utiliza dados simulados. Para integrar com um backend real:

1. Configure os endpoints da API em `src/services/api.ts`
2. Substitua os dados simulados por chamadas de API nos componentes relevantes
3. Implemente tratamento de erros e estados de carregamento

## Implantação

Para implantar o marketplace em um ambiente de produção:

1. Execute `pnpm build` para gerar os arquivos estáticos
2. Faça upload dos arquivos da pasta `dist/` para seu servidor web
3. Configure seu servidor para redirecionar todas as requisições para `index.html` (necessário para roteamento SPA)

## Suporte e Contribuição

Para suporte ou contribuições ao projeto:

1. Consulte a documentação detalhada em `DOCUMENTATION.md`
2. Siga as convenções de código estabelecidas
3. Teste todas as alterações antes de implantar

---

Desenvolvido com ❤️ para o mercado angolano
