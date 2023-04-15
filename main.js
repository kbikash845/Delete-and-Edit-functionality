var form=document.getElementById("addform");
var itemlist=document.getElementById("items");

 ///----form sumbit event

 form.addEventListener("submit",additem);

 /// delele event
  itemlist.addEventListener("click",removeitem)


 function additem(e){
   e.preventDefault();
//    console.log(1)


   // get input value
   var newitem=document.getElementById("item").value;
   //// ctreate new li element

   var li=document.createElement("li");
   li.className="list-group-item";
//    console.log(li)

   ///  add text node with input
   li.appendChild(document.createTextNode(newitem))

   /// create delete  element==
   var deletebtn=document.createElement("button");
   deletebtn.className="btn btn-danger btn-sm float-right delete";

   deletebtn.appendChild(document.createTextNode("x"))

   li.appendChild(deletebtn); 


   itemlist.appendChild(li)


   ////-- create edit buttom
   var editbtn=document.createElement("Button");
   editbtn.className= "btn btn-danger btn-sm float-right edit mr-2";
   editbtn.appendChild(document.createTextNode("Edit"));
   li.appendChild(editbtn);
   itemlist.appendChild(li)

 }


  function removeitem(e){
//    console.log(1)
  if(e.target.classList.contains("delete")){
      if(confirm("Are u sure")){
         var li=e.target.parentElement;
         itemlist.removeChild(li);
      }
  }
  }