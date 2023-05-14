// always scrolls to the top on refresh
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// smooth scroll (optimization based on code from codegridweb):
const body = document.body,
    scrollWrap = document.getElementsByClassName("slow-scroll-wrapper")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    scrollSpeed = 0.05;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * scrollSpeed;
    offset = Math.round(offset / 0.5) * 0.5;

    if (offset >= 1)
        var scroll = "translateY(-" + offset + "px) translateZ(0)";

    scrollWrap.style.transform = scroll;
    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();



const docBody = document.querySelector('body');
const mainBody = document.querySelector('#mainBody');
const myNameH2 = document.querySelector('#myNameH2');
const myLogoImg = document.querySelector('#logoImg');
const mouseCircle = document.querySelector("#mouseCircle");
const navLinks = document.querySelectorAll(".navlink");
/* const homeLi = document.querySelector("#hooffset
const aboutMeLi = document.querySelector("#aboutMeLi");
const webDevLi = document.querySelector("#webDevLi");
const comicsLi = document.querySelector("#comicsLi");
const contactsLi = document.querySelector("#contactsLi"); */
const homeLiA = document.querySelector("#homeLi > .navlink-a");
const homeLiBG = document.querySelector("#homeLi > .navlink-bg");
const aboutMeLiA = document.querySelector("#aboutMeLi > .navlink-a");
const aboutMeLiBG = document.querySelector("#aboutMeLi > .navlink-bg");
const webDevLiA = document.querySelector("#webDevLi > .navlink-a");
const webDevLiBG = document.querySelector("#webDevLi > .navlink-bg");
const comicsLiA = document.querySelector("#comicsLi > .navlink-a");
const comicsLiBG = document.querySelector("#comicsLi > .navlink-bg");
const contactsLiA = document.querySelector("#contactsLi > .navlink-a");
const contactsLiBG = document.querySelector("#contactsLi > .navlink-bg");
//const skillImgs = document.querySelectorAll(".skill-Img");

const titleUnderlines = document.querySelectorAll(".title-underline");
const bookOutlines = document.querySelectorAll(".book-outline");
const squareOutlines = document.querySelectorAll(".square-outline");

const bookArrows = document.querySelectorAll(".book-arrow");

const infoImgs = document.querySelectorAll(".info-img");

const webDevRoundline = document.querySelector("#webDevRoundline");
const aboutMeImgCorners = document.querySelector("#aboutMeImgCorners");
const navLinksArr = Array.from(navLinks);
navLinksArr.shift();

const firstStrip = document.querySelector("#firstStrip");
const secondStrip = document.querySelector("#secondStrip");
const thirdStrip = document.querySelector("#thirdStrip");
const firstBookOutline = document.querySelector("#firstBookOutline");
const secondBookOutline = document.querySelector("#secondBookOutline");
const thirdBookOutline = document.querySelector("#thirdBookOutline");
const firstArrow = document.querySelector("#firstArrow");
const secondArrow = document.querySelector("#secondArrow");
const thirdArrow = document.querySelector("#thirdArrow");


const menuButton = document.querySelector("#menuButton");
const closeButton = document.querySelector("#closeButton");
const navbar = document.querySelector("#navbar");
const navbarLinks = document.querySelector("#navlinks");

/*
let transTime = 1;
for (const navlink of navLinks) {
    navlink.style.transition = "all ease-in-out " + transTime + "s";
    transTime += 0.3;
}
*/

// changes on scroll:

