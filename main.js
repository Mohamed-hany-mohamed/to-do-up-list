

// عند الضغط علي الزر يقوم بحزف العنصر
const contenar = document.getElementById("contenar");




document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn1").disabled = true;
  document.querySelector("#input").onkeyup = function () {
    if (document.querySelector("#input").value.length > 3) {
      document.querySelector("#btn1").disabled = false;
    } else {
      document.querySelector("#btn1").disabled = true;
    }
    
  
  };
  btn1.addEventListener("click", (eo) => {
    // تلقائي refresh لمنع  عمل
    eo.preventDefault();
    const text = `
        <div class="content">
            <p> ${input.value}</p>
            <button class="delete"><i class="fa-solid fa-trash delete icon"></i></button> 
        </div>
        `;
    contenar.innerHTML += text;
    document.querySelector("#btn1").disabled = true;
    document.querySelector("#input").value = "";
  });

  
  contenar.addEventListener("click", (eo) => {
    if (eo.target.className == "fa-solid fa-trash delete icon") {
      eo.target.parentElement.parentElement.remove();
    } else {
    }
  });
  return false;
});
