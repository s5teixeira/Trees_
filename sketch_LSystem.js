let current = "S";
let next = "";
let n = 6;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  strokeWeight(2);
  background (245, 238, 248);

  translate(width/2,height);
  rotate(180);

  generation();
}

function draw() {
}

function generation(){
  for (let iter = 0; iter < n; iter++){
    next = "";
    for (let i = 0; i < current.length; i++){
      let c = current[i];
      if (c=="S") next += "F";
      else if (c=="F") {
         
         next += "F[+F]F[-F]F";
      }
      else next += c;
    } 
    current = next;
  } 
  print(current); 
  turtle(current);
}

function turtle(current){
  //adding random for length when drawing each line//
  let d = random (5, 30);
  //adding random to get random angle in each rotation //
  let angle = random (5, 30);
  
  for(let i = 0; i <= current.length; i++){
    let command = current[i];
    if(command =="F"){
      translate(0,d);
      line(0,-d,0,0);
    }
    else if(command =="f"){
      translate(0,d);
    }
    else if(command=="+"){
      rotate(-angle);
    }
    else if(command=="-"){
      rotate(angle);
    }
    else if(command=="["){
      push();
    }
    else if(command=="]"){
      pop();
    }
  }
}
