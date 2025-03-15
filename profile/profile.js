var speed = 25; /* The speed/duration of the effect in milliseconds */

function pause(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printer(text, element){
  let i = 0;
  while (i < text.length){
    if (text.charAt(i) != "<"){
    document.getElementById(element).innerHTML += text.charAt(i);
    await pause(speed);
    i++;
  } else{
    i++;
    /*let tag = "";
    let endtag = "";
    let begintext = 0;
    let endtext = 0;
    while (true){
      tag += text.charAt(i);
      i++;
      if (text.charAt(i) == ">"){
        tag += text.charAt(i);
        i++;
        begintext = i;
        console.log(tag);
        break;
      }
    }
    while (true){
      if (text.charAt(i) != "<"){
        i++;
      }
      else{
        endtag += text.charAt(i);
        i++;
        if (text.charAt(i) == ">"){
          endtag += text.charAt(i);
          i++;
          endtext = i;
          console.log(endtag);
          break;
        }
      }
  }
    document.getElementById(element).innerHTML += tag+endtag;*/
  }
}
  newline();
}


function newline(){
  document.getElementById('introtext').innerHTML += " <br> ";
}

async function printer1() {
  document.getElementById("introtext").style.height = "60vh";
  await printer("#instantiate Person", "introtext");
  await pause(600);
  await printer("Dinh_Trung_Che = Person({", "introtext");
  await printer('"Age":         21,', "introtext");
  await printer('"Nationality": "Vietnamese",', "introtext");
  await printer('"Education": "TU Dortmund",', "introtext");
  await printer('"Hobby": ["Electronics","Aquarium", "Cycling"],', "introtext");
  await printer('"Motto": "Curiosity, Creativity, Enthusiasm",', "introtext");
  await printer('})', "introtext");
}

function select_skill_title(event){
  let clicked = event.target;
  elements = document.getElementsByClassName('experience-title');
  for (let i=0; i<elements.length; i++){
    var icon = elements[i].querySelector('i');
    if (icon != null){icon.remove();}
  }
  let shows = document.getElementsByClassName('project-showcase');
  for (let i=0; i<shows.length; i++){
    text = shows[i].querySelector('.fade-out-bottom');
    image = shows[i].querySelector('.fade-out-right');
    text.classList.add('deactive');
    image.classList.add('deactive');
  }
  setTimeout(function(shows){
    for (let i=0; i<shows.length; i++){
      text = shows[i].querySelector('.fade-out-bottom');
      image = shows[i].querySelector('.fade-out-right');
      text.classList.remove('deactive');
      image.classList.remove('deactive');
      if (shows[i].id != clicked.id){
        shows[i].classList.add('d-none');
      }
    };
    var clickedElementId = clicked.id;
    console.log(clickedElementId);
    element_show = document.getElementById(clickedElementId + "_show");
    element_show.classList.remove("d-none");
    /*
    if (clickedElementId == "rover") {
      rover = document.getElementById("rover_show");
      rover.classList.remove('d-none');
    }
    if (clickedElementId == "website") {
      rover = document.getElementById("website_show");
      rover.classList.remove('d-none');
    }
    if (clickedElementId == "biosphere") {
      rover = document.getElementById("biosphere_show");
      rover.classList.remove('d-none');
    };
    if (clickedElementId == "tesla") {
      rover = document.getElementById("tesla_show");
      rover.classList.remove('d-none');
    };*/
  }, 700, shows);
  clicked.innerHTML += '<i class="fa-solid fa-caret-right"></i>';
}

function expandWorkDescription(event){
  let clicked = event.target;
  let parent = clicked.parentNode;
  let workdescription = parent.querySelector(".workdescription");
  if (workdescription.classList.contains("expanded")){
    workdescription.classList.remove("expanded");
    let icon = parent.querySelector(".fa-caret-right");
    icon.classList.remove("rotate90");
  } else{
    workdescription.classList.add("expanded");
    let icon = parent.querySelector(".fa-caret-right");
    icon.classList.add("rotate90");
  }
}

function addHovertoSkill(){
  elements=document.getElementsByClassName("skill-icon");
  for (let i=0; i<elements.length; i++){
    elements[i].addEventListener('click', (event)=> {
      show_skill_level(event);
    });
  }
}

function show_skill_level(event){
  clickaway();
  parent = event.target.parentNode;
  var description = parent.querySelector('.skill-level');
  if (description != null){
    description.classList.add("expanded");
  }
  event.stopPropagation();
}
function clickaway(){
  descriptions = document.getElementsByClassName("skill-level");
  for (let i=0; i<descriptions.length; i++){
    descriptions[i].classList.remove("expanded");
  }
}
