// Simple drag and drop with Observabe

const Observable = Rx.Observable;

const parent = document.getElementById('parent');
const widget = document.getElementById('widget');

const mouseDowns = Observable.fromEvent(widget, 'mousedown');
const parentMouseMoves = Observable.fromEvent(parent, 'mousemove');
const parentMouseUps = Observable.fromEvent(parent, 'mouseup');

const drags = mouseDowns
  .map(function(e) {
    return parentMouseMoves.takeUntil(parentMouseUps);
  })
  .concatAll();

const subscription = drags.forEach(
  function onNext(e) {
    widget.style.left = e.clientX + 'px';
    widget.style.top = e.clientY + 'px';
  },
  function onError(error) {
    console.log('error');
  },
  function onCompleted() {}
);
