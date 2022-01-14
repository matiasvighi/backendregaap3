const { request, response } = require('express')
const cors = require('cors')
const express = require ('express')
const Conf = require('./models/Conf')
const res = require('express/lib/response')
const app = express()
require ("./mongoose.js")

app.use(express.json())
app.use(cors())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  //res.setHeader('Access-Control-Allow-Origin', '/api/');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.get('/', (request, response) => {
response.send('<h1>Hello world</h1>')
})
app.get('/api/horarios/:id', (request, response) =>{
  let garlopa = request.params.id 
  Conf.find({horario : garlopa}).then(confs => {
      response.json(confs)
      console.log(confs)
      console.log(garlopa,"request")
    })
 //   console.log(confs)
    //response.send("chota")
})

app.post('/api/horarios/:id' ,async (request, response) => {
  const horarios = request.body
  const pija = horarios.horario
  const valor = horarios.valor
  const flag = horarios.flag
  console.log (pija,"id")

  console.log (horarios)
  const newhorario = new Conf( {
     
      horario: pija,
      valor: valor,
      flag : flag


//GARLOPAa
  })
  let torta = newhorario.horario
  
  
  
  
  
  Conf.find, ({horario : torta}).then(confs2 => {
   
    
    console.log  ("rta db1",confs2,"rta db")
    console.log("consulta a db",torta)
    confs2.horario = newhorario;
    console.log(newhorario,"modificado")

    await confs2.save()
   // confs2.save().then(result => {console.log(result)})
  })
  //  newhorario.save().then(savedConf => {
   // response.json(savedConf)
    //console.log(response.json,"respuesta")
  //  Conf.updateOne(
   //   {horario : torta},
    //  {horiario : newhorario}).then(updatedConf => {response.json(updatedConf)
       
    //    console.log("update lpm",updatedConf,"horario?",newhorario.horario )

    
  
  })

 // response.json ( newhorario)
  

const PORT = 3003
app.listen (PORT, () => {
console.log("server is running on port",PORT)
})