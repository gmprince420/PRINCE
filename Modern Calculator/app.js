let outputscreen = document.getElementById('screen');

function display(num){
  outputscreen.value += num;
}

function Calculator(){
  try{
    outputscreen.value = eval(outputscreen.value);
  }
  catch(err){
     alert("Invaild")
  }
}

function Clear(){
  outputscreen.value = "";
}

function DEL(){
  outputscreen.value = outputscreen.value.slice(0,-1);
}