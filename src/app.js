 const express = require("express")
 const app = express()
 const port = process.env.PORT || 3000

 const path = require("path")
 const x = path.join(__dirname, '../public')
 app.use(express.static(x))

///////////////////////////////////////////////////////////////////

app.set('view engine', 'hbs');
var hbs = require ('hbs')

  app.get('/' , (req , res) => {
    res.render('index' , {
        title: "weather page",
        desc : "This page is for Information of any country you write its name "
    })
  })
//////////////////////////////////////////////////////////////////
const geocode = require('./tools/geocode')
const forecast = require('./tools/forecast')

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide address'
        })
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forecast(data.latitude,data.longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location:req.query.address,

                latitude : data.latitude,
                longitude : data.longitude,
            })
        })
    })
})
////////////////////////////////////////////////////////////////////
app.get('*' , (req , res) => {
    res.send('404 page not found')
})

 app.listen(port , () => {
       console.log(`app is listening on port ${port}`)
 })

