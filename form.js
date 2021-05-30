class Form{
  constructor(){
      this.title=createElement('h5');
      this.pizza=createButton("pizza");
      this.burger=createButton("burger");
      this.noodles=createButton("noodles");
      this.springroll=createButton("springroll");
      this.greeting1=createElement('h3');
      this.greeting2=createElement('h3');
      this.greeting3=createElement('h3');
      this.greetin4=createElement('h3');
  }

display(){
  this.title.html("RESTAURANT");
  this.title.position(250,35);
  this.pizza.position(90,200);
  this.burger.position(190,200);
  this.noodles.position(290,200);
  this.springroll.position(390,200);

  this.pizza.mousePressed(()=>{
    this.greeting1.html("hello,start making your pizza by clicking on the items");
    this.greeting1.position(100,35);
    this.title.hide();
    this.burger .hide();
    this.noodles.hide();
    this.springroll.hide();
    this.pizza.hide();
    //onion
    onion=createSprite(500,100,30,30);
   
    //sauce
    sauce=createSprite(500,200,30,30);
    
    ////dough
    dough=createSprite(500,300,30,30);
   
    //cheese
    cheese=createSprite(500,400,30,30);
    
    //oregano
    oregano=createSprite(500,500,30,30);


  
  })
  this.springroll.mousePressed(()=>{
    this.greeting2.html("hello,start making your springroll by clicking on the items");
    this.greeting2.position(100,35);
    this.greeting1.hide();
    this.title.hide();
    this.burger .hide();
    this.noodles.hide();
    this.springroll.hide();
    this.pizza.hide();
    //onion
    onion=createSprite(500,100,30,30);
   
    //sauce
    sauce=createSprite(500,200,30,30);
   

    //chapatidough
    chapati=createSprite(500,300,30,30);
    
    //cheese
    cheese=createSprite(500,400,30,30);
   
    //oregano
    oregano=createSprite(500,500,30,30);
    
    //panner
    panner=createSprite(500,500,30,30);
   
    //tomato
    tomato=createSprite(500,550,30,30);
   

  })
  this.burger.mousePressed(()=>{
    this.greeting3.html("hello,start making your burger by clicking on the items");
    this.greeting3.position(100,35);
    this.greeting2.hide();
    this.greeting1.hide();
    this.title.hide();
    this.burger .hide();
    this.noodles.hide();
    this.springroll.hide();
    this.pizza.hide();
    //onion
    onion=createSprite(500,100,30,30);
    
    //sauce
    sauce=createSprite(500,150,30,30);
   
    //topburgerBread
    topburgerBread=createSprite(500,200,30,30);
   
    //bottomburgerbread
    bottomburgerbread=createSprite(500,450,30,30);
    
    //cheese
    cheese=createSprite(500,250,30,30);
   
    //oregano
    oregano=createSprite(500,300,30,30);
    
    //paneer
    panner=createSprite(500,350,30,30);
   
    //tomato
    tomato=createSprite(500,400,30,30);
   

  })
  this.noodles.mousePressed(()=>{
    this.greeting4.html("hello,start making your noodles by clicking on the items");
    this.greeting4.position(100,35);
    this.greeting1.hide();
    this.greeting2.hide();
    this.greeting3.hide();
    this.title.hide();
    this.burger .hide();
    this.noodles.hide();
    this.springroll.hide();
    this.pizza.hide();
    //onion
    onion=createSprite(500,100,30,30);
   
    //sauce
    sauce=createSprite(500,150,30,30);
    
    //cheese
    cheese=createSprite(500,250,30,30);
    
    //oregano
    oregano=createSprite(500,300,30,30);
    
    //panner
    panner=createSprite(500,350,30,30);
   
    //tomato
    tomato=createSprite(500,400,30,30);
    
    //cookednoodles
    cookednoodles=createSprite(500,450,30,30);
    
  })



}




}