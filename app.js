let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");
let para4 = document.getElementById("para4");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
btn1.onclick = () =>{
    if(para1.style.display === 'none'){
     para1.style.display= "inline";
     btn1.textContent = "Read Less";
    }
    else{
        para1.style.display= "none";
        btn1.textContent = "Read More";
    }
}
btn2.onclick = () =>{
    if(para2.style.display === 'none'){
     para2.style.display= "inline";
     btn2.textContent = "Read Less";
    }
    else{
        para2.style.display= "none";
        btn2.textContent = "Read More";
    }
}
btn3.onclick = () =>{
    if(para3.style.display === 'none'){
     para3.style.display= "inline";
     btn3.textContent = "Read Less";
    }
    else{
        para3.style.display= "none";
        btn3.textContent = "Read More";
    }
}
btn4.onclick = () =>{
    if(para4.style.display === 'none'){
     para4.style.display= "inline";
     btn4.textContent = "Read Less";
    }
    else{
        para4.style.display= "none";
        btn4.textContent = "Read More";
    }
}