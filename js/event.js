var events = [
  {'Date': new Date(2017, 4, 2), 'Title': 'Pani Puri Event was canceled at 3:25pm.'},
  {'Date': new Date(2017, 4, 6), 'Title': 'Loot 2 Movie at 7 in CNSB!', 'Link': 'https://garfield.com'},
  {'Date': new Date(2017, 4, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
