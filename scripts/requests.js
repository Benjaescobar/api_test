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
        email: "nombre5@email.com",
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

// GAME

async function getGames(){
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.text()
    });

    console.log(responseAll);
}

async function newGame(){
    const token = await getToken();
    const responseAll = await fetch("http://localhost:3000/api/games/new", {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function getGame(){
    const id = document.getElementById("game-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${id}`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.text()
    });

    console.log(responseAll);
}

async function joinGame(){
    const gameId = document.getElementById("game-join-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/join`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function startGame(){
    const gameId = document.getElementById("game-start-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/start`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function rollDice(){
    const gameId = document.getElementById("game-rolldice-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/roll_dice`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function endTurn(){
    const gameId = document.getElementById("game-endturn-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/end_turn`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function currentTurn(){
    const id = document.getElementById("game-currenturn-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${id}/current_turn`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.text()
    });

    console.log(responseAll);
}