window.addEventListener('scroll', () => {

    if (window.pageYOffset < 300) {
        document.documentElement.style.setProperty('--primary-color', '#BCDCDA');
        document.documentElement.style.setProperty('--secondary-color', '#292A3D');
        document.documentElement.style.setProperty('--accent-color', '#BCDCDA');
        docBody.style.cssText = "background-color: var(--primary-color) !important";
        //mainBody.style.backgroundColor = "#BCDCDA";
        //mainBody.style.borderLeft = "4px dotted transparent;";
        //myNameH2.style.color = "#292A3D";
        myNameH2.style.fontSize = "120px";
        myNameH2.style.transform = "translateY(-48px)";
        myNameH2.style.opacity = "1";
        myLogoImg.style.opacity = "0";
        mouseCircle.style.opacity = "1";
        mouseCircle.style.backgroundColor = "var(--primary-color)";
        homeLiA.classList.add("navlink-a-current");
        homeLiBG.classList.add("navlink-bg-current");
        aboutMeLiA.classList.remove("navlink-a-current");
        aboutMeLiBG.classList.remove("navlink-bg-current");
        webDevLiA.classList.remove("navlink-a-current");
        webDevLiBG.classList.remove("navlink-bg-current");
        comicsLiA.classList.remove("navlink-a-current");
        comicsLiBG.classList.remove("navlink-bg-current");
        contactsLiA.classList.remove("navlink-a-current");
        contactsLiBG.classList.remove("navlink-bg-current");

        // navbar.style.backdropFilter = "none";
        // navbar.style.height = "10vh";
        // navbar.style.background = "none";
        // navbarLinks.style.display = "none";
        // closeButton.style.display = "none";
        // menuButton.style.display = "block";
        aboutMeImgCorners.style.filter = "invert(90%) sepia(19%) saturate(217%) hue-rotate(127deg) brightness(91%) contrast(97%)";
        menuButton.style.filter = "invert(90%) sepia(19%) saturate(217%) hue-rotate(127deg) brightness(91%) contrast(97%)";
        closeButton.style.filter = "invert(90%) sepia(19%) saturate(217%) hue-rotate(127deg) brightness(91%) contrast(97%)";
        menuButton.style.opacity = "0";
        closeButton.style.opacity = "0";

        let transTime = 2.8;
        for (const navlink of navLinksArr) {
            navlink.style.transform = "translateX(1000px)";
            navlink.style.opacity = "0"; 
            navlink.style.transition = "transform " + transTime + "s ease-in-out, " + "opacity " + transTime + "s ease-in-out";
            transTime -= 0.3;
        }

        for (const titleUnderline of titleUnderlines) {
            titleUnderline.style.filter = "invert(90%) sepia(19%) saturate(217%) hue-rotate(127deg) brightness(91%) contrast(97%)";
        }
    
    } else if (window.pageYOffset >= 300 && window.pageYOffset < 1500) {                // ########## ABOUT ME ##########
        document.documentElement.style.setProperty('--primary-color', '#BCDCDA');
        document.documentElement.style.setProperty('--secondary-color', '#292A3D');
        document.documentElement.style.setProperty('--accent-color', '#FF6DB2');
        docBody.style.cssText = "background-color: var(--secondary-color) !important";
        //mainBody.style.backgroundColor = "#292A3D";
        //mainBody.style.borderLeft = "4px dotted #BCDCDA";
        //myNameH2.style.color = "#BCDCDA";
        myNameH2.style.fontSize = "48px";
        myNameH2.style.transform = "translateY(-18px)";
        myNameH2.style.opacity = "0";
        myLogoImg.style.opacity = "1";
        myLogoImg.style.filter = "invert(90%) sepia(19%) saturate(217%) hue-rotate(127deg) brightness(91%) contrast(97%)";
        mouseCircle.style.opacity = "0";
        mouseCircle.style.backgroundColor = "var(--secondary-color)";
        homeLiA.classList.remove("navlink-a-current");
        homeLiBG.classList.remove("navlink-bg-current");
        aboutMeLiA.classList.add("navlink-a-current");
        aboutMeLiBG.classList.add("navlink-bg-current");
        webDevLiA.classList.remove("navlink-a-current");
        webDevLiBG.classList.remove("navlink-bg-current");
        comicsLiA.classList.remove("navlink-a-current");
        comicsLiBG.classList.remove("navlink-bg-current");
        contactsLiA.classList.remove("navlink-a-current");
        contactsLiBG.classList.remove("navlink-bg-current");
        webDevRoundline.style.filter = "invert(59%) sepia(96%) saturate(1060%) hue-rotate(294deg) brightness(98%) contrast(107%)";
        aboutMeImgCorners.style.filter = "invert(59%) sepia(96%) saturate(1060%) hue-rotate(294deg) brightness(98%) contrast(107%)";
        menuButton.style.filter = "invert(90%) sepia(19%) saturate(217%) hue-rotate(127deg) brightness(91%) contrast(97%)";
        closeButton.style.filter = "invert(90%) sepia(19%) saturate(217%) hue-rotate(127deg) brightness(91%) contrast(97%)";
        menuButton.style.opacity = "1";
        closeButton.style.opacity = "1";

        myLogoImg.addEventListener("mouseover", function() {
            myLogoImg.style.filter = "invert(57%) sepia(56%) saturate(1434%) hue-rotate(298deg) brightness(105%) contrast(101%)";
        })
        myLogoImg.addEventListener("mouseleave", function() {
            myLogoImg.style.filter = "invert(90%) sepia(19%) saturate(217%) hue-rotate(127deg) brightness(91%) contrast(97%)";
        })

        menuButton.addEventListener("mouseover", function() {
            menuButton.style.filter = "invert(57%) sepia(56%) saturate(1434%) hue-rotate(298deg) brightness(105%) contrast(101%)";
        })
        menuButton.addEventListener("mouseleave", function() {
            menuButton.style.filter = "invert(90%) sepia(19%) saturate(217%) hue-rotate(127deg) brightness(91%) contrast(97%)";
        })

        closeButton.addEventListener("mouseover", function() {
            closeButton.style.filter = "invert(57%) sepia(56%) saturate(1434%) hue-rotate(298deg) brightness(105%) contrast(101%)";
        })
        closeButton.addEventListener("mouseleave", function() {
            closeButton.style.filter = "invert(90%) sepia(19%) saturate(217%) hue-rotate(127deg) brightness(91%) contrast(97%)";
        })

        let transTime = 1;
        for (const navlink of navLinksArr) {
            navlink.style.transform = "translateX(0px)";
            navlink.style.opacity = "1"; 
            navlink.style.transition = "transform " + transTime + "s ease-in-out, " + "opacity " + transTime + "s ease-in-out";
            transTime += 0.3;
        }
        /*
        for (const skillImg of skillImgs) {
            skillImg.style.filter = "invert(11%) sepia(4%) saturate(6346%) hue-rotate(199deg) brightness(96%) contrast(84%)";
        }
        */

        for (const titleUnderline of titleUnderlines) {
            titleUnderline.style.filter = "invert(59%) sepia(96%) saturate(1060%) hue-rotate(294deg) brightness(98%) contrast(107%)";
        }

        for (const squareOutline of squareOutlines) {
            squareOutline.style.filter = "invert(98%) sepia(69%) saturate(257%) hue-rotate(95deg) brightness(92%) contrast(86%)";
        }

    } else if (window.pageYOffset >= 1500 && window.pageYOffset < 3000) {                // ########## WEB DEV ##########
        document.documentElement.style.setProperty('--primary-color', '#C5A181');
        document.documentElement.style.setProperty('--secondary-color', '#302821');
        document.documentElement.style.setProperty('--accent-color', '#00C9AD');
        myLogoImg.style.filter = "invert(82%) sepia(13%) saturate(882%) hue-rotate(343deg) brightness(81%) contrast(88%)";
        homeLiA.classList.remove("navlink-a-current");
        homeLiBG.classList.remove("navlink-bg-current");
        aboutMeLiA.classList.remove("navlink-a-current");
        aboutMeLiBG.classList.remove("navlink-bg-current");
        webDevLiA.classList.add("navlink-a-current");
        webDevLiBG.classList.add("navlink-bg-current");
        comicsLiA.classList.remove("navlink-a-current");
        comicsLiBG.classList.remove("navlink-bg-current");
        contactsLiA.classList.remove("navlink-a-current");
        contactsLiBG.classList.remove("navlink-bg-current");
        webDevRoundline.style.filter = "invert(63%) sepia(90%) saturate(2836%) hue-rotate(130deg) brightness(96%) contrast(104%)";
        aboutMeImgCorners.style.filter = "invert(63%) sepia(90%) saturate(2836%) hue-rotate(130deg) brightness(96%) contrast(104%)";
        menuButton.style.filter = "invert(82%) sepia(13%) saturate(882%) hue-rotate(343deg) brightness(81%) contrast(88%)";
        closeButton.style.filter = "invert(82%) sepia(13%) saturate(882%) hue-rotate(343deg) brightness(81%) contrast(88%)";

        myLogoImg.addEventListener("mouseover", function() {
            myLogoImg.style.filter = "invert(78%) sepia(56%) saturate(4049%) hue-rotate(122deg) brightness(86%) contrast(106%)";
        })
        myLogoImg.addEventListener("mouseleave", function() {
            myLogoImg.style.filter = "invert(82%) sepia(13%) saturate(882%) hue-rotate(343deg) brightness(81%) contrast(88%)";
        })

        menuButton.addEventListener("mouseover", function() {
            menuButton.style.filter = "invert(78%) sepia(56%) saturate(4049%) hue-rotate(122deg) brightness(86%) contrast(106%)";
        })
        menuButton.addEventListener("mouseleave", function() {
            menuButton.style.filter = "invert(82%) sepia(13%) saturate(882%) hue-rotate(343deg) brightness(81%) contrast(88%)";
        })

        closeButton.addEventListener("mouseover", function() {
            closeButton.style.filter = "invert(78%) sepia(56%) saturate(4049%) hue-rotate(122deg) brightness(86%) contrast(106%)";
        })
        closeButton.addEventListener("mouseleave", function() {
            closeButton.style.filter = "invert(82%) sepia(13%) saturate(882%) hue-rotate(343deg) brightness(81%) contrast(88%)";
        })
        /*
        for (const skillImg of skillImgs) {
            skillImg.style.filter = "invert(12%) sepia(13%) saturate(1125%) hue-rotate(347deg) brightness(91%) contrast(86%)";
        }
        */

        for (const titleUnderline of titleUnderlines) {
            titleUnderline.style.filter = "invert(63%) sepia(90%) saturate(2836%) hue-rotate(130deg) brightness(96%) contrast(104%)";
        }

        for (const squareOutline of squareOutlines) {
            squareOutline.style.filter = "invert(69%) sepia(17%) saturate(618%) hue-rotate(347deg) brightness(92%) contrast(93%)";
        }

        for (const bookArrow of bookArrows) {
            bookArrow.style.filter = "invert(78%) sepia(56%) saturate(4049%) hue-rotate(122deg) brightness(86%) contrast(106%)";
        }

        for (const bookOutline of bookOutlines) {
            bookOutline.style.filter = "invert(82%) sepia(13%) saturate(882%) hue-rotate(343deg) brightness(81%) contrast(88%)";
            bookOutline.addEventListener("mouseover", function() {
                bookOutline.style.filter = "invert(78%) sepia(56%) saturate(4049%) hue-rotate(122deg) brightness(86%) contrast(106%)";
            })
            bookOutline.addEventListener("mouseleave", function() {
                bookOutline.style.filter = "invert(82%) sepia(13%) saturate(882%) hue-rotate(343deg) brightness(81%) contrast(88%)";
            })
        }

        firstBookOutline.addEventListener("mouseover", function() {
            firstStrip.style.opacity = "1";
            firstArrow.style.opacity = "1";
        })
        firstBookOutline.addEventListener("mouseleave", function() {

            firstStrip.style.opacity = "0";
            firstArrow.style.opacity = "0";
        })
        secondBookOutline.addEventListener("mouseover", function() {
            secondStrip.style.opacity = "1";
            secondArrow.style.opacity = "1";
        })
        secondBookOutline.addEventListener("mouseleave", function() {
            secondStrip.style.opacity = "0";
            secondArrow.style.opacity = "0";
        })
        thirdBookOutline.addEventListener("mouseover", function() {
            thirdStrip.style.opacity = "1";
            thirdArrow.style.opacity = "1";
        })
        thirdBookOutline.addEventListener("mouseleave", function() {
            thirdStrip.style.opacity = "0";
            thirdArrow.style.opacity = "0";
        })


    } else if (window.pageYOffset >= 3000 && window.pageYOffset < 4900) {                // ########## COMICS ##########
        document.documentElement.style.setProperty('--primary-color', '#D0B3BE');
        document.documentElement.style.setProperty('--secondary-color', '#331F24');
        document.documentElement.style.setProperty('--accent-color', '#00C9E3');
        myLogoImg.style.filter = "invert(90%) sepia(42%) saturate(428%) hue-rotate(284deg) brightness(89%) contrast(81%)";
        homeLiA.classList.remove("navlink-a-current");
        homeLiBG.classList.remove("navlink-bg-current");
        aboutMeLiA.classList.remove("navlink-a-current");
        aboutMeLiBG.classList.remove("navlink-bg-current");
        webDevLiA.classList.remove("navlink-a-current");
        webDevLiBG.classList.remove("navlink-bg-current");
        comicsLiA.classList.add("navlink-a-current");
        comicsLiBG.classList.add("navlink-bg-current");
        contactsLiA.classList.remove("navlink-a-current");
        contactsLiBG.classList.remove("navlink-bg-current");
        menuButton.style.filter = "invert(90%) sepia(42%) saturate(428%) hue-rotate(284deg) brightness(89%) contrast(81%)";
        closeButton.style.filter = "invert(90%) sepia(42%) saturate(428%) hue-rotate(284deg) brightness(89%) contrast(81%)";

        myLogoImg.addEventListener("mouseover", function() {
            myLogoImg.style.filter = "invert(63%) sepia(78%) saturate(3638%) hue-rotate(148deg) brightness(104%) contrast(101%)";
        })
        myLogoImg.addEventListener("mouseleave", function() {
            myLogoImg.style.filter = "invert(90%) sepia(42%) saturate(428%) hue-rotate(284deg) brightness(89%) contrast(81%)";
        })

        menuButton.addEventListener("mouseover", function() {
            menuButton.style.filter = "invert(63%) sepia(78%) saturate(3638%) hue-rotate(148deg) brightness(104%) contrast(101%)";
        })
        menuButton.addEventListener("mouseleave", function() {
            menuButton.style.filter = "invert(90%) sepia(42%) saturate(428%) hue-rotate(284deg) brightness(89%) contrast(81%)";
        })

        closeButton.addEventListener("mouseover", function() {
            closeButton.style.filter = "invert(63%) sepia(78%) saturate(3638%) hue-rotate(148deg) brightness(104%) contrast(101%)";
        })
        closeButton.addEventListener("mouseleave", function() {
            closeButton.style.filter = "invert(90%) sepia(42%) saturate(428%) hue-rotate(284deg) brightness(89%) contrast(81%)";
        })

        for (const titleUnderline of titleUnderlines) {
            titleUnderline.style.filter = "invert(60%) sepia(98%) saturate(1587%) hue-rotate(141deg) brightness(95%) contrast(101%)";
        }

        for (const squareOutline of squareOutlines) {
            squareOutline.style.filter = "invert(83%) sepia(15%) saturate(283%) hue-rotate(286deg) brightness(87%) contrast(93%)";
        }

        for (const bookArrow of bookArrows) {
            bookArrow.style.filter = "invert(63%) sepia(78%) saturate(3638%) hue-rotate(148deg) brightness(104%) contrast(101%)";
        }

        for (const bookOutline of bookOutlines) {
            bookOutline.style.filter = "invert(90%) sepia(42%) saturate(428%) hue-rotate(284deg) brightness(89%) contrast(81%)";
            bookOutline.addEventListener("mouseover", function() {
                bookOutline.style.filter = "invert(63%) sepia(78%) saturate(3638%) hue-rotate(148deg) brightness(104%) contrast(101%)";
            })
            bookOutline.addEventListener("mouseleave", function() {
                bookOutline.style.filter = "invert(90%) sepia(42%) saturate(428%) hue-rotate(284deg) brightness(89%) contrast(81%)";
            })
        }

        for (const infoImg of infoImgs) {
            infoImg.style.filter = "invert(90%) sepia(42%) saturate(428%) hue-rotate(284deg) brightness(89%) contrast(81%)";
            infoImg.addEventListener("mouseover", function() {
                infoImg.style.filter = "invert(63%) sepia(78%) saturate(3638%) hue-rotate(148deg) brightness(104%) contrast(101%)";
            })
            infoImg.addEventListener("mouseleave", function() {
                infoImg.style.filter = "invert(90%) sepia(42%) saturate(428%) hue-rotate(284deg) brightness(89%) contrast(81%)";
            })
        }
    
    } else if (window.pageYOffset >= 4900) {                                            // ########## CONTACTS ##########
        document.documentElement.style.setProperty('--primary-color', '#BFD9C6');
        document.documentElement.style.setProperty('--secondary-color', '#273F3D');
        document.documentElement.style.setProperty('--accent-color', '#F9F871');
        myLogoImg.style.filter = "invert(92%) sepia(10%) saturate(403%) hue-rotate(84deg) brightness(95%) contrast(83%)";
        homeLiA.classList.remove("navlink-a-current");
        homeLiBG.classList.remove("navlink-bg-current");
        aboutMeLiA.classList.remove("navlink-a-current");
        aboutMeLiBG.classList.remove("navlink-bg-current");
        webDevLiA.classList.remove("navlink-a-current");
        webDevLiBG.classList.remove("navlink-bg-current");
        comicsLiA.classList.remove("navlink-a-current");
        comicsLiBG.classList.remove("navlink-bg-current");
        contactsLiA.classList.add("navlink-a-current");
        contactsLiBG.classList.add("navlink-bg-current");
        menuButton.style.filter = "invert(92%) sepia(10%) saturate(403%) hue-rotate(84deg) brightness(95%) contrast(83%)";
        closeButton.style.filter = "invert(92%) sepia(10%) saturate(403%) hue-rotate(84deg) brightness(95%) contrast(83%)";

        myLogoImg.addEventListener("mouseover", function() {
            myLogoImg.style.filter = "invert(79%) sepia(41%) saturate(480%) hue-rotate(15deg) brightness(109%) contrast(102%)";
        })
        myLogoImg.addEventListener("mouseleave", function() {
            myLogoImg.style.filter = "invert(92%) sepia(10%) saturate(403%) hue-rotate(84deg) brightness(95%) contrast(83%)";
        })

        menuButton.addEventListener("mouseover", function() {
            menuButton.style.filter = "invert(79%) sepia(41%) saturate(480%) hue-rotate(15deg) brightness(109%) contrast(102%)";
        })
        menuButton.addEventListener("mouseleave", function() {
            menuButton.style.filter = "invert(92%) sepia(10%) saturate(403%) hue-rotate(84deg) brightness(95%) contrast(83%)";
        })

        closeButton.addEventListener("mouseover", function() {
            closeButton.style.filter = "invert(79%) sepia(41%) saturate(480%) hue-rotate(15deg) brightness(109%) contrast(102%)";
        })
        closeButton.addEventListener("mouseleave", function() {
            closeButton.style.filter = "invert(92%) sepia(10%) saturate(403%) hue-rotate(84deg) brightness(95%) contrast(83%)";
        })

        for (const titleUnderline of titleUnderlines) {
            titleUnderline.style.filter = "invert(79%) sepia(41%) saturate(480%) hue-rotate(15deg) brightness(109%) contrast(102%)";
        }

        for (const bookArrow of bookArrows) {
            bookArrow.style.filter = "invert(79%) sepia(41%) saturate(480%) hue-rotate(15deg) brightness(109%) contrast(102%)";
        }

        for (const bookOutline of bookOutlines) {
            bookOutline.style.filter = "invert(92%) sepia(10%) saturate(403%) hue-rotate(84deg) brightness(95%) contrast(83%)";
            bookOutline.addEventListener("mouseover", function() {
                bookOutline.style.filter = "invert(79%) sepia(41%) saturate(480%) hue-rotate(15deg) brightness(109%) contrast(102%)";
            })
            bookOutline.addEventListener("mouseleave", function() {
                bookOutline.style.filter = "invert(92%) sepia(10%) saturate(403%) hue-rotate(84deg) brightness(95%) contrast(83%)";
            })
        }

        for (const infoImg of infoImgs) {
            infoImg.style.filter = "invert(92%) sepia(10%) saturate(403%) hue-rotate(84deg) brightness(95%) contrast(83%)";
            infoImg.addEventListener("mouseover", function() {
                infoImg.style.filter = "invert(79%) sepia(41%) saturate(480%) hue-rotate(15deg) brightness(109%) contrast(102%)";
            })
            infoImg.addEventListener("mouseleave", function() {
                infoImg.style.filter = "invert(92%) sepia(10%) saturate(403%) hue-rotate(84deg) brightness(95%) contrast(83%)";
            })
        }
    }  

})


