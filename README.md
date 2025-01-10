# Projeto Django REST com React e TypeScript

Este é um projeto que combina um backend desenvolvido em Django REST Framework e um frontend criado com React e TypeScript.

## Requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- Python 3.10+
- Node.js 16+
- npm ou yarn
- React
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
    ```

2. Crie e ative um ambiente virtual:

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # No Windows: venv\Scripts\activate
    ```

3. Instale as dependências do projeto:

    ```bash
    pip install -r requirements.txt
    ```

4.  Gere uma secret key:
   
    ```bash
      openssl rand -base64 32 (gerar secret key)
    ```bash

5. Crie um arquivo `.env` na pasta raiz e configure as variáveis de ambiente no arquivo :

    ```plaintext
    SECRET_KEY=uma-chave-secreta-aqui
    DEBUG=True
    ALLOWED_HOSTS=*
    CORS_ALLOWED_ORIGINS=http://127.0.0.1:5173
    DATABASE_URL=mssql+pyodbc://usuario:senha@host:porta/nome_banco?driver=ODBC+Driver+17+for+SQL+Server
    ```

6. Execute as migrações do banco de dados:

    ```bash
    python manage.py migrate
    ```

7. Inicie o servidor de desenvolvimento do backend:

    ```bash
    python manage.py runserver
    ```

### 2. Configurando o Frontend

1. Abra um terminal paralelo(bash) e navegue até o diretório educat-project:

    ```bash
    cd educat-challange # Se estiver na raiz do projeto
    ```

2. Instale as dependências:

    ```bash
    npm install  # ou yarn install
    ```


4. Inicie o servidor de desenvolvimento do frontend:

    ```bash
    npm run dev  # ou yarn dev
    ```

## Testando a Aplicação

1. Crie um super usário para realizar os testes :

    ```bash
    python manage.py createsuperuser
    ```
   
2. Acesse o frontend no navegador em `http://127.0.0.1:5173`.
3. O backend estará disponível em `http://localhost:8000`.
4. Você pode criar aulas e usuários através do painel de admin do django com usuário e senhas cadastrados no item 1.
5. Você pode criar aulas e usuários diretamente do frontend logando no site com usuário e senhas cadastrados no item 1.

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

1) Somente admins podem criar usuários.
2) Somente o admin pode escolher os usuários que são professores.
3) Somente o admin pode criar e editar as aulas.
4) As aulas devem iniciar em horários múltiplos de 5 minutos, como por exemplo, 16:30 ou 16:35.
5) Para criar uma aula é necessário que tenha um professor cadastrado.
6) Estou utilizando o WSL na minha máquina, tentei instalar o MySql diversas vezes, mas tive erro por causa da versão do driver ODBC, ralmente não consegui realizar a instalação a tempo, optei por priorizar o resto do projeto.

