
function init( arr, n ) {

	const ul = document.createElement('ul');
  
  for (let i = 0; i < arr.length; i += 1) {
  	const el = arr[i];
    
    for (let j = 0; j < n; j += 1) {

    		const li = document.createElement('li');

        li.className = el.className;
        
/*         for (const key in el.attributes) {
          li.setAttribute(key, el.attributes[key]);
        } */
        
        const keys = Object.keys(el.attributes);
        
        for (let l = 0; l < keys.length; l += 1) {

        	const key = keys[l];

          li.setAttribute(key, el.attributes[key]);
        }
        
        li.appendChild(document.createTextNode(el.content));
        
        ul.appendChild(li);
    }
  }
  
  document.body.appendChild(ul);
}

/* init([
  { className: 'a1', attributes: { 'data-name': 'MyName', 'data-age': '43' }, content: '123' },
  { className: 'a2', attributes: {}, content: '122456' }
], 2); */

function listen() {

	const b = document.getElementsByTagName('button')[0];
  
  b.addEventListener('click', function () {

  	const ul = document.querySelector('ul');
    
    if (ul) {
    	
    	document.body.removeChild(ul);
      
      return true;
    }
    
    return false;
  });
}

/* listen(); */




// function init ( arrObj, n ) {

// 	let ul = document.createElement('ul');

// 	document.body.appendChild(ul);

// 	for (i = 0; i < n; i++) {

// 		let li = document.createElement('li');

// 		ul.appendChild(li);

// 		li.className = arrObj.className;

// 		for (key in arrObj.attributes) {

// 			li.setAttribute(key, arrObj.attributes[key])
// 		}
// 		li.innerHTML = arrObj.content;
// 	}
// }

// function listen() {

// 	const btn = document.getElementsByTagName("button");

// 	btn.addEventListener('click', function() {

// 		let ul = document.querySelector('ul');

// 		if (ul) {

// 			document.body.removeChild(ul);

// 			return true;

// 		} else {

// 			return false;
// 		}
// 	});
// }