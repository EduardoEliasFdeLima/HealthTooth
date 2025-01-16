var inicioslide = 80;
var value = 380;
var value2 = 0;


var esquerda = document.getElementById('left');
var direita = document.getElementById('right');
var slidediv = document.getElementById('sld');

esquerda.style.display = 'none';

var count = 0;
  

function pullleft(){
   count--;  

   if(count == 0){
      esquerda.style.display = 'none';
    
      value2 = 80;
      slidediv.style.left = `80px`;
   
   }else{
      direita.style.display = 'block';
      value2 = 0;
      slidediv.style.left = `-${(value * count) - value2}px`;
   }
  
}

function pullright(){
   count++;

  slidediv.style.left = `-${(value * count) + value2}px`;

   if(count != 0){
      esquerda.style.display = 'block';
      value2 = 80;
   }else{
      value2 = 0;
   }

   if(count == 2){
      direita.style.display = 'none';
   }

}

