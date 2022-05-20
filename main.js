//     home slider      //
let homeImg = document.getElementById("homeImg");
let homeText = document.getElementById("homeText");
let homeImgArr = ['./csImg.png', './aiImg.png', './isImg.png', './bioImg.png'];
let homeTextArr = ['Computer Science', 'Artificial Intelligence', 'Information System', 'bioinformatics'];

let homeImgCounter = 0;
setInterval(function() {
    if (homeImgCounter == 4) {
        homeImgCounter = 0;
    }
    homeImg.src = homeImgArr[homeImgCounter];
    homeText.innerHTML = homeTextArr[homeImgCounter];
    homeImgCounter++;

}, 3000)






//     dropper navbar     //
let menuBtn = document.getElementById("menuBtn");
let menuList = document.getElementById("menuList");
let menuCounter = 0;
let links = Array.from(document.getElementsByClassName("lnk"));

links.forEach(function(ele) {
    ele.onclick = function() {
        menuList.style.opacity = "0";
        menuList.style.pointerEvents = "none";
        document.querySelector("#menuBtn .up").style.transform = " rotate(0deg)";
        document.querySelector("#menuBtn .bottom").style.transform = " rotate(0deg)";
        document.querySelector("#menuBtn .middle").style.width = "100%";
        menuCounter--;
    }

})
menuBtn.onclick = function() {

    if (menuCounter == 0) {
        menuCounter++;
        document.querySelector("#menuBtn .up").style.transform = " rotate(44deg)";
        document.querySelector("#menuBtn .bottom").style.transform = " rotate(-44deg)";
        document.querySelector("#menuBtn .middle").style.width = "0%";
        menuList.style.opacity = "1";
        menuList.style.pointerEvents = "auto";




    } else if (menuCounter == 1) {
        menuCounter--;
        document.querySelector("#menuBtn .up").style.transform = " rotate(0deg)";
        document.querySelector("#menuBtn .bottom").style.transform = " rotate(0deg)";
        document.querySelector("#menuBtn .middle").style.width = "100%";
        menuList.style.opacity = "0";
        menuList.style.pointerEvents = "none";




    }


}





//     change logo     //
function logoChange(x) {
    if (x.matches) { // If media query matches
        document.querySelector("nav .right .logo").src = "./smallLogo.png";
    } else {
        document.querySelector("nav .right .logo").src = "./logo.png";
    }
}
var x = window.matchMedia("(max-width: 550px)")
logoChange(x) // Call listener function at run time
x.addListener(logoChange) // Attach listener function on state changes



//     News Slider     //
let newsTitle = Array.from(document.getElementsByClassName("sl"));
let as = Array.from(document.getElementsByClassName("as"));
let newsImages = ["./slide1.png", "./slide2.png", "./slide3.png", "./slide4.png"];
let newsCounter = 0;

let arrRight = document.getElementById("arrRight");
let arrLeft = document.getElementById("arrLeft");
let slideShow = document.getElementById("slideShow");
// auto slide
let autoChange = setInterval(function() {

        newsCounter++;
        if (newsCounter == 4) newsCounter = 0;
        slideShow.src = newsImages[newsCounter];
        // set defulte of titles
        newsTitle.forEach(function(ele) {
            ele.style.color = '#011b50';
            ele.style.backgroundColor = '#fff';
        })
        as.forEach(function(ele) {
                ele.style.opacity = '0.3';

            })
            // custome the selected elements
        newsTitle[newsCounter].style.backgroundColor = '#011b50';
        newsTitle[newsCounter].style.color = '#fff';
        as[newsCounter].style.opacity = '1';


    }, 2500)
    // left arrowS
arrLeft.onclick = function slidLeft() {
        newsCounter++;
        if (newsCounter == 4) newsCounter = 0;
        slideShow.src = newsImages[newsCounter];
        // set defulte of titles
        newsTitle.forEach(function(ele) {
            ele.style.color = '#011b50';
            ele.style.backgroundColor = '#fff';
        })
        as.forEach(function(ele) {
                ele.style.opacity = '0.3';

            })
            // custome the selected elements
        newsTitle[newsCounter].style.backgroundColor = '#011b50';
        newsTitle[newsCounter].style.color = '#fff';
        as[newsCounter].style.opacity = '1';
        clearInterval(autoChange);

    }
    // right arrow
