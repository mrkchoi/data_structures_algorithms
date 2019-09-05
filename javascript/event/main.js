
const box0 = document.querySelector('.box0');
const box1a = document.querySelector('.box1a');

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

//  addEventListener(eventType, callback, [useCapture])
// standard event bubbling

// box0.addEventListener('click', () => {
//   console.log('box0 clicked!');
// }, true)
// box1a.addEventListener('click', () => {
//   console.log('box1a clicked!');
// }, true)

box1.addEventListener('click', () => {
  console.log('box1 BUBBLE!');
}, false)

box1.addEventListener('click', () => {
  console.log('box1 CAPTURE!');
}, true)

box2.addEventListener('click', () => {
  console.log('box2 BUBBLE!');
}, false)

box2.addEventListener('click', () => {
  console.log('box2 CAPTURE!');
}, true)

box3.addEventListener('click', () => {
  console.log('box3 CAPTURE!');
}, true)  

box3.addEventListener('click', () => {
  console.log('box3 BUBBLE!');
}, false)




// // with all useCapture flag set to true
// box1.addEventListener('click', () => {
//   console.log('box1 clicked!');
// }, false);

// box2.addEventListener('click', () => {
//   console.log('box2 clicked!');
// }, true);

// box3.addEventListener('click', () => {
//   console.log('box3 clicked!');
// }, false);


// standard behavior: event bubbling
// CAPTURE PHASE: the event is passed down the DOM from the top of the document, going straight down through all ancestor nodes directly to the e.target
// EVENT PHASE: the e.target is reached, and any event listeners that are attached to the e.target with the correct eventType are triggered
// BUBBLING PHASE: the event object bubbles up the DOM, going trough any ancestor elements until it reaches the top of the document. 

// DEFAULT (UseCapture: FALSE): by default, the useCapture flag is set to false. this means that any event listeners attached to any ancestor elements will not be triggered during the capture phase. The event object will trickle down to the element that the eventHandler is bound to, and will bubble up the DOM. As the event passed through the ancestor elements, any eventListeners that are bound to ancestor elements that match the correct eventType will be triggered.
// USE CAPTURE: TRUE: a third argument can be passed to an addEventListener (true/false). if the useCapture argument is set to true, we make use of the event capturing phase. Specifically, any events that are triggered will trickle down the DOM from the root node (document) down through all ancestor elements until it reaches the element where the addEventListener is bound. As the event trickles down the DOM, any ancestor elements that have eventListeners with a matching eventType will be triggered. The event object will then reach the e.target, where any callback functions will be executed. The event object will then bubble up the DOM, triggering any ancestor elements that have eventHandlers with the specificed eventType AND the useCapture flag set to false (default). An eventHandler will only fire at most once (either during the capture phase or the bubbling phase. It will not fire on both phases.

