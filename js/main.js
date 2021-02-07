/*

*/


var main = (function(){
    var container = document.getElementById("main-container");
    var builder;
    var basePath = 'Assets/jpg/';
    var  totalImages = 100;
    // container.style.backgroundColor = "red";
    container.style.width = "100%";
    container.style.height = totalImages/2*750+"px";
    container.style.position = "relative"
    


    builder = new SectionHandler(container, basePath);
    builder.build();

    // var section = document.createElement('div');
    // section.setAttribute('id',"section_1");
    // container.style.height = 720*50+"px";
    // section.style.position = "fixed"
    // var img = document.createElement('img');
    // img.classList.add('img');
    // var imgArr = [];
    // var pad = "0000";
    // var count = 1;
    // img.src = "Assets/jpg/Ibaco-00001.jpg";

    // window.addEventListener('scroll', function(){
    //     if(count <=100){
    //         var path = "Assets/jpg/Ibaco-"+count.toString().padStart(5, '0')+".jpg";
    //         img.src = path;
    //         count++;
    //     }
    // });
    // section.appendChild(img);
    // container.appendChild(section);
    // for(var i=1; i<=100; i++){
    //     var path = "Assets/jpg/Ibaco-"+(pad+i)+".jpg";
    //     imgArr.push(path);
    // }
    
}());