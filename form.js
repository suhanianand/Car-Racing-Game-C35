class Form{
    constructor(){
        this.input= createInput("Name");
            this.button= createButton("play");
            this.greeting= createElement("h2");
    }
    display(){
        var title= createElement("h1");
        title.html("Car Racing Game");
        title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);
    }
}