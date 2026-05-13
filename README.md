# Angolaxy — Marketplace Angola 🇦🇴

Marketplace angolano para compra e venda online, construído com React + TypeScript + Tailwind CSS.

## Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** — estilização utility-first
- **React Router v7** — roteamento SPA
- **Vite** — bundler e dev server
- **Vercel** — hosting e deploy automático

## Início Rápido (local)

```bash
npm install
npm run dev
# Abre em http://localhost:5173
```

## Build para produção

```bash
npm run build
# Output em /dist
```

## Deploy no Vercel

1. Faça push do repositório para o GitHub
2. Aceda a [vercel.com](https://vercel.com) → **New Project**
3. Importe o repositório
4. As configurações são detectadas automaticamente:
   - **Framework:** Vite
   - **Build command:** `npm run build`
   - **Output dir:** `dist`
5. Clique **Deploy** — pronto!

O ficheiro `vercel.json` já configura o redirecionamento SPA automaticamente.

## Variáveis de Ambiente (para produção)

Quando integrar um backend real, adicione no Vercel:

```
VITE_API_URL=https://api.angolaxy.co.ao
```

## Estrutura do Projecto

```
src/
├── components/
│   ├── common/         # ProductCard, etc.
│   └── layout/         # Header, Footer, Layout
├── context/            # CartContext, AuthContext
├── pages/              # Uma pasta por página
├── routes/             # AppRoutes.tsx
├── data.ts             # Dados e tipos (substituir por API)
└── main.tsx
```

## Próximos Passos

- [ ] Integrar backend (Supabase / Firebase / API própria)
- [ ] Autenticação real (JWT / OAuth)
- [ ] Gateway de pagamento (Multicaixa Express API)
- [ ] Pesquisa com Algolia ou ElasticSearch
- [ ] Painel de administração
- [ ] App mobile com React Native

---

Feito com ❤️ em Luanda 🇦🇴
