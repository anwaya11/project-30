class Block{
  constructor(x, y, width, height) {
    
      var options = {
          restitution :0.4,
          friction :0.0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity=225;
      this.image=loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      if((this.body.speed)<5){
     
      }
       else {
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity-5;
        translate(pos.x,pos.y);
        tint(255,this.Visiblity);
       
        image(this.image,0,0,this.width,this.height);
        pop();
      }
    

     // if(this.body.speed<3){

        //super.display();
      //}

      //else{
        //World.remove(world,this.body)
      //push();
        // this.Visiblity=this.Visiblity-5
//      
        //tint(255,this.Visiblity) ;
      
       
      //pop();
      //}

      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
}