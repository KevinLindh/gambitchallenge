export function convert(data, index, arr){
   /* REAL4 format */
   if(data.format === "REAL4" && arr[index+1] !== undefined && data.name === arr[index+1].name){
      if(data.name === "Current input at AI3" && data.id%2 === 0){
         return "";
      }
      let buffer = new ArrayBuffer(4);
      let view = new DataView(buffer)
      view.setUint16(0, data.rawData, true);
      view.setUint16(2, arr[index+1].rawData, true);
      return view.getFloat32(0, true).toPrecision(6);
   } 
   
   /* LONG format */
   else if(data.format === "LONG" && arr[index+1] !== undefined && data.name === arr[index+1].name){
      let buffer = new ArrayBuffer(4);
      let view = new DataView(buffer)
      view.setUint16(0, data.rawData, true);
      view.setUint16(2, arr[index+1].rawData, true);
      return view.getInt32(0, true);
   } 
   
   /* INTEGER format */
   else if(data.format === "INTEGER"){
      return parseInt(data.rawData.toString(16).slice(-2), 16);
   } 

   /* BCD format Date (using three datapoints)*/
   else if(data.format === "BCD" && arr[index+1] !== undefined && data.name === arr[index+1].name && arr[index+2] !== undefined && arr[index+2].name === arr[index+1].name){
      // let second = parseInt(data.rawData.toString(16).slice(-2), 16);
      // let minute = parseInt(data.rawData.toString(16).slice(2), 16);
      // let hour = parseInt(arr[index+1].rawData.toString(16).slice(-2), 16);
      // let day = parseInt(arr[index+1].rawData.toString(16).slice(2), 16);
      // let month = parseInt(arr[index+2].rawData.toString(16).slice(-2), 16);
      // let year = parseInt(arr[index+2].rawData.toString(16).slice(2), 16);
      // console.log(parseInt(arr[index+2].rawData.toString(16).slice(-2), 16), arr[index+2].rawData.toString(16).slice(-2), 16)
       return data.rawData;
   } 

   /* BCD format */
   else if(data.format === "BCD"){
      
   } 

   /* BIT format Error handler */
   else if(data.format === "BIT"){
      let bitVal = data.rawData.toString(2).split("").reverse().join("");
      let error = "";
      for(let i = 0; i < bitVal.length; i++){
         if(bitVal[i] === "1"){
            switch(i){
               case 0:
                  error += "no received signal\n";
               break;
               case 1:
                  error += "low received signal\n";
               break;
               case 2:
                  error += "poor received signal\n";
               break;
               case 3:
                  error += "pipe empty\n";
               break;
               case 4:
                  error += "hardware failure\n";
               break;
               case 5:
                  error += "receiving circuits gain in adjusting\n";
               break;
               case 6:
                  error += "frequency at the frequency output over flow\n";
               break;
               case 7:
                  error += "current at 4-20mA over flow\n";
               break;
               case 8:
                  error += "RAM check-sum error\n";
               break;
               case 9:
                  error += "main clock or timer clock error\n";
               break;
               case 10:
                  error += "parameters check-sum error\n";
               break;
               case 11:
                  error += "ROM check-sum error\n";
               break;
               case 12:
                  error += "temperature circuits error\n";
               break;
               case 13:
                  error += "reserved\n";
               break;
               case 14:
                  error += "internal timer over flow\n";
               break;
               default:
                  error += "analog input over range\n";
            }
         }
      }
      return error;
   }
   

   //BCD for 3 key
   //BCD for 1 key
}

/*
convert Real4
if(variable name of current index && next index variable name is same){
   then combine them into a hex
   use this hex to return value

   Real4

decimal into Hex number

19407 => 4BCF
OR
19407 => 100101111001111

15737 => 11110101111001
OR
15737=> 3d79

hex => 0x3d794bcf === 0.0608633123338 (decimal)

00111101011110010100101111001111
}
*/