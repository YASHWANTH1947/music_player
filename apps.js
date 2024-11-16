const masterPlay=document.querySelector('#masterPlay');
const forward=document.querySelector('#masterForward');
const backward=document.querySelector('#masterBackward');
const audio1=new Audio('songs/1.mp3');
const gif=document.getElementById('gifInfo');
const seeker=document.querySelector("#myprogressbar");
let songList=document.querySelectorAll(".songItem");
let songIndex=0;
let songPlay=document.querySelectorAll(".timeStamp");


let songs = [
    {songName: "umangalsor", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Galactic", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Age of discovery", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Planetary destruction", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "star_buster", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Robin_hood_adventures", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "war on edge", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "eternal peace", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "dimensionl_scurage", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "a simpleton", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

function makeAllStop(){
    let songIcon=document.querySelectorAll('.songItem i');
    songIcon.forEach((element)=>{
       
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
function songCard(e){
    songIndex=parseInt(e.target.id);
    console.log(songIndex);
    
document.querySelector('.masterSongName').innerText=songs[songIndex-1].songName;

    console.log(`audio1.paused: ${audio1.paused}`);
    console.log(`audio1.currentTime: ${audio1.currentTime}`);
    if(audio1.paused || audio1.currentTime<=0){
        // audio1.currentTime=0;
        audio1.src=`songs/${songIndex}.mp3`;
        console.log(`play`);
        audio1.play();
        makeAllStop();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        masterPlay.classList.remove("fa-circle-play");
        
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }else{
        console.log('stop');
        audio1.pause();
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
    
}



songList.forEach((element,i)=>{
    element.querySelector(".songName").innerText=songs[i].songName;
   
    element.querySelector(".songItem> img").src=songs[i].coverPath;
element.querySelector('i').addEventListener('click',songCard)


 
})

masterPlay.addEventListener('click',()=>{
    console.log(`audio1.paused: ${audio1.paused}`); 
    console.log(`audio1.currentTime: ${audio1.currentTime}`);
    if(audio1.paused || audio1.currentTime<=0){
    audio1.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

    gif.style.opacity=1;
}
else{
    audio1.pause();
    makeAllStop();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");

    gif.style.opacity=0;
    
}
})
audio1.addEventListener('timeupdate',()=>{
    progress=(audio1.currentTime/audio1.duration)*100;
    seeker.value=parseInt(progress);

})
seeker.addEventListener('change',()=>{
    audio1.currentTime=(seeker.value*audio1.duration)/100
})


forward.addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex=1;
    }
    else{
        songIndex+=1
    }
   console.log('forward run');
   audio1.src=`songs/${songIndex}.mp3`;
   audio1.currentTime=0;
   console.log(songIndex);

   audio1.play()
   masterPlay.classList.remove("fa-circle-play");
        
   masterPlay.classList.add("fa-circle-pause");
   document.querySelector('.masterSongName').innerText=songs[songIndex-1].songName;

})
backward.addEventListener('click',()=>{
    console.log("backward");
    if(songIndex<=1){
       songIndex=10;

    }else {
        songIndex-=1;
    }
    
    audio1.src=`songs/${songIndex}.mp3`;
    audio1.currentTime=0;
    console.log(songIndex);
 
    audio1.play()
    masterPlay.classList.remove("fa-circle-play");
         
    masterPlay.classList.add("fa-circle-pause");
    document.querySelector('.masterSongName').innerText=songs[songIndex-1].songName;

   

})