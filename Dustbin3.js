class Dustbin3 {
  constructor(y,x,width,height){
       var options = {
          isStatic:true
      }
    
  
     this.body = Bodies.rectangle(y,x,width,height,options);
     this.width = 90;
        this.height = 90;

         World.add(world,this.body);
        }
   
  display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(-30, -2, 10, 110,{isStatic:true});
      
      translate(pos.x,pos.y);
            fill("white");
      pop();
    }
  }
  
