
function turnOverCard(number){
    document.querySelector("#picture"+number).classList.add("active");
    const array = [...document.querySelectorAll(".active")];
    console.log(array.length);

    if (array.length <= 2){
        var plik = "<img class=\"img\" src=\"img/coffee"+number+".jpg\" width=200px height=130px>";
        document.querySelector("#picture"+number).innerHTML=plik;
    }   
   

    if (array.length === 2){ 
        let firstMemo = array[0].classList.value;
        let secondMemo = array[1].classList.value;
        //console.log(firstMemo);    
        //console.log(secondMemo);
            if (firstMemo === secondMemo){
                console.log("jest para");
                document.querySelector(".active").classList.remove("active");
                document.querySelector(".active").classList.remove("active");
            } else {
                console.log("szukaj dalej")
                setTimeout ("hideSlide()", 1000);
               
            }

    }
 
}

  function hideSlide(){
  var plik1="<img class=\"img\" src=\"img/image.jpg\" width=200px height=130px/>";
  document.querySelector(".active").innerHTML=plik1;
  document.querySelector(".active").classList.remove("active");
  document.querySelector(".active").innerHTML=plik1;
  document.querySelector(".active").classList.remove("active");
  
  }



for (let i=1; i<=6; i++){
    var number = i;
    document.querySelector("#picture"+number).addEventListener('click',function(){
        turnOverCard(i)});    
}

/*
function isItPair {


}
*/

// Jak kliknę dwa razy ten sam obrazek to tworzy z niego drugi element tablicy
// Usunąć active przy kolejnej iteracji
// 

