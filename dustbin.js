/*class dustbins
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;	
        this.image = loadImage("sprites/dustbingreen.png")
    
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		

	}
	display()
	{
			var pos=this.bottomBody.position;
		
			

			

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			fill(255)
			rect(200,200);
			pop()
			
	}

}*/class dustbins {

  constructor(x, y, width, height) {

    var options = {
      isStatic: true
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    

  
   
    World.add(world,this.body);
   
  }
  display() { 
	  var pos = this.body.position;
	 // var angle=this.body.angle;
	  push();
	 translate(pos.x,pos.y);
    //rotate(angle)
      fill("red") 
    rectMode(CENTER); 
   rect(0,0,this.width,this.height) 
    pop();
            

    }
};