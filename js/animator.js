(function(){

var Animator = function(container, sections, assetsPath){
    this.container = container;
    this.sections = sections;
    this.assetsPath = assetsPath;
    this.getBoundings = this.scrollEvent.bind(this);
}

Animator.prototype.render = function(start){
    if(start){
        window.addEventListener('scroll', this.getBoundings);
        this.build(0);
        this.scrollEvent();
    } else {
        window.removeEventListener('scroll', this.getBoundings);
    }

}

Animator.prototype.updateImage = function(index){
    var canvas = this.sections.children[0];
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function(){
        var canvasStyle = getComputedStyle(canvas);
        var canvasWidth = canvasStyle.width.replace("px", "");
        var imageRatio = img.width/img.height;
        var canvasHeight = canvasWidth/imageRatio;
        canvas.style.height = canvasHeight+"px";
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    }
    img.src = this.assetsPath+"Ibaco-"+(index+1).toString().padStart(5, '0')+".jpg";

}


Animator.prototype.build = function(index){
    this.updateImage(index);
}


Animator.prototype.scrollEvent = function(){
    var index = (this.container.getBoundingClientRect().height-this.container.getBoundingClientRect().bottom)/100;
    this.updateImage(Math.ceil(index));
}



window.Animator = Animator;

}());