// cursor styling using requestAnimationFrame (based on code by Ciprian Popescu - getbutterfly.com)
document.addEventListener('DOMContentLoaded', () => {
    if ( !window.matchMedia("(pointer: none)").matches ) {     // only if there's a pointer input on the device
        
        let mousePosX = 0,
        mousePosY = 0;
        // mouseCircle = document.getElementById('mouseCircle');

        document.onmousemove = (e) => {
            mousePosX = e.clientX;
            mousePosY = e.clientY;
        }

        let delay = 20,
            revisedMousePosX = 0,
            revisedMousePosY = 0;

        function delayMouseFollow() {
            requestAnimationFrame(delayMouseFollow);

            revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
            revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

            mouseCircle.style.top = revisedMousePosY + 'px';
            mouseCircle.style.left = revisedMousePosX + 'px';
        }
        delayMouseFollow();
        
    
    } else {
        mouseCircle.style.left = "74vw";
        mouseCircle.style.top = "580px";
    }
});

// scroll to section on navLink click
const homeLinks = document.querySelectorAll(".home-link");
const aboutMeLink = document.querySelector("#aboutMeLink");
const webDevLink = document.querySelector("#webDevLink");
const comicsLink = document.querySelector("#comicsLink");
const contactsLink = document.querySelector("#contactsLink");

