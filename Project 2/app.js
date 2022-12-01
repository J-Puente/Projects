let data = [
    {
      name: 'Dean',
      age: '26'
    },
    {
      name: 'Sam',
      age: '22'
    },
    {
      name: 'John',
      age: '52'
    },
    {
      name: 'Bobby',
      age: '62'
    },
    {
      name: 'Castiel',
      age: '49'
    },
    {
      name: 'Adam',
      age: '32'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
  });
  
  info.innerHTML = details.join('\n');