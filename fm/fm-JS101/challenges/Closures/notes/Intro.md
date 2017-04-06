# Closure Intro


```js
var closureAlert = function() {
	var x = "Help! I'm a variable stuck in a closure!";

	var alerter = function() {
		alert(x);
	}

	setTimeout(alerter, 1000); // creates a delay for 1s

	console.log('will still run right after');
}


closureAlert();
// will still run right after
// Help! I'm a variable stuck in a closure! in alert box!

```
