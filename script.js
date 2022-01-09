function kick(){
  let text = document.getElementById("inter").value;
  if (text == "歐西里斯") {
    window.alert("答對了");
    window.location.href="002/002-1.html";
  } 
  else {
    window.alert("答錯了\n給你一個提示:3124");
  }
}
