const myArr=[0,1,2,3,4,5]
    const newArr=myArr.join()
    console.log(newArr);
    console.log(typeof newArr);
    

    console.log("A ",myArr);

    const myn1=myArr.slice(1,3)
    console.log(myn1);
    console.log("B ",myArr);

    const myn2=myArr.splice(1,3)
    console.log("C ",myArr);
    console.log(myn2);
