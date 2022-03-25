document.querySelector("#btn").addEventListener("click", async function () {

    // fetch a la API
    const response = await fetch("https://randomuser.me/api/");

    // parseamos la respuesta de JSON a objects

    const person = await response.json();

    console.log(person.results[0]);

    // Obtener el email
    const email = person.results[0].email;
    document.getElementById("email").innerHTML = email;

    const name = person.results[0].name.first;
    document.getElementById("first").innerHTML = name;

    const last = person.results[0].name.last;
    document.getElementById("last").innerHTML = last;

    const country = person.results[0].location.country;
    document.getElementById("country").innerHTML = country;

    const phone = person.results[0].phone;
    document.getElementById("phone").innerHTML = phone;
    
    const picture = person.results[0].picture.thumbnail;
    document.getElementById("photo").src = picture;
   
})

   