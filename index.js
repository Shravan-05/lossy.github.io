
let a = document.getElementById('pp');
        let b = setInterval(fun, 6000);
        let c = 1;
let lp=document.getElementById('lp');
let lpp=document.getElementById('seller');
     function fun() {
    
            if(c==1)
            {
                a.style.left = "0"
            }
            else if(c==2)
            { 
            a.style.left = "-100%"
            }
        else if(c==3)
        {
                a.style.left = "-200%"
        }
        else if(c>3)
        {
c=0;
        }
        c++;
     
         
        }
        let  array=[];
     let list=document.getElementById('list')  ; 
        let  q1=document.getElementById('q1');
        let q2=document.getElementById('q2');
     let lpn=document.getElementById('lp');
     let lp1=document.getElementById('lp1');
     let pc=document.getElementById('pc');
     let pc1=document.getElementById('pc1');
     let pc2=document.getElementById('pc2');
     let pc3=document.getElementById('pc3');
     let plus=document.getElementById('plus');
     let nc=document.getElementById('minus');
     let co2=document.getElementById('co2');
     let f1=document.getElementById('f1');
     let plus1=document.getElementById('plus1');
let minus1=document.getElementById('minus1');
let f22=document.getElementById('f22');
let l=document.getElementById('tot');
let count=document.getElementById('count');
//3rd shoes
let plus2=document.getElementById('plus2');
let minus2=document.getElementById('minus2');
let q3=document.getElementById('q3');
let pc4=document.getElementById('pc5');
let pc5=document.getElementById('pc4');
let f23=document.getElementById('f23');
//4th shoes
let plus3=document.getElementById('plus3');
let minus3=document.getElementById('minus3');
let q5=document.getElementById('q4');
let pc6=document.getElementById('pc6');
let pc7=document.getElementById('pc7');
let f24=document.getElementById('f24');
//5th shoe
let plus4=document.getElementById('plus4');
let minus4=document.getElementById('minus4');
let q6=document.getElementById('q5');
let pc8=document.getElementById('pc8');
let pc9=document.getElementById('pc9');
let f25=document.getElementById('f25');
//6th shoe
let plus5=document.getElementById('plus5');
let minus5=document.getElementById('minus5');
let q7=document.getElementById('q7');
let pc10=document.getElementById('pc10');
let pc11=document.getElementById('pc11');
let f26=document.getElementById('f26');
let i=0;
let cost1=0;
let cost2=0;
let i1=0;
let costp=0;
let costmm=0;
let total2=0;
let total3=0;
let m1=0;
let m2=0;
let co1=0;
//shoe3
let i2=0;
let costp1=0;
let costmm1=0;
let costm3=0;
let m4=0;
let total4=0;
//shoe 4
let i3=0;
let costp2=0;
let costmm2=0;
let costm4=0;
let m5=0;
let total5=0;
//5th shoe
let i4=0;
let costp3=0;
let costmm3=0;
let costm5=0;
let m6=0;
let total6=0
//6th shoe
let i5=0;
let costp4=0;
let costmm4=0;
let costm6=0;
let m7=0;
let total7=0
plus.addEventListener('click',function()
{
plusfun(59.90);
cost();
total1();
count1();
})
nc.addEventListener('click',function()
{
minusfun();
costm();
totalm();
count2();
})
plus1.addEventListener('click',function()
{
    plus1fun();
    cost11();
    total1();
    count1();
});
minus1.addEventListener('click',function()
{
    minus1fun();
    cost12();
    totalm1();
    count2();
})
plus2.addEventListener('click',function()
{
plus2fun();
cost13();
total1();
count1();
});
minus2.addEventListener('click',function()
{
minus2fun();
cost14();
totalm2();
count2();
});
plus3.addEventListener('click',function()
{
plus3fun();
cost15();
total1();
count1();
});
minus3.addEventListener('click',function()
{
minus3fun();
cost16();
totalm3();
count2();
});

