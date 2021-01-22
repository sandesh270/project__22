class Box {
  constructor(x,y,width,height,colorR,colorG,colorB) {
    var options = {
        isStatic: false
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    if(this.body.speed<3){
    rectMode(CENTER);
    fill(this.colorR,this.colorG,this.colorB);
    rect(pos.x, pos.y, this.width, this.height);
    }else{ 
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      rect(this.body.position.x,this.body.position.y);
      pop();
    }
    
  }
  Score(){
    if(this.visibility<0&&this.visibility>-10){
      score += 10;
      console.log("sandesh")
    }
  }
  
};
