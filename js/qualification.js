var qualList;
var displayedList;

function getData(type){
    //let apiurl = 'http://ec2-54-152-83-102.compute-1.amazonaws.com:50001/api/parts';
    let apiurl = 'http://ec2-54-152-83-102.compute-1.amazonaws.com:50001/api/parts';
    switch(type){
        case 'all':
            break;
        case 'qualified':
            break;
            apiurl = apiurl+'/accepted/true';
        case 'ignored':
            apiurl = apiurl+'/accepted/false';
            break;
    }

    fetch(apiurl)
    .then((resp) => resp.json())
    .then(function(data){
        qualList=data;
        updateDisplay(data);
    })
}

function updateDisplay(list){
    var table = document.getElementById('qitemstable');
    while (table.firstchild) {
        table.firstChild.remove();
    }
    list.map(function(part){
        let row = document.createElement('tr');
        let checkbox  = document.createElement('td'),
            item      = document.createElement('td'),
            brand     = document.createElement('td'),
            id        = document.createElement('td'),
            price     = document.createElement('td'),
            listprice = document.createElement('td');
        
        checkbox.innerHTML = '<input class="checkbox" type="checkbox">';

        item.innerHTML      = part.Description;
        brand.innerHTML     = part.BrandName;
        id.innerHTML        = part.ProductId;
        price.innerHTML     = part.Price;
        listprice.innerHTML = part.ListPrice;
        
        row.appendChild(checkbox);
        row.appendChild(item);
        row.appendChild(brand);
        row.appendChild(id);
        row.appendChild(price);
        row.appendChild(listprice);

        table.appendChild(row);
    });
    displayedList=list;
}

var $filterableRows = $('qitemstable').find('tr').not(':first'),
        $inputs = $('.search-key');

$inputs.on('input', function() {

    $filterableRows.hide().filter(function() {
    return $(this).find('td').filter(function() {
        
      var tdText = $(this).text().toLowerCase(),
            inputValue = $('#' + $(this).data('input')).val().toLowerCase();
    
        return tdText.indexOf(inputValue) != -1;
    
    }).length == $(this).find('td').length;
  }).show();

});

function checkAll(source){
    boxes = document.getElementsByClassName("checkbox");
    for(var i = 0, n = boxes.length; i < n; i++){
        boxes[i].checked = source.checked;
    }
}