plus4.addEventListener('click',function()
{
plus4fun();
cost17();
total1();
count1();
});
minus4.addEventListener('click',function()
{
minus4fun();
cost18();
totalm4();
count2();
});
plus5.addEventListener('click',function()
{
plus5fun();
cost19();
total1();
count1();
});
minus5.addEventListener('click',function()
{
minus5fun();
cost20();
totalm5();
count2();
});
function count1()
{
    co1++;
    count.innerHTML=co1;
}
function count2()
{

    if(co1>0)
    {
    co1--;
    console.log(co1);
      count.innerText=co1;
    }
}
function plusfun(num)
{
i++;
pc.innerText=i;
pc1.innerText=i;

}
function minusfun()
{
i--;

if(i<0)
{
    i=0;
}

    pc.innerText=i;
    pc1.innerText=i;
    
}
function cost()
{
    if(i>0)
    {
cost1=cost1+59.90;
f1.innerText=cost1+'$';
total2=cost1;
    }
  
   
}
function costm()
{
    if(i>0)
    {

    cost2=cost1-59.90;
    f1.innerText=cost2+'$';
    cost1=cost2;
    total2=cost2;
    m1=cost2;
    
    }
   if(i==0)
{

    cost1=0;
    cost2=costp1+0;
    f1.innerText=cost2+'$';
    total2=cost2;
    m1=cost2;
}
    
}
function plus1fun()
{
    i1++;
    pc2.innerText=i1;
    pc3.innerText=i1;

}
function plus2fun()
{
i2++;
pc4.innerText=i2;
pc5.innerText=i2;
}
function plus3fun()
{
    i3++;
    pc6.innerText=i3;
    pc7.innerText=i3;
}
function plus4fun()
{
    i4++;
    pc8.innerText=i4;
    pc9.innerText=i4;
}
function plus5fun()
{
    i5++;
    pc10.innerText=i5;
    pc11.innerText=i5;
}
function minus1fun()
{
i1--;
if(i1<0)
{
    i1=0;
}
pc2.innerText=i1;
pc3.innerText=i1;

}
function minus2fun()
{
    i2--;
    if(i2<0)
    {
        i2=0;
    }
    pc4.innerText=i2;
pc5.innerText=i2;
}
function minus3fun()
{
    i3--;
    if(i3<0)
    {
        i3=0;
       
    }
    pc6.innerText=i3;
    pc7.innerText=i3;
}
function minus4fun()
{
    i4--;
    if(i4<0)
    {
        i4=0;
       
    }
    pc8.innerText=i4;
    pc9.innerText=i4;
}
function minus5fun()
{
    i5--;
    if(i5<0)
    {
        i5=0;
       
    }
    if(i5==0)
    {
        lp5.style.display='none';
    }
    pc10.innerText=i5;
    pc11.innerText=i5;
}

function cost11()
{

if(i1>0)
{
    costp=costp+60;
    f22.innerText=costp+'$';
    total3=costp;
}

}
function cost13()
{
if(i2>0)
{
costp1=costp1+64;
f23.innerText=costp1+'$';
total4=costp1;
}
}
function cost15()
{
    if(i3>0)
    {
    costp2=costp2+79.90;
    f24.innerText=costp2+'$';
    total5=costp2;
    } 
}

function cost16()
{
    if(i3>0)
{
    costmm2=costp2-79.90;
    f24.innerText=costmm2+'$';
    costp2=costmm2;
    total5=costmm2;
    m4=costmm2;
}
if(i3==0)
{

    costp2=0;
    costmm2=costp2+0;
    f24.innerText=costmm2+'$';
    total5=costmm2;
    m4=costmm2;
}
}
function cost17()
{
    if(i4>0)
    {
    costp3=costp3+80.90;
    f25.innerText=costp3+'$';

    console.log('f25:'+f25.innerHTML)
    total6=costp3;
    } 
}

function cost18()
{
    if(i4>0)
{
    costmm3=costp3-80.90;
    f25.innerText=costmm3+'$';
    costp3=costmm3;
    total6=costmm3;
    m5=costmm3;
}
if(i4==0)
{

    costp3=0;
    costmm3=costp3+0;
    f25.innerText=costmm3+'$';
    total6=costmm3;
    m5=costmm3;
}
}
function cost19()
{
    if(i5>0)
    {
    costp4=costp4+69.90;
    f26.innerText=costp4+'$';
    total7=costp4;
    } 
}

function cost20()
{
    if(i5>0)
{
    costmm4=costp4-69.90;
    f26.innerText=costmm4+'$';
    costp4=costmm4;
    total7=costmm4;
    m6=costmm4;
}
if(i5==0)
{

    costp4=0;
    costmm4=costp4+0;
    f26.innerText=costmm4+'$';
    costp4=costmm4;
    total7=costmm4;
    m6=costmm4;
}
}

