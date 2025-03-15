function animate_onload () {
  element_array = document.getElementsByClassName('onload');
  for (current_element of element_array){
      current_element.classList.add('active');
      //current_element.classList.add('scroll');
  };
};

function visible(element){
  let top = element.getBoundingClientRect().top;
  let bottom = element.getBoundingClientRect().bottom;
  let offset = -120;
  let viewport_height = window.innerHeight;
  if (top - offset < viewport_height && bottom - offset > 0) {
    return true;
  } else {return false;}
};

function animate_onscroll() {
  let element_array = document.getElementsByClassName('scroll');
  for (current_element of element_array){
    if (visible(current_element)) {
      current_element.classList.add('active');
    } /*else {
      current_element.classList.remove('active');
    }*/
  };
};

function animate_onevent(){
  let element_array = document.getElementsByClassName('onevent');
  for (current_element of element_array){
      current_element.classList.add('active');
  };
}

window.addEventListener("scroll", animate_onscroll);
