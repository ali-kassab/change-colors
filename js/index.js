let saturate = document.querySelector('#saturate')
let contrast = document.querySelector('#contrast')
let brightness = document.querySelector('#brightness')
let sepia = document.querySelector('#sepia')
let grayscale = document.querySelector('#grayscale')
let Blur = document.querySelector('#blur')
let invert = document.querySelector('#invert')
let hueRotate = document.querySelector('#huerotate')
let download = document.querySelector('#download')
let reset = document.querySelector('#reset')
let img = document.querySelector('img')
let imageBox = document.querySelector('#boxImage')
let uploadInpute = document.querySelector('#uploadInpute')
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

function resetValue() {
    ctx.filter = 'none';
    canvas.filter ='none'
    img.style.filter = 'none';
    contrast.value = '100';
    saturate.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    Blur.value = '0';
    hueRotate.value = '0';
    invert.value = '0';
}

window.addEventListener('load', function () {

    download.style.display = 'none';
    reset.style.display = 'none';
    imageBox.style.display = 'none';

})



uploadInpute.onchange = function () {
    resetValue()
    download.style.display = 'block';
    reset.style.display = 'block';
    imageBox.style.display = 'block';
    
    // console.log(uploadInpute.files);
    let file = new FileReader()
    file.readAsDataURL(uploadInpute.files[0])
    file.onload = function () {
        img.src = file.result
    }

    img.onload = function () {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
    img.style.display = 'none'

}

let filters = document.querySelectorAll('ul li input');
filters.forEach(filter => {
    filter.addEventListener('input', function () {
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${Blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        invert(${invert.value}%)

 
 `
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
    )
})


// download.onclick=function(){    لتحميل الصورة الاصل 
//     download.href=img.src
// }

download.onclick = function () {       // لتحميل الصورة بعد التعديل بالكانفاس
    download.href = canvas.toDataURL()
}

