let downHis = document.querySelector("#DownHis")
let topHis = document.querySelector("#TopHis")
let decimalValue;




function beaconHexValue() {

   const beaconValue = document.getElementById('BeaconValue').value;


   function cutCommand(input) {
       const indexOfH = input.indexOf('H');  
       if (indexOfH === -1) return ''; 

       const startIndex = Math.max(0, indexOfH - 4); 
       return input.substring(startIndex, indexOfH); 
   }


   const hexResult = cutCommand(beaconValue);
   
   return hexResult;  // Zwracamy wynik jako ciąg heksadecymalny

}

document.getElementById('button').addEventListener('click', function () {
   const resultValue = beaconHexValue();  // Pobieramy wartość w hex
   
   if (resultValue) {
       decimalValue = parseInt(resultValue, 16);  // Konwersja z hex do dec
       console.log(decimalValue);  // Wyświetlenie wartości w systemie dziesiętnym
       // Możesz teraz używać wartości decimalValue w dalszych operacjach
       

       let downHisValue = decimalValue + parseInt(downHis.value, 10); // Zmiana na liczbę dziesiętną
       let topHisValue = decimalValue + parseInt(topHis.value, 10);   // Zmiana na liczbę dziesiętną

       // Zamiana na heksadecymalny
       let hexDownHisValue = downHisValue.toString(16).toUpperCase();
       let hexTopHisValue = topHisValue.toString(16).toUpperCase();

       // Formatuj wartości heksadecymalne
       if (hexDownHisValue.length === 1) {
           hexDownHisValue = '0' + hexDownHisValue + '00';
       } else if (hexDownHisValue.length === 2) {
           hexDownHisValue = hexDownHisValue + '00';
       } else if (hexDownHisValue.length === 3) {
           hexDownHisValue = hexDownHisValue + '0';
       }

       if (hexTopHisValue.length === 1) {
           hexTopHisValue = '0' + hexTopHisValue + '00';
       } else if (hexTopHisValue.length === 2) {
           hexTopHisValue = hexTopHisValue + '00';
       } else if (hexTopHisValue.length === 3) {
           hexTopHisValue = hexTopHisValue + '0';
       }

       console.log(hexDownHisValue)
       console.log(hexTopHisValue)

       document.getElementById('result').innerText = `GPS:ZAP:BRA1='11',BL1E='${hexDownHisValue}',BL1O='${hexTopHisValue}',TSA1=2,DSA1=1,DPA1=1`;

   } else {
       console.log('Błędna wartość heksadecymalna');
   }
   

});

