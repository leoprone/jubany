/* ********** Menu ********** */

/*función anónima autoejecutable*/
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
    $btnMenu.addEventListener("click", (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;/*no pasa nada ahí*/
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);
  

  const $librotapa=document.getElementById("libro-tapa"),
  $laesperatapa=document.getElementById("la-espera-tapa"),
  $elfuturotapa=document.getElementById("el-futuro-tapa");

  document.addEventListener("click", (e)=>{
    if(e.target.matches(".btn-abrir-tapa")){
      $librotapa.classList.toggle("running");
    }

    if(e.target.matches(".btn-abrir-la-espera")){
      $laesperatapa.classList.toggle("running");
    }

    if(e.target.matches(".btn-abrir-el-futuro")){
      $elfuturotapa.classList.toggle("running");
    }
  });
