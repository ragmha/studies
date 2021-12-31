// Intro to Observable

// No data is stored in memory
// data which arrives on time
const Observable = Rx.Observable;

const button = document.getElementById('button');
/*
const handler = function(e) {
	alert('clicked');
	button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

const clicks = Observable.fromEvent(button, 'click');

// forEach works different for observable
/*
  unscribe from an observable using subscription object
*/
const subscription = clicks.forEach(
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
