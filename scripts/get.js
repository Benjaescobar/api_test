// USER

async function createUser(){
    dataSignUp = {
        email: "nombre6@email.com",
        password: "123456",
        firstName: "nombre",
        lastName: "apellido"
    }

    const userCreated = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataSignUp)
        }).then(respuesta => {
            console.log(respuesta.statusText)
            
            return respuesta.json()
        });  
}

async function getToken(){
    dataLogIn = {
        email: "nombre6@email.com",
        password: "123456"
    }

    const tokenCreated = await fetch("http://localhost:3000/api/sessions", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataLogIn)
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });
    console.log(tokenCreated);

    return tokenCreated
}

async function getUser(){
    const id = document.getElementById("user-id").value;
    const responseAll = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "GET"
    }).then(respuesta => {
        return respuesta.json()
    }).then(respuestaJSON => {
        console.log(respuestaJSON);
    })
}

// GETS

async function getGame(){
    const id = document.getElementById("user-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${id}`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.json()
    }).then(respuestaJSON => {
        console.log(respuestaJSON);
    })
}

async function getPirates(){
    const pirateId = document.getElementById("pirate-id").value;
    const token = await getToken();
    const gameId = document.getElementById("game-pirate-id").value;
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/pirates/`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.json()
    }).then(respuestaJSON => {
        console.log(respuestaJSON);
    })
}