yarn init -y // iniciar projeto

yarn add typescript -D // adicionar typescript

yarn tsc --init // cria arquivo de configurações do typescript

yarn add ts-node-dev -D // executa o servidor e restarta o servidor sempre que houver alteração

yarn add express

yarn add @types/express

app.use(express.json()) // express não lê JSON sem essa linha

// GET: buscar informação
// POST: criar nova informação
// PUT: atualizar uma informação existente
// DELETE: deletar uma informação existente

// (Request Body): Dados criação/atualização de um registro

// Route Params: identificar qual recurso eu quero atualizar/deletar
// Query Params: paginação/fitros/ordenação

yarn add knex sqlite3

//migrations: controlam a versão do banco de dados

yarn add cors

yarn add @types/cors -D