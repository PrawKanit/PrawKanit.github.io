document.addEventListener("DOMContentLoaded", function(event) {
    let targetImage1 = document.querySelector("#smart-image1");
    targetImage1.addEventListener("click", function() {
        if (targetImage1.classList.contains("small")) {
            targetImage1.classList.remove("small");
        }else {
            targetImage1.classList.add("small");
        }
    });
    
    let targetImage2 = document.querySelector("#smart-image2");
    targetImage2.addEventListener("click", function() {
        if (targetImage2.classList.contains("small")) {
            targetImage2.classList.remove("small");
        }else {
            targetImage2.classList.add("small");
        }
    });
    
    let targetImage3 = document.querySelector("#smart-image3");
    targetImage3.addEventListener("click", function() {
        if (targetImage3.classList.contains("small")) {
            targetImage3.classList.remove("small");
        }else {
            targetImage3.classList.add("small");
        }
    });
    
    let targetImage4 = document.querySelector("#smart-image4");
    targetImage4.addEventListener("click", function() {
        if (targetImage4.classList.contains("small")) {
            targetImage4.classList.remove("small");
        }else {
            targetImage4.classList.add("small");
        }
    });
    
    let targetImage5 = document.querySelector("#smart-image5");
    targetImage5.addEventListener("click", function() {
        if (targetImage5.classList.contains("small")) {
            targetImage5.classList.remove("small");
        }else {
            targetImage5.classList.add("small");
        }
    });
    
    let targetImage6 = document.querySelector("#smart-image6");
    targetImage6.addEventListener("click", function() {
        if (targetImage6.classList.contains("small")) {
            targetImage6.classList.remove("small");
        }else {
            targetImage6.classList.add("small");
        }
    });
    
    let targetImage7 = document.querySelector("#smart-image7");
    targetImage7.addEventListener("click", function() {
        if (targetImage7.classList.contains("small")) {
            targetImage7.classList.remove("small");
        }else {
            targetImage7.classList.add("small");
        }
    });
    
    let targetImage8 = document.querySelector("#smart-image8");
    targetImage8.addEventListener("click", function() {
        if (targetImage8.classList.contains("small")) {
            targetImage8.classList.remove("small");
        }else {
            targetImage8.classList.add("small");
        }
    });

});
let gif = document.querySelector('.gif')
// 定义小图片的旋转角度
let deg = 0
// 定义小图片位于网页左侧的位置
let gifx = 0
// 定义小图片位于网页顶部的位置
let gify = 0
// 定义小图片x轴的位置
let gifl = 0
// 定义小图片y轴的位置
let gift = 0
// 定义小图片翻转的角度
let y = 0 
// 定义一个计数器
let index = 0

window.addEventListener('mousemove',function(xyz){
    // 获取网页左侧距离的图片位置
    gifx = xyz.x - gif.offsetLeft - gif.clientWidth /2
    // 多去网页顶部距离图片的位置
    gify = xyz.y - gif.offsetTop - gif.clientHeight /2
    // 套入公式，定义图片的旋转角度
    deg = 360*Math.atan(gify/gifx)/(2*Math.PI)
    // 每当鼠标移动的时候重置index
    index= 0
    // 定义当前鼠标的位置
    let x = event.clientX
    // 当鼠标的x轴大于图片的时候，提普安就要对着鼠标，所以需要将图片翻转过来
    // 否则就不用翻转
    if(gif.offsetLeft<x){
        y=-180
    }else{
        y=0
    }
})
setInterval(()=>{
    // 设置小图片的旋转和翻转

    //gif.style.transform = "rotateZ("+deg+"deg) rotateY("+y+"deg)"
    //index++

    //这里删除rotateZ("+deg+"deg) （控制旋转的）
    gif.style.transform = "rotateY("+y+"deg)"
    index++
    // 在这里设置小图片的位置和速度，并判断小图片到达鼠标位置时停止移动
    
    if(index<50){
        //gifl+=gifx/50 这个会遮盖鼠标影响视觉
        gifl+=gifx/100
        //gift+=gify/50
        gift+=gify/100
    }
    gif.style.left = gifl+"px"
    gif.style.top = gift+"px"
},10)