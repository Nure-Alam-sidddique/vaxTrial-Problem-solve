// console.log("hello Bangladesh");
const arrayObject=[
    {name: "sunil", age: 21, temperature: 98},
    {name: "Biplap", age: 22, temperature: 98},
    {name: "Rahul", age: 37, temperature: 99},
    {name: "Kabir", age: 36, temperature: 99},
    {name: "Kat", age: 41, temperature: 98},
    {name: "Paul", age: 42, temperature: 98},
    {name: "Sabnaj", age: 51, temperature: 101},
    {name: "Nayem", age: 50, temperature: 100}
];

function vaxTrail(ArrObject){
    const A = [];
    const B = [];
    const C= [];
    const D = [];
   arrayObject.map(singlePerson=>{
        if(singlePerson.age <= 30 && singlePerson.age>=20 && singlePerson.temperature <100 ){
           let resultA =[singlePerson]; 
            return A.push(...resultA);
        }
        else if(singlePerson.age <40 && singlePerson.age>=31  && singlePerson.temperature <100){ 
            let resultB= [singlePerson];
            return B.push(...resultB);
        }
        else if(singlePerson.age <50 && singlePerson.age>=41  && singlePerson.temperature <100){ 
            let resultC= [singlePerson];
            return C.push(...resultC);
        }
        else if(singlePerson.age>=50  && singlePerson.temperature >=100){ 
            let resultD= [singlePerson];
            return D.push(...resultD);
        }
})

Sorting(A);
Sorting(B);
Sorting(C);
Sorting(D);
 return{
     A:[...A],
     B:[...B],
     C: [...C],
     D:[...D]
 }
}

function Sorting(Value){
    Value.sort((a,b)=>{
    if(a.age%2===0){
        return -1;
    }
    if(b.age%2===1){
        return 1;
    }
    return 0;
})
}
console.log(vaxTrail(arrayObject));