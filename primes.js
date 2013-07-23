var primes = [1];

// Loop until generated the first 100 primes
// length of prims is 100
//for (var length=primes.length; length < 100; i++) {
checki: 
for (var i = 3; i <= 60; i++) {
	checkn: 
	for (var n = i - 1; n >= 2; n--){
		console.log("\**Testing i=" + i + " divding by n="+n);
		result = i / n;
		ceil = Math.ceil(result);
		floor = Math.floor(result);
		if (ceil == floor) {
			console.log("not a prime: "+ i + " is divisible by " + n);
			continue checki;
		}
		else if (n > 2) {
			console.log("could be a prime, " + i + " does not divide cleanly by " + n + " and results in " + result);
			continue checkn;
		}
		else if (n = 2) {
			console.log("found a prime: " + i);
			primes.push(i);
		}
		else {
			console.log("soemthing went wrong");
			break;
		}	
	}
}

console.log(primes);