function cost14()
{
if(i2>0)
{
    costmm1=costp1-64;
    f23.innerText=costmm1+'$';
    costp1=costmm1;
    total4=costmm1;
    m3=costmm1;
}
if(i2==0)
{

    costp1=0;
    costmm1=costp1+0;
    f23.innerText=costmm1+'$';
    total4=costmm1;
    m3=costmm1;
}
}
function cost12()
{
    if(i1>0)
    {
        
        costmm=costp-60;
        f22.innerText=costmm+'$';
        costp=costmm;
        total3=costmm;
        m2=costmm;
        
    }



    if(i1==0)
{

    costp=0;
    costmm=costp+0;
    f22.innerText=costmm+'$';
    total3=costmm;
    m2=costmm;
}


}
let nu1=0;
let nu2=0;
let n1=0;
let n2=0;
let n=0;
let y11=0;
//shoe3;
let j1=0;
let j2=0;
let j3=0;
let j4=0;
let n4;
let pre=0;
function total1()
{
    
    n=total2+total3+total4+total5+total6+total7;
nu1=n;
nu2=n;
pre=n;
j1=n;
j2=n;
j3=n;
j4=n;
l.innerText=n+"$";
}
function totalm()
{
    if(i>0)
    {
nu1=nu1-59.90;
total2=m1;
nu2=nu1;
j1=nu1;
j2=nu1;
j3=nu1;
j4=nu1;
l.innerText=nu1+"$";
console.log("total2:"+total2);
}
if(i==0)
{
    let n2=0;
    n2=nu1-59.90;
    l.innerText=n2+'$'
}
}
function totalm1()
{
    
       if(i1>0)
       { 
nu2=nu2-60;
total3=m2;
nu1=nu2;
j1=nu2;
j2=nu2;
j3=nu2;
j4=nu2;
l.innerText=nu2+"$";
       }
       if(i1==0)
       {
           let n9=0;
           n9=nu2-60;
           l.innerText=n9+'$'   
       } 

}
function totalm2()
{
    if(i2>0)
    {    j1=j1-64;
total4=m3;
nu1=j1;
nu2=j1;
j2=j1;
j3=j1
j4=j1;
l.innerText=j1+'$';
}
if(i2==0)
{
    let n8=0;
    n8=j1-64;
    l.innerText=n8+'$'   
}
}


function totalm3()
{
    
    if(i3>0)
    {
j2=j2-79.90;
total5=m4;
nu1=j2;
nu2=j2;
j1=j2;
j3=j2;
j4=j2;
l.innerText=j2+'$';
    }
    if(i3==0)
    {
        let n7=0;
        n7=j2-79.90;
        l.innerText=n7+'$'
    }
   
}
function totalm4()
{

    if(i4>0)
    {
    j3=j3-80.90
    total6=m5;
nu1=j3;
nu2=j3;
j1=j3;
j2=j3
j4=j3;
l.innerText=j3+'$';
    }
    if(i4==0)
    {
        let n5=0;
    n5=j3-80.90;
    l.innerText=n5+'$';
    } 
  

 
    }


function totalm5()
{
if(i5>0)
{
    j4=j4-69.90;
      console.log(n4);
    total7=m6;
nu1=j4;
nu2=j4;
j1=j4;
j2=j4;
l.innerText=j4+'$';
}
if(i5==0)
{let n4=0;
    n4=j4-69.90;
    l.innerText=n4+'$';

}

}


   

let q4=document.getElementById('q4');
let q55=document.getElementById('q5');
let lp3=document.getElementById('lp3');
let lp2=document.getElementById('lp2');
let lp4=document.getElementById('lp4');
let q66=document.getElementById('q6');
let lp5=document.getElementById('lp5');
        array=list;
        console.log(array);
        let c1=0;
        q1.addEventListener('click',function()
        {
c1++;
lpn.style="display:block;display:flex;justify-content:space-evenly;align-items:center";
     })

     q2.addEventListener('click',function()
     {
c1++;
lp1.style="display:block;display:flex;justify-content:space-evenly;align-items:center";
  })
  q4.addEventListener('click',function()
  {
c1++;
lp2.style="display:block;display:flex;justify-content:space-evenly;align-items:center";
})
q55.addEventListener('click',function()
  {
c1++;
lp3.style="display:block;display:flex;justify-content:space-evenly;align-items:center";
})
q66.addEventListener('click',function()
  {
c1++;
lp4.style="display:block;display:flex;justify-content:space-evenly;align-items:center";
})
q7.addEventListener('click',function()
  {
c1++;
lp5.style="display:block;display:flex;justify-content:space-evenly;align-items:center";
})

  if(l.innerText==0)
  {
    l.innerHTML="cart is empty";
  }
