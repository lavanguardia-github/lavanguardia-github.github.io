// using d3 for convenience >> Scrollama
let body = d3.select('body');
let scrolly = body.select("#scrolly");
let figure = scrolly.select("figure");
let figureJs = document.getElementsByTagName('figure')[0];
let article = scrolly.select("article");
let step = article.selectAll(".step");
let scroller = scrollama();

// generic window resize listener event
function handleScrollamaResize() {
    let stepH = Math.floor(window.innerHeight * 0.75);
    step.style("height", stepH + "px");

    let altoVentana = window.innerHeight;
    let altoFlourish = figureJs.getBoundingClientRect().height;

    let diferencia = altoVentana - altoFlourish;
    let diferencia_2 = diferencia / 2;

    figure.style("top", diferencia_2 + "px");

    scroller.resize();
}

function handleStepEnter(response) {
    step.classed("is-active", function(d, i) {
        return i === response.index;
    });

    let iframe = document.getElementById('iframe');
    iframe.src = 'https://flo.uri.sh/story/892451/embed#slide-' + response.index;
}

function init() {
  handleOwnResize();
  handleScrollamaResize();
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.85,
      debug: false
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", function() {
    handleOwnResize();
    handleScrollamaResize();    
  });
}

function handleOwnResize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// kick things off
init();