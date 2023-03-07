
let myAbout = document.getElementById('aboutwithShowMoAll');
let StartState = myAbout.classList.length;
let myAboutLink = document.getElementById('aboutwithShowMo');
if (myAbout.classList.length === 0) {
    myAbout.classList.add('invisible');
};
let myAboutLinkHref = document.getElementById('aboutwithShowMoHref');

myAboutLink.addEventListener('click', function (e) {
    if (myAbout.classList.length === 0) {
        myAbout.classList.add('invisible');
        myAboutLinkHref.textContent = "Show All";
    } else {
        myAbout.classList.remove('invisible');
        myAboutLinkHref.textContent = "Show less";
    }
}, false);

