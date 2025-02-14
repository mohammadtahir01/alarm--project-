let stop;
let set=()=>{
    let inptime = document.querySelector("#alarm").value;//4.45;
    let show = document.querySelector("#h1");
    let mus = document.querySelector("#music");
     stop = setInterval(() => {
        let time = new Date();
        let current = `${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`;
        if(current==inptime){
          show.innerHTML = "Alaram is ringging....";
          mus.play();
          
        }
        else{
            show.innerHTML=`alram is set :${current}`;
        }

        
        setTimeout(()=>{
            clearInterval(stop);
            mus.pause();
        },15000)
    }, 1000);


}