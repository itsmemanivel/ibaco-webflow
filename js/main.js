/*

*/


var main = (function(){
    var container = document.getElementById("main-container");
    var builder;
    var basePath = 'Assets/jpg/';
    var  totalImages = 1015;
    // container.style.backgroundColor = "red";
    container.style.width = "100%";
    container.style.height = totalImages*100+"px";
    container.style.position = "relative"
    


    builder = new SectionHandler(container, basePath);
    builder.build();

    
}());