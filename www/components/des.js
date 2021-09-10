window.onload = function(){
  document.querySelector("#btalerta1").addEventListener('click', function(){
    function retorno(){

    }
    navigator.notification.alert("Teste alerta", retorno, "Cuidado", "Ok mano");
  });

  document.querySelector("#btalerta2").addEventListener('click', function(){
    function verifica(buttonIndex){
      if(buttonIndex == 1){
        navigator.notification.alert("Você clicou em sim");
      }else{
        navigator.notification.alert("Você clicou em não");
      }
    }
    navigator.notification.confirm("Sim ou não?", verifica, "Escolhe aí",
    ['Sim','Não']);
    });

     document.querySelector("#btalerta3").addEventListener("click", function (){
    navigator.notification.beep(1);
    });
}