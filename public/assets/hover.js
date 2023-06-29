
const url=location.href
document.querySelectorAll('.nav-item').forEach(item =>{
    if(url.toLowerCase().includes(item.innerText.replaceAll(' ', '').toLowerCase())){
        item.classList.add('active')
    }
})