arrRight.onclick = function slidRight() {
        newsCounter--;
        if (newsCounter < 0) newsCounter = 3;
        slideShow.src = newsImages[newsCounter];
        // set defulte of titles
        newsTitle.forEach(function(ele) {
            ele.style.color = '#011b50';
            ele.style.backgroundColor = '#fff';
        })
        as.forEach(function(ele) {
                ele.style.opacity = '0.3';

            })
            // custome the selected elements
        newsTitle[newsCounter].style.backgroundColor = '#011b50';
        newsTitle[newsCounter].style.color = '#fff';
        as[newsCounter].style.opacity = '1';
        clearInterval(autoChange);
    }
    // change by title
function changeByTitle(id) {
    slideShow.src = newsImages[id];
    // set defulte of titles
    newsTitle.forEach(function(ele) {
        ele.style.color = '#011b50';
        ele.style.backgroundColor = '#fff';
    })
    as.forEach(function(ele) {
            ele.style.opacity = '0.3';

        })
        // custome the selected elements
    newsTitle[id].style.backgroundColor = '#011b50';
    newsTitle[id].style.color = '#fff';
    as[id].style.opacity = '1';
    //clear autoChange
    clearInterval(autoChange);
}







// phone slider
let phoneSliderMain = document.querySelector(".sliderPhone .main img");
let phoneSliderText = document.querySelector(".sliderPhone .main .text");
let phoneSliderImages = ["./slide1P.png", "./slide2P.png", "./slide3P.png", "./slide4P.png"];
let phoneSliderTitles = ["أستقبال الطلاب الجدد للعام الجامعي 2022- 2023", "رئيس الجامعة يفتتح معرض الكتاب السنوي الرابع", "أنطلاق مارثون انتخابات إتحاد الطلبه للعام الجامعى 2022/2021", "رحلة علمية إلى معرض القاهرة الدولي للتكنولوجيا"];
let phoneSliderCounter = 0;
let asP = Array.from(document.getElementsByClassName("asP"));
// right arrow
function phoneRightArr(id) {
    phoneSliderCounter++;
    if (phoneSliderCounter == 4) phoneSliderCounter = 0;
    phoneSliderMain.src = phoneSliderImages[phoneSliderCounter];
    phoneSliderText.innerHTML = phoneSliderTitles[phoneSliderCounter];
    asP.forEach(function(ele) {
            ele.style.opacity = '0.3';

        })
        // custome the selected elements

    asP[phoneSliderCounter].style.opacity = '1';
    clearInterval(autoChangePhone);
}
// left arrow
function phoneLeftArr(id) {
    phoneSliderCounter--;
    if (phoneSliderCounter < 0) phoneSliderCounter = 3;
    phoneSliderMain.src = phoneSliderImages[phoneSliderCounter];
    phoneSliderText.innerHTML = phoneSliderTitles[phoneSliderCounter];
    asP.forEach(function(ele) {
            ele.style.opacity = '0.3';

        })
        // custome the selected elements

    asP[phoneSliderCounter].style.opacity = '1';
    clearInterval(autoChangePhone);
}
// auto change
let autoChangePhone = setInterval(function() {
    phoneSliderCounter++;
    if (phoneSliderCounter == 4) phoneSliderCounter = 0;
    phoneSliderMain.src = phoneSliderImages[phoneSliderCounter];
    phoneSliderText.innerHTML = phoneSliderTitles[phoneSliderCounter];
    asP.forEach(function(ele) {
            ele.style.opacity = '0.3';

        })
        // custome the selected elements

    asP[phoneSliderCounter].style.opacity = '1';
}, 2500)


// open question popup
let qsInpPop = document.querySelector("form .inputs .qsInpPop");
let qsInp = document.querySelector("form .inputs .qsInp");
let closeQsPop = document.querySelector("form .inputs .closeQsPop");

qsInp.onclick = function() {
    qsInpPop.style.opacity = "1";
    qsInpPop.style.pointerEvents = "auto";
    closeQsPop.style.opacity = "1";
    closeQsPop.style.pointerEvents = "auto";
    qsInpPop.focus();


}

closeQsPop.onclick = function() {
    qsInpPop.style.opacity = "0";
    qsInpPop.style.pointerEvents = "none";
    closeQsPop.style.opacity = "0";
    closeQsPop.style.pointerEvents = "none";
    if (qsInpPop.value === '') {
        qsInp.innerHTML = "إستفسارك .."
    } else {
        qsInp.innerHTML = "انقر هنا لتعديل رسالتك"
    }
}