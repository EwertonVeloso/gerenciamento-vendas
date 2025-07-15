# API para Sistema de Vendas (Protótipo)

![Status](https://img.shields.io/badge/status-funcional-brightgreen)

API RESTful desenvolvida em Node.js e Express para ser o backend de um sistema de gerenciamento de vendas. Ela fornece endpoints para consulta de produtos e criação de pedidos.

---

###  Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   Um cliente de API, como o [Postman](https://www.postman.com/), para testar os endpoints.

---

### Como Executar a API

1.  **Clone o repositório:**

2.  **Entre na pasta do projeto:**
   
3.  **Instale as dependências:**
    ```bash
    npm install express cors
    ```

4.  **Inicie o servidor:**
    ```bash
    node server.js
    ```
    ✅ A API estará rodando em `http://localhost:3001`.

---

A seguir estão os endpoints disponíveis para teste.

#### 1. Buscar Catálogo de Produtos

-   **Método:** `GET`
-   **URL:** `/api/products`
-   **Descrição:** Retorna uma lista com todos os produtos disponíveis no catálogo.
-   **Resposta de Sucesso (200 OK):**
    ```json
  "products": [
    {
      "id": 1,
      "name": "Conjunto1",
      "unitPrice": 79.90
    },
    {
      "id": 2,
      "name": "Conjunto2",
      "unitPrice": 89.90
    },
    {
      "id": 3,
      "name": "Conjunto3",
      "unitPrice": 119.90
    },
    {
      "id": 4,
      "name": "Conjunto4",
      "unitPrice": 129.90
    
    }
  ]
    ```

#### 2. Criar Novo Pedido

-   **Método:** `POST`
-   **URL:** `/api/orders`
-   **Descrição:** Registra um novo pedido de venda.
-   **Corpo da Requisição (Body) - Exemplo:**
    ```json
    {
      "items": [
        { "id": 1, "quantity": 1, "unitPrice": 79.90 },
        { "productId": 4, "quantity": 2, "unitPrice": 129.90 }
      ],
      "total": 209.80
    }
    ```
-   **Resposta de Sucesso (201 Created):**
    ```json
    {
        "message": "Pedido criado com sucesso!",
        "order": {
            "items": [
                 { "id": 1, "quantity": 1, "unitPrice": 79.90 },
                { "productId": 4, "quantity": 2, "unitPrice": 129.90 }
            ],
            "total": 209.80
        }
    }
    ```

---
