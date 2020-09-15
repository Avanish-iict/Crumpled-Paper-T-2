class Dustbin4 {
  constructor(x,y,width,height){
       var options = {
          isStatic:true
      }
    
  
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = 90;
        this.height = 10;

         World.add(world,this.body);
        }
   
  display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(-155, 44, 90, 10,{isStatic:true});
      
      strokeWeight(4);
      stroke("blue");
      translate(pos.x,pos.y);
            fill("red");
      pop();
    }
  }
  

