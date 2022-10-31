//importando as configurações do servidor
const {app,port} = require('../server')

//rotas
const index = require('./routes/index')
const index = require('./routes/sobre')

//escuta do servidor
app.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})