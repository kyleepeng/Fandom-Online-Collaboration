$(document).ready(function(){

  console.log('js ok!');

  var navbar = document.getElementById('navbar');
  var sticky = navbar.offsetTop;

  console.log(sticky);
  console.log(window.pageYOffset);

  $(document).scroll(function(e){
    
    if(window.pageYOffset >= sticky){
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }

  });

  $("a").on("click", function(){
    $("nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });


  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.category');
  // console.log(sections)

  function changeLinkState() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
  }

  changeLinkState();
  window.addEventListener('scroll', changeLinkState);



})
