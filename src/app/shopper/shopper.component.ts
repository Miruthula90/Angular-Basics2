import { Component, OnInit } from '@angular/core';

@Component({
     
  selector: 'app-shopper',
  templateUrl: './shopper.component.html',
  styleUrls: ['./shopper.component.css']
})
export class ShopperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 items=[
  {
       "id":1,
       "productName" : "THE ARCHER Men's Round Neck T Shirt",
       "basePrice" : 500,
       "totalprice":540,
       "image" : "/assets/Images/yellowshirt.jpg",
       "description" : "OUR BRAND “THE ARCHER” CONSIST OF MENS APPARELS ,LIKE CASUAL T SHIRTS,POLO’S,SWEETSHIRTS ",
       "varients" : [
            {
                 "type" : "Size",
                 "values" : ["xl","xxl"]
            },
            {
                 "type" : "Meterial",
                 "values" : ["cotton","silk"]
            },
            {
                 "type" : "Color",
                 "values" : ["yellow","red"]
            }
       ],
       "varientDetails" : [
            {
                 "size" : "xl",
                 "meterial" : "cotton",
                 "color" : "red",
                 "addOnprice" : 30
            },
            {
                 "size" : "xl",
                 "meterial" : "cotton",
                 "color" : "yellow",
                 "addOnprice" : 40
            },
            {
                 "size" : "xl",
                 "meterial" : "silk",
                 "color" : "red",
                 "addOnprice" : 50
            },
            {
                 "size" : "xl",
                 "meterial" : "silk",
                 "color" : "yellow",
                 "addOnprice" : 60
            },
            {
                 "size" : "xxl",
                 "meterial" : "cotton",
                 "color" : "red",
                 "addOnprice" : 70
            },
            {
                 "size" : "xxl",
                 "meterial" : "cotton",
                 "color" : "yellow",
                 "addOnprice" : 80
            },
            {
                 "size" : "xxl",
                 "meterial" : "silk",
                 "color" : "red",
                 "addOnprice" : 90
            },
            {
                 "size" : "xxl",
                 "meterial" : "silk",
                 "color" : "yellow",
                 "addOnprice" : 100
            }
       ]
  },
  {
    "id":2,
       "productName" : "Trendzvila Women's Banarasi Saree With Blouse",
       "basePrice" : 5000,
       "totalprice":5040,
       "image" : "/assets/Images/yellowsaree.jpg",
       "description" : "Act out your clothing urges by draping this fantabulous apparel from Trendzvila! S.",
       "varients" : [
            {
                 "type" : "Meterial",
                 "values" : ["cotton","silk"]
            },
            {
                 "type" : "Color",
                 "values" : ["yellow","red"]
            }
       ],
       "varientDetails" : [
            {
                 "meterial" : "cotton",
                 "color" : "red",
                 "addOnprice" : 30
            },
            {
                 "meterial" : "cotton",
                 "color" : "yellow",
                 "addOnprice" : 40
            },
            {
                 "meterial" : "silk",
                 "color" : "red",
                 "addOnprice" : 50
            },
            {
                 "meterial" : "silk",
                 "color" : "yellow",
                 "addOnprice" : 60
            }
       ]
  }
]
selectedsize: string = 'xl';
selectedmaterial: string = 'cotton';
selectedcolor: string = 'yellow';
selectedproduct: number;
totalprice:number;
netprice:number;
val=[];
len:number=0;
calcprice()
{
     var numbers = this.val.map(i => i.price);

     // gets the sum of the array of numbers: 134
     var sum = numbers.reduce((a, b) => a + b, 0);
     this.netprice=sum;
     console.log(sum);
}

changedval(varientvalue:string,id:number,type:string)
{
  // console.log(type)
  // console.log(type=="color")
  // console.log(type=="size")
  if (type=="Size")
  {
    console.log('1');
    this.selectedsize=varientvalue;
  }
  else if(type=="Meterial")
  {
    console.log('12');
    this.selectedmaterial=varientvalue;
  }
  else if(type=="Color")
  {
    console.log('3');
    this.selectedcolor=varientvalue;
  }
  this.selectedproduct=id;
  console.log(this.selectedsize);
  console.log(this.selectedmaterial);
  console.log(this.selectedcolor);


//   var addonprice=this.items.find(x=>x.id == id).varientDetails.find(
//        y=>y.color==this.selectedcolor && y.meterial==this.selectedmaterial && y.size==this.selectedsize
       
//        ).addOnprice
       var addonprice=this.items.find(x=>x.id == id).varientDetails.find((y)=>{
         
          
          if (typeof(y.size)!=="undefined")
          {
               if (y.color==this.selectedcolor && y.meterial==this.selectedmaterial && y.size==this.selectedsize )
               {
                 return y.addOnprice;
               }
          }
          else
          {
               if (y.color==this.selectedcolor && y.meterial==this.selectedmaterial)
               {
                    return y.addOnprice;
               }
          }
      
          
        } ).addOnprice;
  
  var baseprice=this.items.find(x=>x.id == id).basePrice;

  this.totalprice=baseprice+addonprice;
    
  var fetch=this.items.filter((x)=>{if (x.id == id){x.totalprice=this.totalprice;
     
}});
//var vaaaa=this.items.filter(x=>x.id == id).;
  //this.items.keys["totalprice"]==this.totalprice;
    
    //&& x.varientDetails.find(y=>y.color==this.selectedcolor && y.meterial==this.selectedmaterial && y.size==this.selectedsize).addOnprice);
   
    console.log(this.totalprice);
    console.log(this.items.find(x=>x.id == id).totalprice)
  
    
    
  
}


addtocart(displayval:object)
{
 this.val.push(displayval);
 this.calcprice();
 this.len=this.val.length;
}

remove(id:number)
{
     console.log(this.val);
     console.log(id);
     this.val.forEach( (item, index) => {
          if(item.id == id) this.val.splice(index,1);
        });
        console.log(this.val);
        this.calcprice();
        this.len=this.val.length;
}

}