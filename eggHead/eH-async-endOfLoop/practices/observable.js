// Intro to Observable

// No data is stored in memory
// data which arrives on time
var Observable = Rx.Observable;

var button = document.getElementById('button');
/*
var handler = function(e) {
	alert('clicked');
	button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/
var clicks = Observable.fromEvent(button, 'click');

// forEach works different for observable
/*
  unscribe from an observable using subscription object
*/
var subscription = clicks.forEach(
  function onNext(e) {
    alert('clicked!');
    subscription.dispose();
  },
  function onError(error) {
    console.log('Error!');
  },
  function onCompleted() {
    console.log('done');
  }
);
