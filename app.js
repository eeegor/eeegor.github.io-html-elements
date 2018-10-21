fetch('https://eeegor.github.io/html-5-elements/html-5-elements.json')
  .then(res => res.json())
  .then(elements => {
	var htmlString = '';
	elements.forEach(element => {
		displayInline = element.display === 'inline';
		htmlString += '<div class="el-preview">'
		htmlString += 	'<h2 class="el-preview__name">' + element.name + '</h2>'
		htmlString += 	'<p class="el-preview__details">' + (element.details ? element.details : 'Details coming soon...') + '</p>'
		if (element.example) {
			htmlString += 	'<div class="el-preview__example ' + (displayInline ? 'el--inline' : '') +'">' + element.example + '</div>'
		} else {
			htmlString += '<p>This Element has no example</p>'
		}
		htmlString += '</div>'
	});
	document.getElementById('styleguide__element-list').innerHTML = htmlString;
  })