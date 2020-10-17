const search = document.querySelector('#search');
const buy = document.querySelector('#products');
const erase = document.querySelector('#products');
const list = document.getElementById('buy-list');
const products = document.getElementById('products');
const price = document.getElementById('price');
var totalPrice = 0;

search.addEventListener('keyup', searchProduct);
buy.addEventListener('click', addProduct);
erase.addEventListener('click', hideProduct);


function searchProduct(e){
  var text = e.target.value.toLowerCase();

  var names = document.getElementsByClassName('description');
  for(let i=0; i<names.length; i++){
    var name = names[i].innerHTML.toLowerCase();
    if (name.indexOf(text) == -1){
      names[i].parentElement.style.display = 'none';
    } else {
      names[i].parentElement.style.display = 'flex';
    }
  }
}

function addProduct(e){
  if (e.target.parentElement.style.opacity == '1'){
    return;
  }
  e.target.parentElement.style.opacity = '1.0';
  
  // console.log(e.target.parentElement.previousElementSibling.innerText);

  var productName = e.target.parentElement.parentElement.id;

  if (e.target.classList.contains('fa-check-square')){
    if (productName == 'space-craft'){
      var newspace = document.createElement('li');
      newspace.setAttribute('id', 'spacecraft-li');
      var newspaceText = document.createTextNode('space shuttle');
      newspace.appendChild(newspaceText);
      list.appendChild(newspace);

      var tempPrice = e.target.parentElement.previousElementSibling.innerText;
      var tempPrice = tempPrice.slice(1, tempPrice.length);
      var tempArr = tempPrice.split(',');
      var tempNumb = '';
      for(let i=0; i<tempArr.length; i++){
        tempNumb += tempArr[i];
      }
      var totalPrice =+ parseInt(tempNumb);
      price.innerHTML = parseInt(price.innerHTML) + totalPrice;
    } else if(productName == 'building'){
      var newbuilding = document.createElement('li');
      newbuilding.setAttribute('id', 'building-li');
      var newbuildingText = document.createTextNode('skyscraper');
      newbuilding.appendChild(newbuildingText);
      list.appendChild(newbuilding);

      var tempPrice = e.target.parentElement.previousElementSibling.innerText;
      var tempPrice = tempPrice.slice(1, tempPrice.length);
      var tempArr = tempPrice.split(',');
      var tempNumb = '';
      for(let i=0; i<tempArr.length; i++){
        tempNumb += tempArr[i];
      }
      var totalPrice =+ parseInt(tempNumb);
      price.innerHTML = parseInt(price.innerHTML) + totalPrice;
    } else if(productName == 'satellite'){
      var newsatellite = document.createElement('li');
      newsatellite.id = 'satellite-li';
      var newsatelliteText = document.createTextNode('GPS satellite');
      newsatellite.appendChild(newsatelliteText);
      list.appendChild(newsatellite);

      var tempPrice = e.target.parentElement.previousElementSibling.innerText;
      var tempPrice = tempPrice.slice(1, tempPrice.length);
      var tempArr = tempPrice.split(',');
      var tempNumb = '';
      for(let i=0; i<tempArr.length; i++){
        tempNumb += tempArr[i];
      }
      var totalPrice =+ parseInt(tempNumb);
      price.innerHTML = parseInt(price.innerHTML) + totalPrice;
    } else if(productName == 'macbook'){
      var newmacbook = document.createElement('li');
      newmacbook.id = 'macbook-li';
      var newmacbookText = document.createTextNode('MacBook Pro');
      newmacbook.appendChild(newmacbookText);
      list.appendChild(newmacbook);

      var tempPrice = e.target.parentElement.previousElementSibling.innerText;
      var tempPrice = tempPrice.slice(1, tempPrice.length);
      var tempArr = tempPrice.split(',');
      var tempNumb = '';
      for(let i=0; i<tempArr.length; i++){
        tempNumb += tempArr[i];
      }
      var totalPrice =+ parseInt(tempNumb);
      price.innerHTML = parseInt(price.innerHTML) + totalPrice;
    } else if(productName == 'airplane'){
      var newairplane = document.createElement('li');
      newairplane.id = 'airplane-li';
      var newairplaneText = document.createTextNode('Air New Zealand');
      newairplane.appendChild(newairplaneText);
      list.appendChild(newairplane);

      var tempPrice = e.target.parentElement.previousElementSibling.innerText;
      var tempPrice = tempPrice.slice(1, tempPrice.length);
      var tempArr = tempPrice.split(',');
      var tempNumb = '';
      for(let i=0; i<tempArr.length; i++){
        tempNumb += tempArr[i];
      }
      var totalPrice =+ parseInt(tempNumb);
      price.innerHTML = parseInt(price.innerHTML) + totalPrice;
    } else if(productName == 'guitar'){
      var newguitar = document.createElement('li');
      newguitar.id = 'guitar-li';
      var newguitarText = document.createTextNode('electric guitar');
      newguitar.appendChild(newguitarText);
      list.appendChild(newguitar);

      var tempPrice = e.target.parentElement.previousElementSibling.innerText;
      var tempPrice = tempPrice.slice(1, tempPrice.length);
      var tempArr = tempPrice.split(',');
      var tempNumb = '';
      for(let i=0; i<tempArr.length; i++){
        tempNumb += tempArr[i];
      }
      var totalPrice =+ parseInt(tempNumb);
      price.innerHTML = parseInt(price.innerHTML) + totalPrice;
    }
  }
}

function hideProduct(e){
  if(e.target.classList.contains('fa-trash-alt')){
    var box = e.target.parentElement.parentElement;
    if(confirm(`delete ${e.target.parentElement.id}?`)){
      products.removeChild(box);
    }
  }
}