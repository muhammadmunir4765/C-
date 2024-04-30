
const getUser= () => fetch("https://jsonplaceholder.typeicode.com/users")
.then((apiresult)=>apiresult.json())
.then((data) => console.log("these are the users",data));

 getUser();

