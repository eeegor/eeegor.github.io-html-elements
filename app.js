fetch('https://eeegor.github.io/html-5-elements/html-5-elements.json')
  .then(res => res.json())
  .then(json => {
    console.log('JSON', json);
  })