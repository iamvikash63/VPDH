
function clicked() {
    const buttonelem = document.querySelector('.click');
if(buttonelem.innerText === 'click'){
buttonelem.innerHTML = 'saved';
buttonelem.classList.add ('is-subscribed ');
}else{
buttonelem.innerHTML = 'click';
}
}