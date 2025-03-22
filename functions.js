
export function capitalize(string) {
  let result = string.replace(string[0], string[0].toUpperCase())
  return result;
}

export function reverseString(string) {

  let j = string.length - 1;
  let i = 0;
  let result = Array.from({ length: string.length })
  while (i <= j) {
    let temp = string[i];
    result[i] = string[j];
    result[j] = temp;
    i++;
    j--;
  }

  return result.toString().replace(/,/g, "");
}

export const Calculator = {

  add: function (num1, num2) {
    return num1 + num2;
  },

  subtract: function (num1, num2) {
    return num1 - num2;
  },

  divide: function (num1, num2) {
    return num1 / num2;
  },

  multiply: function (num1, num2) {
    return num1 * num2;
  }
}



// FUNCTION 4: CAESAR CIPHER

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  getTail() {
    return this.tail;
  }
  getHead() {
    return this.head;
  }

  find(value) {
    let start = this.head;
    let count = 0;
    while (start != null) {
      if (start.value == value) return count;
      count++;
      start = start.next;
    }
    return null;
  }

  getAt(index) {
    let result = this.head;
    for (let i = 0; i < index; i++) {
      if (result != null) {
        result = result.next;
      }
    }

    return result.value;
  }
}

export function caeserCipher(str, num) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  let alpha = new LinkedList();
  for(let i = 0; i < alphabet.length ; i++){
    alpha.append(alphabet.charAt(i));
  }
  
  let head = alpha.getHead();
  let end = alpha.getTail();
  end.next = head;
  for (let i = 0; i < str.length; i++) {

    if(/^[A-Za-z]+$/.test(str[i])){
      const char = str[i];
      let index = alpha.find(char.toLowerCase());
      let shifted = alpha.getAt(index + num);
  
      if(char == char.toUpperCase()){
        result = result + shifted.toUpperCase();
      }
      else{
        result = result + shifted.toLowerCase();
      }
      
    }

    else{
      result = result + str[i];
    }

  }


  return result;
}



