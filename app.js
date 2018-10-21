fetch('https://eeegor.github.io/html-5-elements/html-5-elements.json')
  .then(res => res.json())
  .then(elements => {
	console.log('elements', elements);
	var htmlString = '';
	elements.forEach(element => {
		htmlString += '<div>'
		htmlString += '<h2>' + element.name + '</h2>'
		htmlString += '<div>' + element.example + '</div>'
		htmlString += '</div>'
	});
	document.getElementById('app').innerHTML = htmlString;
  })