
let form = document.getElementById("formEnter")
form.addEventListener('submit' , (e) => {
    e.preventDefault()
   console.log(document.getElementById("address").value)
   weatherFunction()
})

const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')

const latitudeF = document.getElementById('latitude')
const longitudeF = document.getElementById('longitude')
//const capitalF = document.getElementById('capital')


let weatherFunction = async ()=>{
    try {
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json ()
        console.log(data)
        if (data.error){
          errorF.innerText = data.error
        }
        else {
           setTimeout(()=>{locationF.innerText = `Country : ${data.location}`},500) 
           setTimeout(()=>{forecastF.innerText = `Tempurature: ${data.forecast}` },1000)
           setTimeout(()=>{latitudeF.innerText=`Latitude: ${data.latitude}`},1500)
           setTimeout(()=>{longitudeF.innerText=`Longtitude: ${data.longitude}`},2000)
        }
    }
    catch(e){
        console.log(e)
    }
}