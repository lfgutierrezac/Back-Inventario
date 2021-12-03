const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const path = require('path')
const authRoutes = require('./routes/auth.routes')
const clientRoutes = require('./routes/client.routes')
const providerRoutes = require('./routes/provider.routes')
const productRoutes = require('./routes/product.routes')
const categoryRoutes = require('./routes/category.routes')
require('dotenv').config()
// const path = require('path')

// configuraciones
  // const port = 3000
app.set('port', process.env.PORT || 3000);
mongoose.connect(process.env.DB_STRING)
.then(db=>console.log('connected to Mongo'))
.catch(err=>console.log(err))
app.use('/documentation',express.static(path.join(__dirname,'../doc/')))


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(cors())

// rutas
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/', authRoutes);
app.use('/', clientRoutes);
app.use('/', providerRoutes);
app.use('/', productRoutes);
app.use('/', categoryRoutes);


// inicio servidor
  // app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`)
  // })
app.listen(app.get('port'), () => {
  console.log(`Server Running`)
})