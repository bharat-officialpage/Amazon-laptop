
 document.querySelectorAll('.smallimage').forEach(image =>{
image.addEventListener('click',()=>{
    let src = image.getAttribute('src');
    document.querySelector('.bigimage').src = src;
});
 })

