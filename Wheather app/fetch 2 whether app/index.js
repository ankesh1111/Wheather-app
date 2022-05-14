
 
 function getData(){



    let city=document.getElementById("city").value;

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5881c4a70f1f474bc5289105d70aa1b5`;
 


 fetch(url)
 .then(function(res){

    res.json().then(function(res){
        append(res)
        console.log("res:",res)
    })
 })
 .catch(function(err){
     console.log("err:")
 })
  
 }

 function append(data){

    let container=document.getElementById("container")
    let map=document.getElementById("gmap_canvas");
    container.innerHTML=null;


    let city=document.createElement("p")
    city.innerText=`City:${data.name}`

    let temp=document.createElement("p")
    temp.innerText=`Temp:${data.main.temp}`

    let temp_min=document.createElement("p")
    temp_min.innerText=`Temp_min:${data.main.temp_min}`

    let temp_max=document.createElement("p")
    temp_max.innerText=`Temp_mix:${data.main.temp_max}`

    let humidity=document.createElement("p")
    humidity.innerText=`Humidity:${data.main.humidity}`

    let sunset=document.createElement("p")
 sunset.innerText=`sunset:${data.sys.sunset}`

    let sunrise=document.createElement("p")
    sunrise.innerText=`sunrise:${data.sys.sunrise}`


    container.append(city,temp,temp_max,temp_min,humidity,sunset,sunrise)
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}
 

 



  



 














// function getData(){

//     let city=document.getElementById("city").value;

//     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=975d1ea78b6b45b89e391b6430c8d25f`;
    

//     fetch(url)
//     .then(function(res){

//         res.json().then(function(res){
//             append(res)
//             console.log("res:",res)

//         })
//     })
//     .catch(function(err){
//         console.log("err:",err)
//     });
// }

// function append(data){

//     let container=document.getElementById("container");
//     let map=document.getElementById("gmap_canvas")
//     container.innerHTML=null;
   
//     let city=document.createElement("p");
//     city.innerText=`City:${data.name}`

//     let min=document.createElement("p");
//     min.innerText=`Min_temp:${data.main.temp_min}`

    
//     let max=document.createElement("p");
//     max.innerText=`Max_temp:${data.main.temp_max}`

//     let current=document.createElement("p");
//     current.innerText=`Curr_Temp:${data.main.temp}`


//     let humidity=document.createElement("p");
//     humidity.innerText= `Humidity:${data.main.humidity}`

//     let sunrise=document.createElement("p");
//     sunrise.innerText=`Sunrise:${data.sys.sunrise}`;
   

//     let sunset=document.createElement("p");
//     sunset.innerText=`Sunset:${data.sys.sunset}`
   

//     container.append(city,min,max,current,humidity,sunrise,sunset,map);
//     map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
// }

 
 
  
     
  
 
 