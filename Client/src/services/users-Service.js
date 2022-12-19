function UserService(data) {
  
    fetch('http://localhost:8000/api/users/userRegester',  {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => {
            console.log('success user add ');
            response.json()})
        .then(values => {
            console.log(values,'error user not add')})

}
export default UserService;

export function UserloginService(data) {
  
    fetch('http://localhost:8000/api/users/logIn',  {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => {
            console.log('success user logged in ');
            response.json()})
        .then(values => {
            console.log(values,'error user not logged in')})

}


