
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
/*----------------------------------------*/
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem, X){
    imgItem.addEventListener("click", function(){
        bigImg.src = imgItem.src
    })
})






const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(baoquan){
    baoquan.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(chitiet){
    chitiet.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    })
}
const button = document.querySelector(".product-content-right-bottom-top")
if(button){
    button.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}