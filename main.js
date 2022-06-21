let intro__left = document.querySelector('.intro__left');
let intro__right= document.querySelector('.intro__right');
let intro__top= document.querySelector('.intro__top');
let portf= document.querySelector('.portf');
window.addEventListener('DOMContentLoaded', function() 
{
  intro__left.style.opacity = 1; 
  intro__left.style.transform = "translate(0)"; 
  intro__right.style.opacity = 1; 
  intro__right.style.transform = "translate(0)";  
  intro__top.style.opacity = 1; 
  intro__top.style.transform = "translate(0)"; 
}
)

window.addEventListener('scroll', function() 
{
  portf.style.opacity = 1; 
}
)

