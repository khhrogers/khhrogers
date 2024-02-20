const  express = require("express");

const app = express();



app.get('/cats', (req,res) => {
    res.send('Meow')
})

app.get('/dogs', (req,res) =>  {
res.send('rough')

})


app.listen(3000, () => {
    console.log("listen")
} )