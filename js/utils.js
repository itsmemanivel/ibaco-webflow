var Utils = (function(){

    var createElement = function(element, attribute, attrName){
        var elem = document.createElement(element);
        for(var i=0; i<attribute.length; i++){
            elem.setAttribute(attribute[i],attrName[i]);
        }
        return elem;
    }


    return{
        createElement : createElement
    }
}());