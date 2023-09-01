// readmore & readless js 
let fullcon = document.querySelectorAll(".fullcon");
for(i=0;i<fullcon.length;i++){
  fullcon[i].addEventListener("click",(e)=>{
   const readbtn = e.target;
   if(readbtn.innerText=="Read more..."){
    let readmoretext = readbtn.previousElementSibling.querySelector("p span");
    console.log(readmoretext);
    readmoretext.style.display="inline";
    readbtn.innerText="Read less...";
   }
   else if(readbtn.innerText=="Read less..."){
    let readmoretext = readbtn.previousElementSibling.querySelector("p span");
    console.log(readmoretext);
    readmoretext.style.display="none";
    readbtn.innerText="Read more...";
   }
  })
}

// footer btn animation (request free consultation)

let styleElement = document.head.appendChild(document.createElement("style"));
let i1=document.getElementById("i1");
let i2=document.getElementById("i2");
let requestbox=document.getElementById("request");
requestbox.addEventListener("mouseover",()=>{
  styleElement.innerHTML=`.reuquestbox::after{
    content: "";
        background-color: #BE9B49;
        position: absolute;
        top: 64px;
        left: 0px;
        z-index: -1;
        width: 100%;
        height: 100%;
        animation: boxanim ease .5s forwards;
  }`;
  i1.style.color="white";
  i2.style.color="white";
  requestbox.style.borderColor="#BE9B49";
  
})
requestbox.addEventListener("mouseout",()=>{
  styleElement.innerHTML=`.reuquestbox::after{
    content: "";
    background-color: #BE9B49;
    position: absolute;
    top: 75px;
    left: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
        animation: boxanim2 ease .5s forwards;
  }`;
  i1.style.color="#BE9B49";
  i2.style.color="#BE9B49";
  requestbox.style.borderColor="white";
  
})

// footerbtn animation beautiful theme 

let styleElement2 = document.head.appendChild(document.createElement("style"));
let footbtn=document.querySelector(".footbtn");
footbtn.addEventListener("mouseover",()=>{
  styleElement2.innerHTML=`.footbtn::after{
    content: "";
    background-color: #BE9B49;
    position: absolute;
    top: 41px;
    left: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    animation: footbtnanim 0.5s ease forwards;
  }`;
  footbtn.style.color="black";  
})

footbtn.addEventListener("mouseout",()=>{
  styleElement2.innerHTML=`.footbtn::after{
    content: "";
    background-color: #BE9B49;
    position: absolute;
    top: 41px;
    left: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    animation: footbtnanim2 0.5s ease forwards;
  }`;
  footbtn.style.color="#BE9B49";  
})

// social_media page assigning
let instagram = document.getElementById("instagram");
instagram.addEventListener("click",()=>{
  window.location.assign("https://www.instagram.com/vishnuspire/?igshid=YmMyMTA2M2Y%3D")
});

let twitter = document.getElementById("twitter");
twitter.addEventListener("click",()=>{
  window.location.assign("/");
});

let linkedin = document.getElementById("linkedin");
linkedin.addEventListener("click",()=>{
  window.location.assign("https://www.linkedin.com/company/vishnuspirehome/");
});
let facebook = document.getElementById("facebook");
facebook.addEventListener("click",()=>{
  window.location.assign("/");
});

