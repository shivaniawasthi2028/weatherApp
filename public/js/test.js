
const submitbutton=document.getElementById('submitbutton');




const getInfo=async(event)=>{
       
       event.preventDefault();
   
    if(cityVal==""){
        city_name.innerText='PLEASE ENTER THE NAME BEFORE SEARCH';
        
    }
    else{
      
           let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cf27504d4e41339d48617d79ddf97cd7`;
        
        
        const arrData=[data];
        
        
       
    
   }
    }
}
submitbutton.addEventListener('click',getInfo);