(function(){

var count = 1;
var Animator = function(container, sections, assetsPath){
    this.container = container;
    this.sections = sections;
    this.assetsPath = assetsPath;
    
}

Animator.prototype.updateImage = function(){
    var img = document.createElement('img');
    img.src = this.assetsPath+"Ibaco-"+count.toString().padStart(5, '0')+".jpg";
    this.sections.children[0].appendChild(img);
    this.container.appendChild(this.sections);
}

Animator.prototype.build = function(){
    this.updateImage();
}

// window.addEventListener('scroll', function(){

//     Animator.updateImage();
// })

window.Animator = Animator;

}());






