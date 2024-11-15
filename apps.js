const masterPlay=document.querySelector('#masterPlay')
const audio1=new Audio('songs/1.mp3');
const gif=document.getElementById('gifInfo');
const seeker=document.querySelector("#myprogressbar");





masterPlay.addEventListener('click',()=>{
    if(audio1.paused || audio1.currentTime<=0){
    audio1.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
 
    gif.style.opacity=1;
}
else{
    audio1.pause();
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