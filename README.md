# 💰 DT Money

**Uma aplicação de gestão financeira moderna e intuitiva para controlar seus gastos e receitas em tempo real.**

---

## 📋 Visão Geral

DT Money é uma aplicação web full-stack desenvolvida com React e TypeScript que permite aos usuários gerenciar suas transações financeiras de forma simples e eficiente. O projeto oferece uma interface responsiva e intuitiva para visualizar entradas, saídas e o saldo total das contas, com suporte a categorização de despesas e tipos de transação.

---

## ✨ Funcionalidades Principais

- 🎯 **Dashboard Interativo**: Visualize um resumo completo de suas finanças com indicadores de entrada, saída e total
- ➕ **Adicionar Transações**: Crie novas transações de forma rápida e fácil através de um modal intuitivo
- 📊 **Tabela de Transações**: Visualize todas as suas transações em uma tabela organizada e filtrada
- 💱 **Formatação Monetária**: Suporte automático para formatação em Real Brasileiro (BRL)
- 🏷️ **Categorização**: Organize transações por categorias personalizadas
- 📱 **Design Responsivo**: Interface adaptada para os tamanhos de tela
- 🎨 **Styling Moderno**: Componentes estilizados com Styled Components para uma experiência visual premium

---

## 🛠️ Stack Tecnológico

### Frontend
- **React** (v19.3.1) - Biblioteca de UI baseada em componentes
- **TypeScript** (~6.0.3) - Superset de JavaScript com tipagem estática
- **Styled Components** (v6.7.0) - Estilização CSS-in-JS
- **React Modal** (v3.16.3) - Componente modal acessível

### Build & Desenvolvimento
- **Vite** (v8.3.6) - Build tool moderno e rápido
- **React Plugin** (@vitejs/plugin-react v6.1.2) - Suporte a JSX no Vite

### API & Dados
- **Axios** (v1.21.1) - Cliente HTTP para requisições
- **MirageJS** (v0.1.48) - Mock server para simular API backend

### Utilitários
- **Polished** (v4.3.1) - Utilities para manipulação de cores e estilos

---

## 📦 Estrutura do Projeto

```
dtmoney/
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Header/          # Cabeçalho da aplicação
│   │   ├── Dashboard/       # Painel principal
│   │   ├── Summary/         # Resumo financeiro
│   │   ├── TransactionsTable/ # Tabela de transações
│   │   └── NewTransactionModal/ # Modal para nova transação
│   ├── hooks/               # Hooks customizados
│   │   └── TransactionsContext.tsx # Context para estado de transações
│   ├── services/            # Serviços de integração
│   │   └── api.ts          # Configuração do cliente Axios
│   ├── styles/              # Estilos globais
│   ├── assets/              # Imagens e recursos estáticos
│   ├── App.tsx              # Componente raiz
│   └── index.tsx            # Ponto de entrada
├── public/                  # Arquivos públicos (favicon, etc)
├── index.html               # Arquivo HTML principal
├── vite.config.ts           # Configuração do Vite
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências e scripts
```

---

## 🚀 Como Começar

### Pré-requisitos
- Node.js (v18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/frederico-codes/DTMONEY.git
cd dtmoney
```

2. **Instale as dependências:**
```bash
npm install
```

### Desenvolvimento

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Compile o projeto para produção:
```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Visualizar Build

Visualize a versão build local:
```bash
npm run preview
```

---

## 🏗️ Arquitetura

### Context API
O projeto utiliza **React Context API** para gerenciar o estado global das transações através do `TransactionsContext`, fornecendo:
- Acesso centralizado às transações
- Função para criar novas transações
- Hook customizado `useTransactions()` para consumir dados

### Integração com API
A integração é feita via **Axios** com configuração centralizada em `services/api.ts`:
- Base URL configurada para `http://localhost:5173/api`
- Endpoints para GET e POST de transações

### Componentes Principais

#### Transaction (Interface)
```typescript
{
  id: number
  title: string
  amount: number
  type: string         // "deposit" ou "withdraw"
  category: string
  createdAt: string
}
```

#### Summary
Calcula dinamicamente:
- **Entradas (Deposits)**: Soma de transações do tipo "deposit"
- **Saídas (Withdraws)**: Soma de transações do tipo "withdraw"
- **Total**: Entradas - Saídas

---

## 💡 Padrões e Melhores Práticas

- ✅ **Componentes Funcionais**: Uso exclusivo de functional components com hooks
- ✅ **TypeScript Stricto**: Type safety em toda a aplicação
- ✅ **Separação de Responsabilidades**: Divisão clara entre componentes, hooks e serviços
- ✅ **CSS-in-JS**: Styled Components para estilos isolados e reutilizáveis
- ✅ **Context API**: Gerenciamento de estado sem bloat de dependências

---

## 📱 Responsividade

- 📱 Tablets (768px+)
- 🖥️ Desktops (1024px+)

---

## 🔐 Segurança e Performance

- **TypeScript**: Captura erros em tempo de compilação
- **Vite**: Build otimizado e carregamento rápido
- **React 19**: Performance aprimorada com as últimas features

---

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença padrão. Consulte o arquivo LICENSE para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido por **@frederico-codes**

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📧 Suporte

Para dúvidas, sugestões ou reporte de bugs, abra uma issue no repositório.

---

<div align="center">

**Desenvolvido com ❤️ usando React + TypeScript**

</div>
