# Deploy no Cloudflare Pages — Custo: R$0

## 1. Sobe no GitHub (uma vez)

```bash
cd /home/ubuntu/portfolio
git init
git add .
git commit -m "portfolio inicial"
# crie um repo no github.com (ex: solon-portfolio) e:
git remote add origin https://github.com/SEU_USUARIO/solon-portfolio.git
git push -u origin main
```

## 2. Conecta no Cloudflare Pages

1. Entre em https://pages.cloudflare.com
2. "Create a project" → "Connect to Git" → selecione o repo
3. Configure o build:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: 18
4. Clique em "Save and Deploy"

Pronto. Em 2-3 minutos o site estará em `solon-portfolio.pages.dev`.

## 3. Domínio customizado (opcional, ~R$40/ano)

No painel Cloudflare Pages → Custom Domains → adiciona `solonbarroso.com.br`
ou qualquer domínio que você comprar no Registro.br.

## 4. Atualizar o site

Qualquer `git push` para `main` faz deploy automático. Sem configuração extra.

## Testar localmente antes de subir

```bash
cd /home/ubuntu/portfolio
npm install
npm run dev   # abre em http://localhost:3000
npm run build # gera a pasta `out` (o que vai pro Cloudflare)
```
