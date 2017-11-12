var $filterableRows = $('#MI6').find('tr').not(':first'),
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


function toggle(source) {
  checkboxes = document.getElementsByName('foo');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}



