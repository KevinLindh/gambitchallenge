export function convert(data, index, arr){
   if(data.format === "REAL4" && arr[index+1] !== undefined && data.name === arr[index+1].name){
      return parseInt("0x" + arr[index+1].rawData.toString(16) + data.rawData.toString(16), 32)
   } 
   return index;
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