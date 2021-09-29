const cityname=document.getElementById('cityname');
const submitbutton=document.getElementById('submitbutton');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const tempstatus=document.getElementById('tempstatus');

const temp_real=document.getElementById('temp_real');
/*const datahide=documement.querySelector('.middlelayer');*/
const getInfo=async(event)=>{
       
       event.preventDefault();
       let cityVal=cityname.value;
    if(cityVal==""){
        city_name.innerText=`Oops!!No input`;
        
    }
    else{
        try{ 
           let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cf27504d4e41339d48617d79ddf97cd7`;
           const response=await fetch(url);
           const data=await response.json();
           
           const arrData=[data];
           city_name.innerText =`${arrData[0].name}  , ${arrData[0].sys.country}`;
          /* temp.innerText=arrData[0].main.temp;*/
          temp_real.innerText=arrData[0].main.temp;
       
           
           const tempMood=arrData[0].weather[0].main;
           if(tempMood=="Clear"){
            tempstatus.innerHTML="<i class='fas fa-sun' style='font-size:48px;color:#eccc68;'></i>";
        }
        else if(tempMood=="Clouds"){
         tempstatus.innerHTML="<i class='fas fa-cloud' style='font-size:48px;color:#f1f2f6;'></i>";
         }
        else if(tempMood=="Rain"){
         tempstatus.innerHTML="<i class='fas fa-cloud-rain' style='font-size:48px;color:#a4b0be;'></i>";
         }
     else{
         tempstatus.innerHTML="<i class='fas fa-sun' style='font-size:48px;color:#eccc68;'></i>";
         }
        
        }
        catch{
            city_name.innerText = 'invalid city name ';
           
        }
    }
}
submitbutton.addEventListener('click',getInfo);