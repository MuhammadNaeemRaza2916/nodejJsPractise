import express from 'express'
const app = express()
const port = 3000

app.get('/water', (req, res) => {
  console.log(`${req.ip} is asking for water`);
  res.send("here is a water for you");

})
app.get('/food', (req, res) => {
  console.log(`${req.ip} is asking for food`);
  res.send("here is a food for you");
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})