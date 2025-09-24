# React + Vite + Tailwind CSS

Este é um projeto React moderno configurado com Vite e Tailwind CSS v3.

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS v3** - Framework CSS utility-first
- **PostCSS** - Processador CSS
- **Autoprefixer** - Adiciona prefixos de vendor automaticamente

## 📦 Instalação

```bash
npm install
```

## 🏃‍♂️ Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173)

## 🏗️ Build para produção

```bash
npm run build
```

## 🔍 Preview da build

```bash
npm run preview
```

## 🎨 Tailwind CSS

O projeto está configurado com Tailwind CSS v3. As classes estão disponíveis em todos os componentes React.

### Exemplos de uso:

```jsx
// Gradientes e cores
<div className="bg-gradient-to-r from-blue-500 to-purple-600">

// Layout responsivo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Animações
<button className="hover:scale-105 transition-transform duration-200">
```

## 📁 Estrutura do projeto

```
src/
├── App.jsx          # Componente principal
├── main.jsx         # Ponto de entrada
├── index.css        # Estilos globais (Tailwind)
└── assets/          # Imagens e recursos
```

## ⚡ Vite

- **HMR (Hot Module Replacement)** - Atualizações em tempo real
- **Build otimizada** - Para produção
- **Suporte a ES modules** - Import/export nativo
