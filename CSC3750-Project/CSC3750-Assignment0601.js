//CSC3750
//Assignment 06
//Yuliya Vaskiv
//due 04/11/2023


function multipleOf11() {
  var n = prompt("num: ");
    if (n % 11 === 0) { //checks if remeinder is zero after dividing byb 11
      console.log("\t" + " is a multiple of 11");
    } else {
      console.log("\t" + " is not a multiple of 11");
    }
  }
  


function countConsonants() {
  var str = prompt("str: ");
    //array of non constant letter
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0; //for keeping track of non-vowels
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase(); //puts everything lowercase
      // Check if the character is not a vowel
      if (char.match(/[a-z]/i) && !vowels.includes(char)) {
        count++;
      }
    }
    
    //prints string and how many constants are in a string
    console.log("\t" + " -> has " + count + " constants");
  }
  

  //calling functions
  console.log("Task 1: ");
  multipleOf11();  
  
  console.log("--------------------------------------");
  console.log("Task 2: ");

  countConsonants();