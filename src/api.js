// {getEmployees, deleteEmployee}

const SERVER_URL = "http://localhost:3001"

export async function getEmployees() {
    return fetch(SERVER_URL).then(response => response.json())
}

export async function addEmployee(employee) {

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    }

    return fetch(SERVER_URL, options).then(response => response.json())
}

export function deleteEmployee(id) {

    const options = {
        method: "DELETE"
    }

    return fetch(SERVER_URL + "/" + id, options)
}


