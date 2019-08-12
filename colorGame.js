var first=document.querySelector(".first");
var second=document.querySelector(".second");

var newGame=document.querySelector(".nav > li:first-child");

var winText=document.querySelector(".nav > li:nth-child(2)");

var Span1=document.querySelector(".span1");
var Span2=document.querySelector(".span2");
var Span3=document.querySelector(".span3");

var fake=document.querySelector(".fake");

var level=1;

var win=0;

var t=0;

var q=0;

var Easy=document.querySelector(".Easy");

var Hard=document.querySelector(".Hard");

var ng1=document.querySelector(".one");
var ng2=document.querySelector(".two");
var ng3=document.querySelector(".three");
var ng4=document.querySelector(".four");
var ng5=document.querySelector(".five");
var ng6=document.querySelector(".six");

var color=new Array();

for(var i=0;i<6;i++)
 {
   color[i] = new Object();
   color[i].red=Math.floor((Math.random() * 255) + 0);
   color[i].green=Math.floor((Math.random() * 255) + 0);
   color[i].blue=Math.floor((Math.random() * 255) + 0);
 }

var index=Math.floor((Math.random() * 5) + 0);

fake.style.backgroundColor="rgb("+color[index].red+","+color[index].green+","+color[index].blue+")";

Span1.textContent=color[index].red;
Span2.textContent=color[index].green;
Span3.textContent=color[index].blue;
ng1.style.backgroundColor="rgb("+color[0].red+","+color[0].green+","+color[0].blue+")";
ng2.style.backgroundColor="rgb("+color[1].red+","+color[1].green+","+color[1].blue+")";
ng3.style.backgroundColor="rgb("+color[2].red+","+color[2].green+","+color[2].blue+")";
ng4.style.backgroundColor="rgb("+color[3].red+","+color[3].green+","+color[3].blue+")";
ng5.style.backgroundColor="rgb("+color[4].red+","+color[4].green+","+color[4].blue+")";
ng6.style.backgroundColor="rgb("+color[5].red+","+color[5].green+","+color[5].blue+")";

var index;

function newColor1()
{

  for(var i=0;i<6;i++)
   {
     color[i].red=Math.floor((Math.random() * 255) + 0);
     color[i].green=Math.floor((Math.random() * 255) + 0);
     color[i].blue=Math.floor((Math.random() * 255) + 0);
   }

  index=Math.floor((Math.random() * 6) + 0);

  fake.style.backgroundColor="rgb("+color[index].red+","+color[index].green+","+color[index].blue+")";

  Span1.textContent=color[index].red;
  Span2.textContent=color[index].green;
  Span3.textContent=color[index].blue;
  ng1.style.backgroundColor="rgb("+color[0].red+","+color[0].green+","+color[0].blue+")";
  ng2.style.backgroundColor="rgb("+color[1].red+","+color[1].green+","+color[1].blue+")";
  ng3.style.backgroundColor="rgb("+color[2].red+","+color[2].green+","+color[2].blue+")";
  ng4.style.backgroundColor="rgb("+color[3].red+","+color[3].green+","+color[3].blue+")";
  ng5.style.backgroundColor="rgb("+color[4].red+","+color[4].green+","+color[4].blue+")";
  ng6.style.backgroundColor="rgb("+color[5].red+","+color[5].green+","+color[5].blue+")";

  winText.textContent="";

}

function newColor2()
{

  for(var i=0;i<6;i++)
   {
     color[i].red=Math.floor((Math.random() * 255) + 0);
     color[i].green=Math.floor((Math.random() * 255) + 0);
     color[i].blue=Math.floor((Math.random() * 255) + 0);
   }

  index=Math.floor((Math.random() * 3) + 0);

  fake.style.backgroundColor="rgb("+color[index].red+","+color[index].green+","+color[index].blue+")";

  Span1.textContent=color[index].red;
  Span2.textContent=color[index].green;
  Span3.textContent=color[index].blue;
  ng1.style.backgroundColor="rgb("+color[0].red+","+color[0].green+","+color[0].blue+")";
  ng2.style.backgroundColor="rgb("+color[1].red+","+color[1].green+","+color[1].blue+")";
  ng3.style.backgroundColor="rgb("+color[2].red+","+color[2].green+","+color[2].blue+")";
  ng4.style.backgroundColor="rgb("+color[3].red+","+color[3].green+","+color[3].blue+")";
  ng5.style.backgroundColor="rgb("+color[4].red+","+color[4].green+","+color[4].blue+")";
  ng6.style.backgroundColor="rgb("+color[5].red+","+color[5].green+","+color[5].blue+")";

  winText.textContent="";

}

