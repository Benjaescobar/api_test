
async function createUser(){
    dataSignUp = {
        email: "nombre@email.com",
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
        email: "nombre@email.com",
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