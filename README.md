# Drum Kit

## Description

It allows you to make music with drum sounds produced by pressing keyboard keys or clicking buttons.

## Usage

### Technologies

- HTML5
- CSS3
- JAVASCRIPT

### How to works addEventListener in JS ?

```js
// addEventListener

document.addEventListener("keypress", (e) => {
  console.log(e);
});

// How does it work in the background ?

function anotherAddEventListener(typeOfEvent, callback) {
  // typeOfEvent = "keypress", callback = (e) => {console.log(e);}
  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKeypress: 2,
  };

  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened); // callback = {eventType: "keypress", key: "p", durationOfKeypress: 2}
  }
}

anotherAddEventListener("keypress", (e) => {
  // e = {eventType: "keypress", key: "p", durationOfKeypress: 2}
  console.log(e);
});
```

# Drum - Kit View

<img src="images/screen-view.gif">
