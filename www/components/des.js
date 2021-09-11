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
    document.querySelector("#btalerta4").addEventListener("click", function (){
    navigator.vibrate(10);
    });

    document.querySelector("#btalerta5").addEventListener("click", function (){
      cordova.plugins.barcodeScanner.scan(
      function (result) {
         document.querySelector("#result").textContent = result.text;
          /*alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);*/
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
    });
}