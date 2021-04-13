/*

*/


var main = (function(){
    var container = document.getElementById("main-container");
    var builder;
    var basePath = 'Assets/jpg/';
    var  totalImages = 1015;
    var index = 0;
    // container.style.backgroundColor = "red";
    container.style.width = "100%";
    container.style.height = totalImages*100+"px";
    container.style.position = "relative"
    
    // for(var i=0; i< totalImages; i++){
    //     Utils.preloadImg(i,basePath);
    // }

    setInterval(() => {
        if(index < totalImages){
            Utils.preloadImg(index,basePath);
            index++;
        } else {
            clearInterval();
        }
    }, 10);

    builder = new SectionHandler(container, basePath);
    builder.build();

    
}());