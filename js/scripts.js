const colorButtons = document.querySelectorAll("#color-picker li");
const colorName = document.querySelector(".color-name");
const colorSelector= document.querySelectorAll("#color-selector p");
const imageIphone = document.querySelector("#image-iphone");

let time;

//function

//eventos

colorButtons.forEach((btn)=>{ //essa função cria um listener para cada cor que retorna o elemnto clicado e
    btn.addEventListener("click", (e)=>{ //o listener so funciona qnd for clicado
        console.log(e.target);
      
      colorButtons.forEach((btn)=>
        btn.querySelector(".color").classList.remove("selected") //remove o selected de todos
      );

      const btnSelected = e.target.parentNode;
      const id = btnSelected.getAttribute("id");
      let cor;
  
      console.log(id);
      document.querySelector(`#${id} .color`).classList.add("selected");
      
      switch(id){
        case "purple":
          cor = "Roxo-profundo";
          break;
        case "silver":
          cor = "Prateado";
          break;
        case "gold":
          cor = "Dourado";
          break;
        case "black":
          cor = "Preto-espacial"
          break;

      }

      clearTimeout(time);
      
      colorName.classList.add("fade");
      imageIphone.classList.add("fade");

      time = setTimeout(function(){
        colorName.innerText = cor;
        imageIphone.setAttribute("src", `img/${id}_iphone.jpg`)
        colorName.classList.remove("fade");
        imageIphone.classList.remove("fade");
      }, 600);
         
    });



});