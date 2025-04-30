# CodeLeap Network
Uma aplicação de rede social baseada em React que permite aos usuários criar, ler, atualizar e excluir postagens.

## Funcionalidades
- Autenticação de usuário (baseada em nome de usuário)
- Criar novas postagens
- Visualizar postagens de todos os usuários
- Editar suas próprias postagens
- Excluir suas próprias postagens
- Design responsivo
## Stack Tecnológica
- React com TypeScript
- Tailwind CSS para estilização
- React Query para busca de dados
- React Hook Form para manipulação de formulários
- Framer Motion para animações
- Axios para requisições API
- Vite como ferramenta de build
## Estrutura do Projeto
- /src/components : Componentes de UI
- /src/context : Context React para gerenciamento de estado
- /src/hooks : Hooks React personalizados
- /src/services : Funções de serviço para API
- /src/types : Definições de tipos TypeScript
## Como Começar
### Pré-requisitos
- Node.js (v14 ou posterior)
- npm ou yarn

### Instalação
1. Clone o repositório ou baixe o código fonte:


```bash
git clone git@github.com:MatheusBeniniF/codeLeap-network.git
```

2. Navegue até o diretório do projeto:

```bash
cd codeLeap-network
```

3. Instale as dependências:

```bash
npm i
```

### Executando o Servidor de Desenvolvimento
Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em http://localhost:5173 (ou em outra porta se a 5173 já estiver em uso).

## Uso
1. Quando você abrir a aplicação pela primeira vez, será solicitado que insira um nome de usuário
2. Após fazer login, você pode:
   - Criar novas postagens usando o formulário no topo da página
   - Visualizar postagens de todos os usuários
   - Editar ou excluir suas próprias postagens usando os ícones no canto superior direito de cada postagem
3. Você pode sair usando o botão no cabeçalho

## Integração com API
A aplicação se conecta à API CodeLeap em https://dev.codeleap.co.uk/careers/ para todas as operações CRUD.