class Monster {

    constructor(x,y,r)
      {

          var options = { 
              density: 5, 
              frictionAir: 0,
              isStatic: false
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("monster.png");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
          World.add(world, this.body);
  
      }

      display()
      {
              
              var pos=this.body.position;		
              push()
              translate(pos.x, pos.y);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(monster_Img, 0,0,this.r, this.r)
              pop()
              
      }
      
  }
  