
export function fetchData(){
  fetch('https://davidwalsh.name/demo/arsenal.json').then(function(response) { 
    return response.json();
  }).then(function(j) {
    console.log(j); 
  });
}