function PrimeOrNot(num) {
  if (num <= 1 || num % 2 == 0) {
    return false;
  }

  if (num == 2) {
    return true;
  }
  for (let i = 3; i < Math.sqrt(num); i + 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

let p = PrimeOrNot(7);
console.log(p);
let q = PrimeOrNot(5);
console.log(q);
let r = PrimeOrNot(14);
console.log(r);
