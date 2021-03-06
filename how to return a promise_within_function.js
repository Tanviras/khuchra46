const loadUser=()=>{
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {return json})
}

loadUser().then(response => console.log(response))

//what's the use of this lesson? we used this in loginManager