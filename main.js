
var textDiv = document.createElement('div');
textDiv.className = "alert";
textDiv.innerHTML = "<strong>Ура!</strong> Это сообщение от скрипта.";


//--------------------------------------------------------------

function onload() {

  let topDiv = document.getElementById('mark');
  console.log(topDiv);
  console.log(textDiv);
  topDiv.appendChild(textDiv);

}
