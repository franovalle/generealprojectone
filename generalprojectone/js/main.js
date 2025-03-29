

document.querySelector('button').addEventListener('click', gotToGo)
function gotToGo (){
let zipCode = document.querySelector('input').value

fetch (`https://api.zippopotam.us/us/${zipCode}`)
.then (res => res.json ())
.then (data => {
    console.log(data);
    console.log(data.places);
    console.log(data.places[0]);
    console.log(data.places[0].state);
    console.log(data.places[0].latitude)
    console.log(data.places[0].longitude)
    document.querySelector('h2').innerText = data.places[0].state
    fetch (`https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat=${data.places[0].latitude}&lng=${data.places[0].longitude}`)
    .then (res => res.json ())
    .then (data => {
        console.log(data);
        console.log(data[0]);
        console.log(data[0].name)
        console.log(data[0].street);
        document.querySelector('h2').innerText = '📍'+ data[0].name
        document.querySelector('h3').innerText = '📍'+ data[0].street
        document.querySelector('h4').innerText = '♿'+ data[0].accessible
        document.querySelector('h5').innerText = '🚼'+ data[0].changing_table
        
        

       
        
        
       
        
    })
    .catch (error => {
        console.log(`error ${error}`)
        
    })
    
   
    
    
   
    
})
.catch (error => {
    console.log(`error ${error}`)
    
})
}
