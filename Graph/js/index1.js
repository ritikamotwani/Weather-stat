// v3.1.0
//Docs at http://simpleweatherjs.column
 var a=0,b=0,c=0,d=0,e=0;
$("#btn").click(function() {
    //alert("hi");
    temp1 = new Array();
    temp2 = new Array();
    var sum=0,i=0,r;
   
    var country1 =["Dispur","Hyderabad","Shimla","Lucknow","Bhopal","Mumbai","Chennai","Shillong","Jaipur","Kolkata"];
    var country2=["Sydney","Melbourne","Townsville","Darwin","Bunbury","Sunshine Coast","Geraldton","Busselton","Albany","Devonport"];
    var country3 = ["Auckland","Wellington","Hamilton","Dunedin","Nelson","Rotorua","Whanganui","Christchurch","Gisborne","Invercargill"];
    var country4 = ["Salvador","Rio de Janeiro","Manaus","Campinas","Natal","Teresina","Osasco","Sorocaba","Aracaju","Joinville"];
    var country5 = ["Berlin","Hamburg","Munich","Essen","Bremen","Leipzig","Bochum","Bonn", "Karlsruhe","Münster"];
    country1.forEach(function(item, index){

       $.simpleWeather({

          location: item,
          woeid: '',
          unit: 'f',
          success: function(weather) {
            console.log(item, weather.temp);
            sum=sum+parseInt(weather.temp);
            i++;
            if(i==10){
              a=sum/10;
              console.log(a);
            }
           
          },
          error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
          }
        });
      



    });
        var sum1 = 0;
        var j = 0;
        country2.forEach(function(item, index){

       $.simpleWeather({

          location: item,
          woeid: '',
          unit: 'f',
          success: function(weather) {
            console.log(item, weather.temp);
            sum1=sum1+parseInt(weather.temp);
            j++;
            if(j==10){
              b=sum1/10;
              console.log(b);

            }
           
           },
          error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
          }
        });
      



    });
            var sum2 = 0;
            var k = 0;
            country3.forEach(function(item, index){

       $.simpleWeather({

          location: item,
          woeid: '',
          unit: 'f',
          success: function(weather) {
            console.log(item, weather.temp);
            sum2=sum2+parseInt(weather.temp);
            k++;
            if(k==10){
              c=sum2/10;
              console.log(c);
            }
           
          },
          error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
          }
        });
      



    });
                var sum3 = 0;
                var l = 0;
                country4.forEach(function(item, index){

       $.simpleWeather({

          location: item,
          woeid: '',
          unit: 'f',
          success: function(weather) {
            console.log(item, weather.temp);
            sum3=sum3+parseInt(weather.temp);
            l++;
            if(l==10){
              d=sum3/10;
              console.log(d);
            }
           
          },
          error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
          }
        });
      



    });
                var sum4 = 0;
                var m = 0;
                    country5.forEach(function(item, index){

       $.simpleWeather({

          location: item,
          woeid: '',
          unit: 'f',
          success: function(weather) {
            console.log(item, weather.temp);
            sum4=sum4+parseInt(weather.temp);
            m++;
            if(m==10){
              e=sum4/10;
              cosnole.log(e);
            }
           
          },
          error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
          }
        });
      



    });
      
    

});
$("#btn2").click(function(){
      var chart = new CanvasJS.Chart("chartContainer", {
    title:{
      text: "Average Temperature v/s Countries"              
    },
    data: [              
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "column",
      dataPoints: [
        { label: "India",  y: a  },
        { label: "Australia", y: b  },
        { label: "NewZealanad", y: c  },
        { label: "Brazil",  y: d  },
        { label: "Germany",  y: e  }
      ]
    }
    ]
  });
  chart.render();
});