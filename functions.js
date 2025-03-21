export function capitalize(string) {
    let result = string.replace(string[0], string[0].toUpperCase())
    return result;
  }

  export function reverseString(string){

    let j = string.length - 1;
    let i = 0;
    let result = Array.from({length: string.length})
    while(i <= j){
      let temp = string[i];
      result[i] = string[j];
      result[j]= temp;
      i++;
      j--;
    }

    return result.toString().replace(/,/g, "");
  }

 