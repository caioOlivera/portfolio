# Caio Oliveira — Portfólio

Rebrand completo do site pessoal, construído em Next.js 14 (App Router) + TypeScript + Tailwind + React Three Fiber.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000. O primeiro build baixa as fontes (Fraunces, Inter, IBM Plex Mono) do Google Fonts — é necessário ter acesso à internet nesse momento.

## Build de produção

```bash
npm run build
npm run start
```

## Deploy

Este projeto está pronto para deploy na Vercel (recomendado, zero-config) ou qualquer plataforma que suporte Next.js 14. Basta importar o repositório e definir o domínio.

## Antes de publicar

- [ ] Trocar `https://caiooliveira.dev` pelo domínio final em `src/app/layout.tsx`, `src/app/sitemap.ts` e `src/app/robots.ts`.
- [ ] Conferir se o e-mail e os links de LinkedIn/GitHub em `src/lib/data.ts` estão corretos.
- [ ] Gerar uma imagem Open Graph dedicada (1200×630) em vez do badge do GCP, se desejar algo mais personalizado.
- [ ] Revisar o texto do evento Seja Wild e das descrições de projeto em `src/lib/data.ts` — foram escritas com base no currículo e no post do LinkedIn, mas vale o seu ajuste fino.

## Estrutura

```
src/
  app/            → layout, página principal, metadata, sitemap/robots
  components/      → Navbar, Hero, About, Experience, Skills, Projects, Community, Contact, Footer
  components/MoonScene.tsx   → cena 3D da Lua (hero), luz sincronizada com o scroll
  components/ArcherScene.tsx → estátua 3D da arqueira élfica (seção Comunidade)
  lib/data.ts      → todo o conteúdo textual do site (experiência, projetos, skills, etc.)
public/
  models/          → moon.glb e elven-archer.glb, já comprimidos com Draco (~770 KB e ~420 KB)
  images/          → fotos, logos e badge de certificação
  docs/            → currículo em PDF, disponível para download no site
```

## Notas técnicas

- **Performance**: as cenas 3D só montam quando entram na viewport (`components/InView.tsx`), e são carregadas via `next/dynamic` com `ssr: false` para não pesar no bundle inicial. Os modelos `.glb` já passaram por compressão Draco (redução de ~85-90% no tamanho original).
- **SEO**: metadata completa (Open Graph, Twitter Card, JSON-LD de pessoa) em `layout.tsx`, além de `sitemap.ts` e `robots.ts` dinâmicos.
- **Acessibilidade**: foco visível customizado, `prefers-reduced-motion` respeitado, textos alternativos em todas as imagens.
- **Paleta**: tons de "noite" (`void`), luar (`moon`) e um dourado de conquista (`gold`), definidos em `tailwind.config.ts`.
