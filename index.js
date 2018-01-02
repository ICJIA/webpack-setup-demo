import _ from "lodash";

// const x = () => console.log("Hello, World");
// x();

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const injectElement = (target, el, text) => {
  var element = document.createElement(el);
  element.appendChild(document.createTextNode(text));
  return document.getElementById(target).appendChild(element);
};

// var element = document.createElement("div");
// element.appendChild(
//   document.createTextNode("Hello, World")
// );

// document.getElementById("app").appendChild(element);

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    injectElement("app", "div", "Hello, World");
    injectElement("app", "div", "Hello, World Part2");
    add1(10).then(v => {
      console.log(v); // prints 60 after 4 seconds.
    });
  },
  false
);
