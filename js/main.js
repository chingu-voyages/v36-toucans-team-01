// price tag script starts here


// console.clear();


var button = document.getElementById("mybutton");

function btnClick(event) {
  textValue = document.getElementById("text").value;
  // console.log(textValue)
  if (
    textValue == 10040 ||
    textValue == 10037 ||
    textValue == 10026 ||
    textValue == 10461 ||
    textValue == 10031
  ) {
    //event.preventDefault()
    document.getElementById("hidden").classList.remove("hidden");
    return false;
  } else {
    document.getElementById("display-1").classList.remove("display-1");

    return false;
  }
}





// faq starts here


const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

//ends here


// loading js starts here

const bg = document.querySelector(".heropage-img");
const loadText = document.querySelector(".loading-text");

let load = 0;
let int = setInterval(blurring, 30);


function blurring() {
  load++
  if (load > 99) {
    clearInterval(int);
  }
  

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
 
}


const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}





