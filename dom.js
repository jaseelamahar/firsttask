//examine the document object//
//console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent="Hello";
console.log(document.forms);
console.log(document.links);

//GET ELEMENT BY ID//
console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById("header-title");
var header=document.getElementById('main-header');
console.log('header-title');
//headerTitle.textContent="Hello";
//headerTitle.innerText="Goodbye"
//console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.innerHTML='<h3>Hello</h3>'
header.style.borderBottom='solid 3px #000'

const element=document.querySelector('.title');
element.style.color='green';
element.style.fontWeight='bold';



