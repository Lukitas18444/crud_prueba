project-root/
│
├── src/
│   ├── controllers/ # Lógica de las funciones
│   ├── models/      # Esquema de datos
│   ├── routes/      # Definición de rutas
│   └── app.js       # Punto de entrada
├── .env             # Variables de entorno
└── package.json

mkdir node-crud && cd node-crud
npm init -y

npm install express dotenv
npm install -D nodemon