const adressbtn = document.querySelector('#adress-form')/*nút để mở bảng địa nhỉ */
const adressclose = document.querySelector('#adress-close')/*đóng bảng địa chỉ */
/*xuất hiện bảng */
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
/*mất bảng*/
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})
/*----------------------slider làm cho kcihs vào chạy đc slide(hiệu ứng ảnh)--------------------------*/
const rightbtn = document.querySelector('.fa-chevron-right')/*slier---*/ 
const lefttbtn = document.querySelector('.fa-chevron-left')
let index = 0
const imgnumber = document.querySelectorAll('.slider-content-left-top img')
console.log(imgnumber.length)
rightbtn.addEventListener ("click", function(){
    index = index + 1
    if(index>imgnumber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})
lefttbtn.addEventListener ("click", function(){
    index = index - 1
    if(index <= 0){
        index=imgnumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})
/*--------------------slider 1 làm cho cái chữu chạy(hiệu ứng chữ)---------------------------------*/
const imgnumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgnumberLi.forEach(function(image,index){
    image.addEventListener("click", function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
        image.classList.add("active")
    }) 
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
/*-----------------slider tự động chạy */
function imgauto (){
    index = index + 1
    if(index>imgnumber.length-1){
        index=0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
    imgnumberLi[index].classList.add("active")
    /*console.log(index)*/
}
setInterval(imgauto,4000)
/*----------------------------------slider product--------------------------------------*/
const rightbtntwo = document.querySelector('.fa-chevron-right-two')/*slier---*/ 
const lefttbtntwo = document.querySelector('.fa-chevron-left-two')
const imgnumbertwo = document.querySelectorAll('.slider-product-one-content-items')
/*console.log(rightbtntwo)
console.log(lefttbtntwo)*/
rightbtntwo.addEventListener ("click", function(){
    index = index + 1
    if(index>imgnumbertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100+"%"
})
lefttbtntwo.addEventListener ("click", function(){
    index = index - 1
    if(index <= 0){
        index=imgnumbertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100+"%"
})