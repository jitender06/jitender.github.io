 //let input;

   //     input="no";

//       if(input === "1"){
//     document.write("continue");

// }else if(input === "y"){
//       document.write("continue");

// }else if(input === "yes"){
//     document.write("continue");

// }else if(input === 0){
//     document.write("end");

// }else if(input === "n"){
//     document.write("end");

// }else if(input === "no"){
//     document.write("end");

// }else{
//     document.write("wrong input");
// }

// switch (input) {
//     case 1:
//       case "y":
//       case "y":
//       case "yes":
//        document.write("continue"); 
//         break;
//      case 0:
//     case "n": 
// case "no":

//          document.write("no no nop"); 
// break;

//     default:
//          document.write("wrong input ba "); 

        
// } 
// document.write(" heyy");

//////////////loops


// let div1 = document.getElementById("div1");
// let elm = div1.getElementsByTagName("h2");
// for(let i=0; i < elm.length; i++){
//         elm[i].innerHTML = "changed";
// }

// let elm = document.querySelector("p#demo1");
// for(i = 0; i < elm.length; i++){
//         elm[i].innerHTML = "changed through queryselectorall
// }


// let elm = document.getElementById("intro");
// let node = elm.children;
// for(i = 0; i < node.length; i++ ){
//         node[i].innerHTML = "hellow";

// } 

// let list1 = document.getElementById("list");
// let item = document.createElement("li");
// item.textContent = "new list is added";
// list1.appendChild(item);

// let pos = list1.firstElementChild.nextElementSibling;

// list1.insertBefore(body, );


// let parent = document.body;
// let elm = document.createElement("h2");
// elm.textContent = "this is new element";
// let list = document.getElementById("list");
// parent.insertBefore(elm, list);

//remove child element

//let parent = document.getElementById("list");
//let elm = parent.firstElementChild.nextElementSibling;
// parent.removeChild(elm);
//document.body.removeChild(parent);


// clone 


// let menu = document.getElementById("list");

// let cloneElm = menu.cloneNode(true); // cloneNode(true);
// cloneElm.id = "mobilemenu"
// document.body.appendChild(cloneElm);

// replace element


// events..........................................
 

// function btnClick(){
//   alert("button was clicked");
// }

let btn = document.getElementById("btn");
btn.addEventListener('click', function(){
  alert("button was clicked");
});
