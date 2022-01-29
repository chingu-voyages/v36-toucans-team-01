// const myCarousel = document.querySelector('#myCarousel')
// const carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 10000,
//   wrap: false
// })


// price tag script starts here



var button = document.getElementById("mybutton");
//button.addEventListener('click', btnClick, false)
function btnClick(event) {
  textValue = document.getElementById("text").value
  // console.log(textValue)
  if (textValue == 10040 || textValue == 10037 || textValue == 10026 || textValue == 10461 || textValue == 10031) {
    //event.preventDefault()
    document.getElementById("hidden").classList.remove("hidden")
    return false
  } else
  {
    document.getElementById("display-1").classList.remove("display-1")
  
    return false
  }
}