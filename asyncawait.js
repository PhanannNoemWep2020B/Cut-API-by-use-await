const url = "http://jsonplaceholder.typicode.com/todos";
async function todos(){
    const response = await fetch(url);//promis [fullfill, pending, reject]
    const result = document.querySelector('table');
    const data = await response.json();
    await data.forEach(element => {
        result.innerHTML += 
        `
        <tr>
            <td>${element.userId}</td>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.completed}</td>
        </tr>        
        `;
    });
}
todos();