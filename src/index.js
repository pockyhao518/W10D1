const DomNode = require("./dom_node_collection")

window.$l = $l; 
function $l(selector){
    array = []
    if (selector instanceof HTMLElement){
        new DomNode(selector)
    }
    else {
    const matches = document.querySelectorAll(selector);
     matches.forEach(el => array.push(el));
     return array;
}
}