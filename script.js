let divArray = document.querySelectorAll(".image-contentbox");
let divImg = document.querySelectorAll('.image');
let divContent = ["","","","","","","","","","","","","","",""];
let url = "https://api.thecatapi.com/v1/images/search";
let chicago1Url = "kn9c-c2s2.json";
let chicago2Url ="e2v8-k3us.json";
let chicago3Url ="wwy2-k7b3.json";
let categoryURL = "https://api.thecatapi.com/v1/images/search?category_ids=";
let apikey = "66356a00-6e21-4837-b13d-dcc4caee975a";
let chicagoBase = "https://data.cityofchicago.org/resource/";
let row =3
let column = 1
let buttonArray = document.querySelectorAll("button");
let body = document.querySelector("body");

body.addEventListener('click', focus);
for (let i =0; i < 5; i++){
    buttonArray[i].addEventListener('click', toggle)
}

for (let i = 0; i < 5; i++){
    divArray[i].style.gridRow = row;
    divArray[i].style.gridColumn = i;
    assignContent(i, chicago3Url);
    
}
row = 2;
for (let i = 5; i < 10; i++){
    divArray[i].style.gridRow = row;
    divArray[i].style.gridColumn = i -5;
    assignContent(i, chicago3Url);
    
}
row =1;
for (let i = 10; i < 15; i++){
    divArray[i].style.gridRow = row;
    divArray[i].style.gridColumn = i -10;
    assignContent(i, chicago3Url);
    
}

for (let i = 0; i<15; i++){
    assignPhoto(i);   
}

function assignPhoto (i) {
    fetch(url, {
        headers: {
            "x-api-key": apikey
        }
    })
    .then(res => res.json())
    .then(res => {
        divImg[i].setAttribute("src",res[0].url);     
    })
    .catch(err => {})
}
function assignContent (i, urlAdd){
    fetch(chicagoBase+ urlAdd)
    .then(res => res.json())
    .then(res => {
        let dogFriend = "THE CANINE MENACE ABOUNDS...";
        if (res[i].dog_friendly == 0){
            dogFriend = "NO! CATZ RULE!";
        }
        divContent[i] = "<h1>Name: " + res[i].park_name + "</h1><p>Street Address: " + res[i].street_address +"<br><br>Acres: " +res[i].acres +"<br><br>Dog Friendly?: " +dogFriend +"</p>";    
    })
    .catch(err => {})
    //set the content of each catBox
}


/**
 * focus()
 * 
 * this function will take whichever div is clicked and expand it in the center of the screen
 * when the user clicks away they will return to normal view
 * 
 * @param {event object} e 
 */

function focus(e) {
    e.preventDefault();
    let popUpDiv = document.querySelector('.modal');
    let popUpContent = document.querySelector('.modal-content');
    let popUpImage = popUpDiv.querySelector('.modal-image');
    let main = document.querySelector('main');
    popUpImage.style.display ="block";
    popUpContent.style.display = "none";
    
    if (e.target.className != "image"){
        if(e.target.className == 'modal-image'){
            document.querySelector('.modal-image').style.display = "none"
            document.querySelector('.modal-content').style.display ="block"
        
            popUpContent.style.background = "rgba (255,255,255,.4)";
        }
        else if (e.target.parentNode.className == 'modal-content'){
            document.querySelector('.modal-image').style.display = "block"
            document.querySelector('.modal-content').style.display ="none"
        }
        else{
            popUpDiv.style.display = "none"
            return;
        }   
    }
    else{
        if(popUpDiv.style.display == "none"){
            popUpDiv.style.display = "block";
            popUpImage.setAttribute("src", e.target.src);
            for(let i = 0; i < divImg.length; i++){
                if(e.target == divImg[i]){
                    popUpContent.innerHTML = divContent[i];
                    popUpContent.style.textAlign = "center";
                }
            } 
        }
        else{
            popUpDiv.style.display = "none"
            return;
        }
    }     
}
/**
 * toggle()
 * 
 * this function will be implemented if I am able to complete the project early
 * it will toggle between various wireframes using buttons in the header
 * modal
 * hamburger
 * slideshow
 * accordion
 * tabs
 */


function toggle(e) {
    let sheetSrc = document.querySelector("#style");
    let newSheet = e.target.innerText;
    let newSheetPath = "./" + newSheet + ".css";
    sheetSrc.setAttribute('href',newSheetPath);
}