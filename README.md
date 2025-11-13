# simple-API-Rest-
a simple API made in Net.js that enables the creation of disposal points and the disposals carried out, code created for a college assignment (systems analysis and development)

# API de Gerenciamento de Descarte de Resíduos

## Visão Geral do Projeto

Esta API foi desenvolvida utilizando **NestJS** e **TypeScript** para registrar e consultar dados sobre o descarte de resíduos em uma determinada localidade, com o objetivo de conscientização ambiental.

O projeto se alinha diretamente ao **Objetivo de Desenvolvimento Sustentável (ODS) 12 da ONU: "Consumo e Produção Responsáveis"**, fornecendo uma ferramenta para monitorar e gerenciar o descarte.

## Funcionalidades Implementadas

O projeto inclui as seguintes funcionalidades, conforme a especificação:

* **Cadastro de Pontos de Descarte (CRUD Completo):** Permite registrar, consultar, atualizar e deletar locais de descarte (ecopontos, pontos de coleta, etc.).
* **Registro de Descartes por Usuário:** Rota para registrar informações detalhadas sobre cada descarte realizado por um usuário (nome, ID do ponto, tipo de resíduo, data).
* **Dashboard Resumido:** Rota pública `/relatorio` que retorna um objeto JSON com o resumo estatístico do sistema.

## Tecnologias

* **Framework:** NestJS (obrigatório)
* **Linguagem:** TypeScript
* **Validação:** Class-Validator / Class-Transformer
* **Gerenciamento de Dependências:** npm

## 🛠️ Instalação e Execução

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

### Passos

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/ianreyel/simple-API-Rest-]
    cd api-descarte-residuos # ou o nome da sua pasta
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o Servidor em Modo Desenvolvimento:**
    ```bash
    npm run start:dev
    ```
    O servidor será iniciado em `http://localhost:3000`.

## 📍 Endpoints da API

Aqui estão os principais endpoints disponíveis para testes.

### Módulo: Pontos de Descarte (`/pontos-descarte`)

| Método | URL | Descrição | Body (JSON Exemplo) |
| :--- | :--- | :--- | :--- |
| **POST** | `/pontos-descarte` | Cadastra um novo ponto de descarte. | `{"nomeLocal": "Ecoponto Central", "bairro": "Centro", "tipoLocal": "publico", "categoriaResiduos": "Papel e Plástico"}` |
| **GET** | `/pontos-descarte` | Lista todos os pontos de descarte cadastrados. | - |
| **GET** | `/pontos-descarte/:id` | Busca um ponto de descarte pelo ID. | - |
| **PATCH** | `/pontos-descarte/:id` | Atualiza parcialmente um ponto. | `{"nomeLocal": "Novo Nome"}` |
| **DELETE** | `/pontos-descarte/:id` | Remove um ponto de descarte. | - |

### Módulo: Registro de Descartes (`/descartes`)

| Método | URL | Descrição | Body (JSON Exemplo) |
| :--- | :--- | :--- | :--- |
| **POST** | `/descartes` | Registra um novo descarte por usuário. | `{"nomeUsuario": "Seu Nome", "id_pontoDescarte": 1, "tipoResiduo": "plástico", "data": "2025-11-12T13:30:00Z"}` |
| **GET** | `/descartes` | Lista todos os registros de descarte. | - |

### Módulo: Relatórios (`/relatorio`)

| Método | URL | Descrição | Dados Retornados (Resumo Estatístico) |
| :--- | :--- | :--- | :--- |
| **GET** | `/relatorio` | Retorna o dashboard resumido. | Local com mais registros, tipo de resíduo mais frequente, média de descartes diária, total de usuários, total de pontos cadastrados e crescimento percentual. |

---

### Contribuição

Contribuições são bem-vindas!
