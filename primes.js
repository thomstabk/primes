#!/usr/bin/env node 
var fs = require('fs');
var outfile = "primes.txt";



// Loop until generated the first 100 primes
var primes = [];
checki: 
for (var i = 2; primes.length <= 100; i++) {
	checkn: 
	for (var n = i - 1; n >= 2; n--){
		// console.log("\**Testing i=" + i + " divding by n="+n);
		result = i / n;
		ceil = Math.ceil(result);
		floor = Math.floor(result);
		if (ceil == floor) {
			// console.log("not a prime: "+ i + " is divisible by " + n);
			continue checki;
		}
		else if (n > 2) {
			// console.log("could be a prime, " + i + " does not divide cleanly by " + n + " and results in " + result);
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

fs.writeFileSync(outfile, primes); 
console.log("Script: " + __filename + "\nWrote: " + primes + "\nTo: " + outfile);
