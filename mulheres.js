const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
  {
    nome: 'Luza Pedreira',
    imagem: 'https://avatars.githubusercontent.com/u/90648447?v=4',
    minibio: 'Web Developer Jr.'
  },
  {
    nome: 'Alê Rieiro',
    imagem: 'https://avatars.githubusercontent.com/u/119016766?v=4',
    minibio: 'Desenvolvimento Web Front-End.'
  },
  {
    nome: 'Laís Costa',
    imagem: 'https://avatars.githubusercontent.com/u/137096691?v=4',
    minibio: 'Web Developer Jr.'
  }
]
function mostraMulheres(request, response) {
  response.json(mulheres)
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)