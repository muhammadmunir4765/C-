var cars=["hello","how","are","you"];
var bikes=["hond","alsot","suzu"];

        cars.push("no1");
        console.log("This is Popping: "+cars.pop());
        console.log("Prinitng cars arra: "+ cars);

        console.log("Shifting means removing first element and returning it: "+ cars.shift());
        console.log("printing array: "+cars);

        cars.unshift("amFirst");
        console.log("now unshift : "+cars);

        console.log(cars.concat(bikes));

        console.log(cars.slice(1,3));

        console.log(cars.splice(1,1,1,2,3));
        console.log(cars.indexOf("are"));
        console.log(cars.lastIndexOf("are"));
        console.log(cars);

        console.log();


    var human={
            name:"munir",
            age:23,
            gender:"male",
            profession:"student"
    }

        console.log(Object.keys(human));
        console.log(Object.values(human));
        console.log(Object.entries(human));

    var alien={}

        Object.assign(alien,human);
        console.log(Object.entries(alien));

        console.log(Object.getOwnPropertyNames(alien));

    var Animal={
            name:"Fish",
            age:23,
            gender:"male",
    }
    console.log(Object.freeze(human));
    console.log(Object.seal(human));

    







        