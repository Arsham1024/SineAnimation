let angle = 0;
let w = 30;
let maxDist;
let ma;

function setup(){
   createCanvas (600 , 600 , WEBGL);
   frameRate();
   ma = atan(1/(sqrt(2)));
   maxDist = dist(0,0,200,200);
}

function draw(){
   background(0);

   ortho(-400 , 400 , -600 , 500 , 0 , 800);

   ambientLight(255, 255,255,0,-1,0);


   // translate(0, 0, -100);
   rotateX(-QUARTER_PI);
   rotateY(ma);

   //translate(width/2 , height/2)
   rectMode(CENTER);

   //spin
   // rotateX(angle*0.75);


   let offset = 0;
   for(let j = 0 ; j < height ; j+=w){
      for(let i = 0 ; i < width ; i+=w){
         push();

         let d = dist(i,j,width/2,height/2);

         offset = map(d, 0 , maxDist, -1 ,1);

         let h = map(sin(angle+offset*2), -1 ,1 , 0 , 250);

         translate(i-width/2, 0 , j-height/2);
         box(w-2, h, w-2);
         // rect( i-width/2 + w/2, 0 , w-2 , h);
         pop();
      }
   }
   angle += 0.1;
}