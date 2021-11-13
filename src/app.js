const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const indexRoutes = require('./routes/index')
// const path = require('path')

// configuraciones
  // const port = 3000
app.set('port', process.env.PORT || 3000);
mongoose.connect(process.env.DB_STRING)
.then(db=>console.log('connected'))
.catch(err=>console.log(err))

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(cors())

// rutas
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/',indexRoutes);


// inicio servidor
  // app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`)
  // })
app.listen(app.get('port'), () => {
  console.log(`Example app listening`)
})