for (const homeLink of homeLinks) {
    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    })
}

aboutMeLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 750);
})

webDevLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 1920);
})

comicsLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 3400);
})

contactsLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, 5800);
})

// const parentDiv = document.querySelector("#slowWrapper");
// let legoMan;

// var aboutSketch = function(sketch) {
//     sketch.preload = function() {
//         legoMan = loadModel('models/lego.obj');
//     }
//     sketch.setup = function() {
//         let canvas1 = sketch.createCanvas(2000, 2000, sketch.WEBGL);
//         canvas1.position(0, 0);
//         canvas1.parent(parentDiv);
//         sketch.angleMode(DEGREES);
//     }
//     sketch.draw = function() {
//         sketch.pointLight(255,255,255,50,50,50);
//         sketch.pointLight(255,255,255,-200,-100,50);
//         sketch.pointLight(95, 171, 165,-100,300,-50);
//         sketch.pointLight(255, 113, 199,400,-200,100);
//         sketch.pointLight(255, 113, 199,-300,-150,-200);
//         sketch.lights();
//         sketch.lights();
//         sketch.translate(20, 30, 40);
//         sketch.background(41, 42, 61);
//         sketch.scale(6);
//         sketch.rotateX(scrollY/42);
//         sketch.rotateY(-30 + scrollY/16);
//         sketch.rotateZ(60 + scrollY/16);
//         sketch.normalMaterial();
//         sketch.fill(188, 220, 218);
//         sketch.model(legoMan);
//     }
// }

