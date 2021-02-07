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

    var figure = Utils.createElement('figure',['id'],['figure_1']);
    // var img = Utils.createElement('img',['id'],['img']);

    elem.appendChild(figure);
    return elem;
};

SectionHandler.prototype.animatorInit = function(){
    var animator = new Animator(this.container, this.sections, this.assetsPath);
    animator.build();
}

SectionHandler.prototype.build = function(){
    this.sections = this.createSection();
    this.animatorInit();
}

window.SectionHandler = SectionHandler;

}());

