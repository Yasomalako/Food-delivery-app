const GET_USERS = 'http://localhost:8000/api/users/getUsers'
const ADD_USER = 'http://localhost:8000/api/users/userRegester'
const LOGIN_USER = 'http://localhost:8000/api/users/logIn'

// const {OPTIONS = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify()
// }}

 async function UserService(user) {

   await fetch(ADD_USER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log('success user add ');
            return response.json(user)
        })
        .then(values => {
            console.log(values, 'error user not add')
        })

}
export default UserService;

export function UserloginService(user) {

    fetch(LOGIN_USER,  {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log('success user logged in ');
            return response.json(user)
        })
        .then(values => {
            console.log(values, 'error user not logged in')
        })

}
export async function GetUserS() {

    try {
        return await fetch(GET_USERS)
            .then((res) => { return res.json() })
            .then(result => { return result })
    } catch (error) {
        console.log(error);
    }
}


