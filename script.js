const calcFactorial = () => {

  let num = BigInt(document.getElementById("fNum").value);
  let fact = 1n;

  if (num <= 0 || num > 100) {
    document.getElementById("result1").innerHTML = "Please enter a Number between 1 to 100."
  } else {

    for (let i = 1n; i <= num; i++) {

      fact *= i;

    }
    document.getElementById("result1").innerHTML = `Factorial of ${num} is  ${fact.toString()}.`;
  }

}


const isPrime = () => {

  let num = parseInt(document.getElementById("pNum").value);

  if(num <= 1){
    document.getElementById("result2").innerHTML = "Please Enter a Number greater than 1."
  }

  if(num === 2){
    document.getElementById("result2").innerHTML = `The ${num} is a Prime Number.`
  }

  if(num % 2 === 0){
    document.getElementById("result2").innerHTML= `The ${num} is not a Prime Number.`
  }

  else{
    for(let i = 3; i <= Math.sqrt(num);i += 2){
      if(num % i === 0){
        document.getElementById("result2").innerHTML = `The ${num} is not a Prime Number.`
      }else{
        document.getElementById("result2").innerHTML = `The ${num} is a Prime Number.`
      }

    }
  }
}

