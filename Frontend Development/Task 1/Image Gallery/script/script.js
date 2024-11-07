var  fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic; //update the src of the image 
}

function closeFullImg(){
    fullImgBox.style.display = "none";
} 