const app = () =>{
const song = document.querySelector(".song");
const play = document.querySelector(".play");
const video = document.querySelector(".back")


//sounds
const sound = document.querySelectorAll(".sounds button");

//time display
const timeDisplay = document.querySelector(".time-display");

//Time Select
const timeSelect = document.querySelectorAll(".time button");


//Duration 
let fakeDuration = 600;

//Pick Sounds
sound.forEach(Option =>{
    Option.addEventListener("click", function(){
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    playerbutton(song);     
    });
}); 

//Play sound
play.addEventListener("click",()=>{
playerbutton(song);
});

//select sound
timeSelect.forEach(Option =>{
         Option.addEventListener("click", function(){
         fakeDuration = this.getAttribute("data-time");
         
    });
})

//PLay & Pause
const playerbutton = song =>{
    if(song.paused){
        song.play();
        video.play();
        play.src = "./Images/pause.PNG";
    }
    else{
        song.pause();
        video.pause();
        play.src = "./Images/play.PNG";
    }
}

//Song Time Duration
song.ontimeupdate = () =>{
    let currentTime = song.currentTime;
    let elapsed = fakeDuration-currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
 
    
    //Time Display & Song Duration
    timeDisplay.textContent = minutes + ":" + seconds;

    //resetting time
if(currentTime >= fakeDuration){
      song.pause();
      video.pause();
      song.currentTime = 0;
      play.src="./Images/play.PNG";
  }
};


};

app();