// new p5(aboutSketch);




/* ######## P5 JS ########

const parentDiv = document.querySelector("#slowWrapper");
let legoMan, computer, spaceship, phone;

function preload() {
    legoMan = loadModel('models/lego.obj');
    computer = loadModel('models/computer.obj');
    spaceship = loadModel('models/spaceship2.obj');
    phone = loadModel('models/brick_phone.obj');
}

function setup() {
    var myCanvas = createCanvas(windowWidth, 5*windowHeight, WEBGL);
    myCanvas.parent(parentDiv);
    angleMode(DEGREES);
}

function draw() {
    background(0, 0);
    pointLight(255,255,255,50,50,50);
    pointLight(168, 168, 168,-100,300,-50);
    pointLight(185, 185, 185,400,-200,100);
    pointLight(185, 185, 185,-300,-150,-200);
    lights();
    translate(-200, -1200 + 0.5*offset, 400);
    scale(7);
    rotateX(offset/42);
    rotateY(-30 + offset/16);
    rotateZ(90 + offset/16);
    normalMaterial();
    fill(255, 255, 255, 110);
    model(legoMan);
    
    translate(-200, 0.1*offset, 0);
    rotateX(offset/42);
    rotateY(90 - offset/16);
    rotateZ(220 + offset/16);
    scale(0.23);
    fill(255, 255, 255, 70);
    model(computer);

    translate(1600 - 0.2*offset, 200, -1200 + 0.1*offset, -1200 + 0.1*offset);
    rotateX(offset/42);
    rotateY(40);
    rotateZ(200);
    scale(1.8);
    fill(255, 255, 255, 70);
    model(spaceship);

    translate(280, 400 + 0.3*offset, 50);
    rotateX(100 - 0.1*offset);
    rotateY(-400);
    rotateZ(-20);
    scale(140);
    fill(255, 255, 255, 80);
    model(phone);
}

/* ####################### */

