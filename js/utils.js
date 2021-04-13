var Utils = (function(){

    var createElement = function(element, attribute, attrName){
        var elem = document.createElement(element);
        for(var i=0; i<attribute.length; i++){
            elem.setAttribute(attribute[i],attrName[i]);
        }
        return elem;
    }



    var preloadImg = function(index, assetsPath){
        var img = new Image();

        img.onload = function(){
            var elem = document.getElementById('rendering-elem');
            elem.append(img);
        }
        img.src = assetsPath+"Ibaco-"+(index+1).toString().padStart(5, '0')+".jpg";

    }


    return{
        createElement : createElement,
        preloadImg : preloadImg
    }
}());