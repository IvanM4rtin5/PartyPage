# 🦖 Festa Jurássica do Benício 🦕

Bem-vindo ao repositório da página web da **Festa Jurássica do Benício**! Este projeto é uma página de apresentação para a festa de aniversário de 3 anos do Benício, com um tema de dinossauros. A página foi desenvolvida usando **React**, **Tailwind CSS** e **Vite**, e inclui seções como galeria de fotos, atividades da festa e um vídeo especial.

---

## 🚀 Funcionalidades

- **Cabeçalho Atraente**: Um cabeçalho com imagem de fundo e texto centralizado, dando as boas-vindas aos convidados.
- **Seção de Informações**: Detalhes sobre a data e local da festa, com ícones ilustrativos.
- **Galeria de Fotos**: Uma seção interativa para exibir fotos da festa (implementada no componente `GallerySection`).
- **Atividades da Festa**: Uma lista de atividades temáticas com descrições.
- **Vídeo Especial**: Um vídeo de fundo para dar um toque especial à página.
- **Rodapé**: Informações de contato e uma mensagem de agradecimento.

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno.
- **Lucide React**: Biblioteca de ícones para React.
- **TypeScript**: Adiciona tipagem estática ao JavaScript para maior segurança no código.

---

## 📂 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### ✅ Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado (versão 18 ou superior).
- **npm**: Gerenciador de pacotes do Node.js (vem instalado com o Node.js).

### 🛠️ Passos

1. **Clone o repositório**:
   ``bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio``
   
2. **Instale as dependências**:

``bash
Copy
npm install``

3. **Execute o projeto em modo de desenvolvimento**:

``bash
Copy
npm run dev``

4. **Acesse a aplicação**:
Abra o navegador e acesse http://localhost:5173.

5. **Para build de produção**:

``bash
Copy
npm run build
npm run preview``

---

## 🗂️ Estrutura do Projeto
Aqui está uma visão geral da estrutura do projeto:

Copy
-src/
 - assets/
  -  images/          # Imagens utilizadas no projeto
   - videos/          # Vídeos utilizados no projeto
 - components/        # Componentes React reutilizáveis
  -  GallerySection/  # Componente da galeria de fotos
  -App.tsx            # Componente principal da aplicação
  -main.tsx           # Ponto de entrada da aplicação
  -index.css          # Estilos globais
-public/              # Arquivos públicos (se houver)


---

## 📦 Dependências
📌 Principais Dependências
**React**: Biblioteca para construção de interfaces.

**Tailwind CSS**: Framework CSS utilitário.

**Lucide React**: Ícones para React.

**Vite**: Ferramenta de build e desenvolvimento.

## 🔧 Dependências de Desenvolvimento

**TypeScript**: Adiciona tipagem estática ao JavaScript.

**ESLint**: Ferramenta de linting para manter o código consistente.

**PostCSS**: Processador CSS para o Tailwind.

🎨 Personalização
Se você quiser personalizar o projeto, aqui estão algumas dicas:

Alterar Conteúdo:

Edite o arquivo App.tsx para modificar o texto, imagens e vídeos.

Adicione novas atividades na lista activities.

Adicionar Novas Imagens:

Coloque as novas imagens na pasta src/assets/images/ e atualize os caminhos no código.

Modificar Estilos:

Use o Tailwind CSS para personalizar os estilos diretamente no código JSX.

Adicionar Novos Componentes:

Crie novos componentes na pasta src/components/ e importe-os no App.tsx.

---

## 🤝 Contribuição
Se você quiser contribuir para o projeto, siga os passos abaixo:

Faça um fork do repositório.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Faça commit das suas alterações (git commit -m 'Adiciona nova feature').

Envie para a branch (git push origin feature/nova-feature).

Abra um pull request.
