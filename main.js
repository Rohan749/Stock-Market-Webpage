let readMoreBtn = document.getElementById("readMoreBtn");
let hiddenPara = document.getElementById("hiddenPara");
let paraDots = document.getElementById("paraDots");
let aboutSection = document.getElementById("aboutSection");
let aboutSectionBG = document.getElementById("aboutSectionBG");
let aboutParagraph = document.getElementById("aboutParagraph");
function viewRest()
{
    if(paraDots.style.display === "none")
    {
        paraDots.style.display = "inline";
        hiddenPara.style.display = "none";
        readMoreBtn.innerHTML = "Read More";
    }
    else{
        paraDots.style.display = "none";
        hiddenPara.style.display = "inline";
        readMoreBtn.innerHTML = "Show Less";
    }
}
