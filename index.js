
function clicked() {
    const buttonelem = document.querySelector('.click');
if(buttonelem.innerText === 'click'){
buttonelem.innerHTML = 'clicked';
buttonelem.classList.add ('is-subscribed ');
}else{
buttonelem.innerHTML = 'click';
}
}
