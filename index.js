let i = 0;
let counters = document.getElementsByClassName("count");
let x = 0;


function increase(){
     i += 1;
    // for(let element in counters){
    //     console.log(element)
    // };


    // for(let x = 0; x < counters.length; x++){
    //     if (x === ){
    //     };
    // };
    x++;
    if (x === counters.length){
        x = 0;
    }
    counters.item(x).innerHTML = i;
};

// function dw_getWindowDims() {
//     var doc = document, w = window;
//     var docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
//             doc.documentElement: doc.body;
    
//     var width = docEl.clientWidth;
//     var height = docEl.clientHeight;
    
//     // mobile zoomed in?
//     if ( w.innerWidth && width > w.innerWidth ) {
//         width = w.innerWidth;
//         height = w.innerHeight;
//     }
    
//     return {width: width, height: height};

let width = window.innerWidth;

let height = window.innerHeight;

console.log(width, height);