Easy.addEventListener("click",function(){
  level=0;
  newColor2();
  update2();
  second.style.display="none";
  if(win>=1)
  {
    animateback();
    win=0;
  }
});

Hard.addEventListener("click",function(){
  level=1;
  newColor1();
  update2();
  second.style.display="block";
  console.log(win);
  if(win>=1)
  {
    animateback();
    setTimeout(function(){
      win=0;
    },5000);
  }
});

newGame.addEventListener("click",function(){
  if(level==0)
  {
    newColor2();
    update2();
    second.style.display="none";
    if(win>=1)
    {
      animateback();
      win=0;
    }
  }
  if(level==1)
  {
    newColor1();
    update2();
    second.style.display="block";
    if(win>=1)
    {
      animateback();
      win=0;
    }
  }
})

function update1()
{
  winText.textContent="You win!";

  ng1.style.backgroundColor=fake.style.backgroundColor;
  ng2.style.backgroundColor=fake.style.backgroundColor;
  ng3.style.backgroundColor=fake.style.backgroundColor;
  ng4.style.backgroundColor=fake.style.backgroundColor;
  ng5.style.backgroundColor=fake.style.backgroundColor;
  ng6.style.backgroundColor=fake.style.backgroundColor;
  ng1.style.opacity=1;
  ng2.style.opacity=1;
  ng3.style.opacity=1;
  ng4.style.opacity=1;
  ng5.style.opacity=1;
  ng6.style.opacity=1;


  winText.style.color="#fff";

  animate();
}

ng1.addEventListener("click",function(){
  if(ng1.style.backgroundColor!=fake.style.backgroundColor)
  {
    ng1.style.opacity=0;
  }
  if(ng1.style.backgroundColor==fake.style.backgroundColor)
  {
    win++;
    if(win==1)
    {
      update1();
    }
  }
})

ng2.addEventListener("click",function(){
  if(ng2.style.backgroundColor!=fake.style.backgroundColor)
  {
    ng2.style.opacity=0;
  }
  if(ng2.style.backgroundColor==fake.style.backgroundColor)
  {
    win++;
    if(win==1)
    {
      update1();
    }
  }
})

ng3.addEventListener("click",function(){
  if(ng3.style.backgroundColor!=fake.style.backgroundColor)
  {
    ng3.style.opacity=0;
  }
  if(ng3.style.backgroundColor==fake.style.backgroundColor)
  {
    win++;
    if(win==1)
    {
      update1();
    }
  }
})

ng4.addEventListener("click",function(){
  if(ng4.style.backgroundColor!=fake.style.backgroundColor)
  {
    ng4.style.opacity=0;
  }
  if(ng4.style.backgroundColor==fake.style.backgroundColor)
  {
    win++;
    if(win==1)
    {
      update1();
    }
  }
})

ng5.addEventListener("click",function(){
  if(ng5.style.backgroundColor!=fake.style.backgroundColor)
  {
    ng5.style.opacity=0;
  }
  if(ng5.style.backgroundColor==fake.style.backgroundColor)
  {
    win++;
    if(win==1)
    {
      update1();
    }
  }
})

ng6.addEventListener("click",function(){
  if(ng6.style.backgroundColor!=fake.style.backgroundColor)
  {
    ng6.style.opacity=0;
  }
  if(ng6.style.backgroundColor==fake.style.backgroundColor)
  {
    win++;
    if(win==1)
    {
      update1();
    }
  }
})

function update2() {
  ng1.style.opacity=1;
  ng2.style.opacity=1;
  ng3.style.opacity=1;
  ng4.style.opacity=1;
  ng5.style.opacity=1;
  ng6.style.opacity=1;
}


function animate()
{
  if(t>25)
  {
    t=0;
    return;
  }
  t++;
  winText.style.transform+="scale3d(1.05,1.05,1)";

  winText.style.transform+="translate3d(0,7.4px,0)";

  window.requestAnimationFrame(animate);
}
  function animateback()
  {
    if(q>25)
    {
      q=0;
      return;
    }
    q++;
    winText.style.transform = winText.style.transform + "scale3d(0.952380952380,0.952380952380,1)";
    winText.style.transform = winText.style.transform + "translate3d(0,-7.4px,0)";

    window.requestAnimationFrame(animateback);
  }
