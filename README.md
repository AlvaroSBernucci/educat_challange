# Projeto Django REST com React e TypeScript

Este é um projeto que combina um backend desenvolvido em Django REST Framework e um frontend criado com React e TypeScript.

## Requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- Python 3.10+
- Node.js 16+
- npm ou yarn
- Banco de dados compatível com MSSQL

## Dependências do Backend

As dependências do backend estão listadas no arquivo `requirements.txt`:

```plaintext
asgiref==3.8.1
Django==5.0.10
django-cors-headers==4.6.0
djangorestframework==3.15.2
djangorestframework_simplejwt==5.4.0
drf-yasg==1.21.8
inflection==0.5.1
mssql-django==1.5
packaging==24.2
pillow==11.1.0
PyJWT==2.10.1
pyodbc==5.2.0
python-decouple==3.8
pytz==2024.2
PyYAML==6.0.2
sqlparse==0.5.3
uritemplate==4.1.1
```

## Configuração do Ambiente Local

### 1. Configurando o Backend

1. Clone este repositório:

    ```bash
    git clone https://github.com/AlvaroSBernucci/educat_challange
    cd seu-repositorio/backend
    ```

2. Crie e ative um ambiente virtual:

    ```bash
    python -m venv venv
    source venv/bin/activate  # No Windows: venv\Scripts\activate
    ```

3. Instale as dependências do projeto:

    ```bash
    pip install -r requirements.txt
    ```

4. Configure as variáveis de ambiente no arquivo `.env`:

    ```plaintext
    SECRET_KEY=uma-chave-secreta-aqui
    DEBUG=True
    DATABASE_URL=mssql+pyodbc://usuario:senha@host:porta/nome_banco?driver=ODBC+Driver+17+for+SQL+Server
    ```

5. Execute as migrações do banco de dados:

    ```bash
    python manage.py migrate
    ```

6. Inicie o servidor de desenvolvimento do backend:

    ```bash
    python manage.py runserver
    ```

### 2. Configurando o Frontend

1. Navegue até o diretório do frontend:

    ```bash
    cd ../frontend
    ```

2. Instale as dependências:

    ```bash
    npm install  # ou yarn install
    ```

3. Configure o arquivo `.env` com a URL do backend:

    ```plaintext
    REACT_APP_API_URL=http://localhost:8000/api
    ```

4. Inicie o servidor de desenvolvimento do frontend:

    ```bash
    npm start  # ou yarn start
    ```

## Testando a Aplicação

1. Acesse o frontend no navegador em `http://localhost:3000`.
2. O backend estará disponível em `http://localhost:8000`.

## Documentação da API

A documentação da API está disponível no endpoint `/swagger/` do backend. Certifique-se de que o servidor está rodando e acesse:

```plaintext
http://localhost:8000/swagger/
```

## Recursos

- **Backend**: Django REST Framework
- **Frontend**: React com TypeScript
- **Banco de Dados**: MSSQL

## Estrutura do Projeto

```plaintext
projeto/
├── backend/
│   ├── manage.py
│   ├── app/
│   └── ...
├── frontend/
│   ├── src/
│   └── ...
└── README.md
```

## Informações extras

1) Somente admins tem acesso ao CRUD de Aulas no frontend
2) 
