function showMenu(){
  let show = document.querySelector('.nav__text');
  if(show.style.display === "block"){
      show.style.display = "none";
  } else {
    show.style.display = "block";
  }
}

showMenu();
