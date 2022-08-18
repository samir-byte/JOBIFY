import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())
app.get('/', function (req, res) {
  res.status(200).json({
    msg:'success'
  })
})

app.post('/rest/v1/register', (req,res)=>{
  console.log(req.body)
  let user = {
    name: req.body.name,
    email: req.body.email,
  }
  res.status(200).json({
    msg:'success',
    user:user,
    token: 'sakdjfksdjfksjfkdsfjksdfj',
    location:'Location'
  })
})

app.post('/rest/v1/login', (req, res)=>{
  console.log(req.body)
  if(req.body.email === 'mosh@domain.com' && req.body.password === '123456'){
    let user = {
      name: 'Mosh',
      email: req.body.email,
    }
    res.status(200).json({
      msg:'success',
      user:user,
      token: 'sakdjfksdjfksjfkdsfjksdfj',
      location:'Location'
    })
  }
  else{
    res.status(401).json({
      status:'error',
      msg:'Incorrect email or password'
    })
  }
  
})

app.patch('/rest/v1/update', (req, res)=>{
  if(!req.headers.authorization){
    res.status(401).json({
      status:'error',
      msg:'Unauthorized'
    })
  }
  console.log(req.body)

  res.status(200).json({
    msg:'success',
    user:req.body
  })
})

app.listen(5000,()=>{
    console.log("server running on port 5000")
})