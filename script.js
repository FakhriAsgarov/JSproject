let userInput=document.querySelector('input')
let maker=document.querySelector('.list-maker')
let btn=document.querySelector('button')
let list=document.querySelector('ul')
function remover(e){
 e.target.parentElement.remove(); 
 if(list.children.length==0){
    console.log(list.children.length);
    list.style.borderBottom='none'
    maker.style.borderBottomLeftRadius='10px'
    maker.style.borderBottomRightRadius='10px'
 }
 else if(list.children.length<=4){
    list.style.overflowY='hidden'
    
 }
}

function adder(){

    let newLi=document.createElement('li');
    let newSpan=document.createElement('span');
    newSpan.addEventListener('click', remover)
    let newList=document.createElement('input');
    newSpan.innerHTML='x';
    newSpan.classList.add('remove');
    newLi.appendChild(newList)
    newLi.appendChild(newSpan);
    list.appendChild(newLi);
    list.insertBefore(newLi,list.children[0])
    newList.value=userInput.value;
    list.style.border='1px solid gray';
    maker.style.borderBottomLeftRadius=0
    maker.style.borderBottomRightRadius=0
    userInput.value="";
  if(list.children.length>4){
    list.style.overflowY='scroll'
  }

}




btn.addEventListener('click',adder)

let tag=document.querySelectorAll('i');
tag[0].addEventListener('click', sortList)
tag[1].addEventListener('click', sortList)


function sortList() {
  var  lists, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    lists = list.children
    for (i = 0; i < (lists.length - 1); i++) {

      shouldSwitch = false;
   
      x = lists[i].querySelector("input");
      y = lists[i + 1].querySelector("input");

      if (dir == "asc") {
        tag[0].style.display='none'
          tag[1].style.display='block'
        if (x.value.toLowerCase() > y.value.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        tag[1].style.display='none'
          tag[0].style.display='block'
        if (x.value.toLowerCase() < y.value.toLowerCase()) {
 
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
     
      lists[i].parentNode.insertBefore(lists[i + 1], lists[i]);
      switching = true;

      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}