"use strict";

function carousel() {
    let carouselSlider = document.querySelector(".carousel-slider");
    let list = document.querySelector(".carousel-list");
    let list2;
    
    const speed = 1;

    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone() {
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);

        list2.style.left = `${width}px`;
        
        /*
        let list2Lis = list2.childNodes;
        for (let i=0; i<list2Lis.length; i++) {
            list2Lis[i].lastChild.classList.add("skill-Img");
        }
        */
        
    }

    function moveFirst() {
        x -= speed;

        if (width >= Math.abs(x)) {
            list.style.left = `${x}px`;
        } else {
            x = width;
        }
    }

    function moveSecond() {
        x2 -= speed;

        if (list2.offsetWidth >= Math.abs(x2)) {
            list2.style.left = `${x2}px`;
        } else {
            x2 = width;
        }
    }
    /*
    function hover() {
        clearInterval(a);
        clearInterval(b);
    }

    function unhover() {
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
    }
    */
    clone();

    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);

    /*carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover);*/
}

carousel();


/* ############ MOBILE NAVIGATION MENU ############ */


// if (window.matchMedia("(max-width: 992px)")) {
//     menuButton.addEventListener("click", function () {
//         navbar.style.background = "var(--secondary-color)";
//         navbarLinks.style.display = "block";
//         closeButton.style.display = "block";
//         menuButton.style.display = "none";
//     })
    
