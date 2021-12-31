// Using map method with Observable
// No data is stored in memory
// data which arrives on time
const Observable = Rx.Observable;

const button = document.getElementById('button');

// creates an observable on button clicks
const clicks = Observable.fromEvent(button, 'click');

/*
- For something to happen we need to forEach over our observable
- If we want to unsubscribe from our observable we need to invoke .dispose on our
subscription

 */
// returns new Observable not an array
const points = clicks.map(function(e) {
  return { x: e.clientX, y: e.clientY };
});

const subscription = points.forEach(
  function onNext(point) {
    alert('clicked!' + JSON.stringify(point));
    subscription.dispose();
  },
  function onError(error) {
    console.log('Error!');
  },
  function onCompleted() {
    console.log('done');
  }
);
