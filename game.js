var name = prompt("Enter your name :");
var random=[];
var pattern=[];
var colorCode=["green","red","yellow","blue"]
var rnd =Math.floor(Math.random()*4);
var tile=colorCode[rnd];
  random.push(tile);
$("body").focus();
  $("div #"+tile).fadeOut(500).fadeIn(500);

$("div .btn ").click( function (){
  record(this.id);

});
$("body").keypress( function (event){
  switch (event.key) {
    case "w":
        var press="green";
      break;
      case "a":
          var press="red";
        break;
        case "s":
            var press="yellow";
          break;
          case "d":
              var press="blue";
            break;
  }
  record(press);
});

function record(press){
  $("div #"+press).fadeOut(500).fadeIn(500);

  pattern.push(press);
  console.log(pattern);
var audio = new Audio ("sounds/"+press+".mp3");
audio.play();

}
