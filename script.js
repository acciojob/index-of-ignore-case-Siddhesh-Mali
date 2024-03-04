function indexOfIgnoreCase(s1, s2) {
    // write your code here
    let str = String(s1).toLowerCase();
    let substr = String(s2).toLowerCase();
    let strN = str.length;
    let substrN = substr.length;

    // console.log(str,strN,substr,substrN)

    for(let i=0; i<strN; i++){
        // console.log(str.substring(i,i+substrN))
        if(str.substring(i,i+substrN) == substr){
            return i;
        }
    }
    return -1;
  }

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
