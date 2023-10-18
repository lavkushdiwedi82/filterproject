var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click',removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);


// add item
function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    //Create del btn Delete 
    var deleteBtn = document.createElement('button');

    //add class to del button

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //Append button to li btn
    li.appendChild(deleteBtn);
    
    //Append li to list
    itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are you sure ?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
 }
}

//filter Items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();

    //Get list by 

   var items = itemList.getElementsByTagName('li');

   // convert to an array
   Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
});
}