//     closeButton.addEventListener("click", function () {
//         navbar.style.background = "none";
//         navbarLinks.style.display = "none";
//         closeButton.style.display = "none";
//         menuButton.style.display = "block";
//     })
// }


function myFunction(x) {
    if (x.matches) { // If media query matches
        // window.addEventListener('scroll', () => {
        //     if (window.pageYOffset < 300) {
        //         navbar.style.backdropFilter = "none";
        //         navbar.style.height = "10vh";
        //         navbar.style.background = "none";
        //         navbarLinks.style.display = "none";
        //         closeButton.style.display = "none";
        //         menuButton.style.display = "none";
        //     }
        // });

        navbar.style.backdropFilter = "none";
        navbar.style.height = "auto";
        navbar.style.background = "none";
        navbarLinks.style.display = "none";
        closeButton.style.display = "none";
        menuButton.style.display = "block";

        myLogoImg.addEventListener("click", function() {
            navbar.style.backdropFilter = "none";
            navbar.style.height = "auto";
            navbarLinks.style.display = "none";
            closeButton.style.display = "none";
            menuButton.style.display = "block";
        })

        menuButton.addEventListener("click", function () {
            navbar.style.backdropFilter = "blur(40px)";
            navbar.style.height = "100vh";
            navbarLinks.style.display = "block";
            closeButton.style.display = "block";
            menuButton.style.display = "none";
        })

        closeButton.addEventListener("click", function () {
            navbar.style.backdropFilter = "none";
            navbar.style.height = "auto";
            navbarLinks.style.display = "none";
            closeButton.style.display = "none";
            menuButton.style.display = "block";
        })

        for (const navLink of navLinks) {
            navLink.addEventListener("click", function () {
                navbar.style.backdropFilter = "none";
                navbar.style.height = "auto";
                navbarLinks.style.display = "none";
                closeButton.style.display = "none";
                menuButton.style.display = "block";
            })
        }

    } else {
        navbar.style.backdropFilter = "none";
        navbar.style.height = "auto";
        navbar.style.background = "none";
        navbarLinks.style.display = "flex";
        closeButton.style.display = "none";
        menuButton.style.display = "none";

        myLogoImg.addEventListener("click", function() {
            navbar.style.backdropFilter = "none";
            navbarLinks.style.display = "flex";
            closeButton.style.display = "none";
            menuButton.style.display = "none";
        })

        for (const navLink of navLinks) {
            navLink.addEventListener("click", function () {
                navbar.style.backdropFilter = "none";
                navbarLinks.style.display = "flex";
                closeButton.style.display = "none";
                menuButton.style.display = "none";
            })
        }
    }
  }
  
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


// SEND EMAIL USING FORM
function sendMail() {

    const submitButton = document.querySelector("#submitButton");
    submitButton.disabled = true; 
    setTimeout(() => {submitButton.disabled = false}, "5000");

    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value
    };

    const serviceID = "service_vgoblcp";
    const templateID = "template_yhexccq";

    const thankyouNote = document.querySelector("#thankyouNote");

    emailjs.send(serviceID, templateID, params).then(
        (res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);

            thankyouNote.style.opacity = "1";
            thankyouNote.style.zIndex = "1";

            setTimeout(function() {
                thankyouNote.style.opacity = "0";
                thankyouNote.style.zIndex = "-1";
            }, "8000");
            
        }
    )
    .catch((err)=> console.log(err));
}

window.opera.addEventListener("AfterScript", function(e) {
  if (typeof jQuery != "undefined" && jQuery.prototype.lazyload) {
    jQuery.prototype.lazyload = function() {};
  }
}, false);
