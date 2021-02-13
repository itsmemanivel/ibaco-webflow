(function(){






var SectionHandler = function(container, path){
    this.container = container;
    this.assetsPath = path;
    this.sections;
}

SectionHandler.prototype.createSection = function(){
    var elem = Utils.createElement('div',['id'],['section_1']);
    elem.style.position = "fixed";
    elem.style.height = "100%";
    elem.style.width = "100%";
    var canvas = '<canvas id="canvas_1" style="width:100%;height:100%;"></canvas>';
    elem.innerHTML =  canvas;
    this.container.appendChild(elem);
    return elem;
};

SectionHandler.prototype.animatorInit = function(){
    var animator = new Animator(this.container, this.sections, this.assetsPath);
    animator.render(true);
}

SectionHandler.prototype.build = function(){
    this.sections = this.createSection();
    this.animatorInit();
}

window.SectionHandler = SectionHandler;

}());

