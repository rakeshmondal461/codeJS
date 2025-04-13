const arr = [
    { name: "Rakesh", dept: "Development", desg: "Full stack Developer" },
    { name: "Alex", dept: "Development", desg: "Web Developer" },
    { name: "Chris", dept: "Development", desg: "Back end Developer" }
]

const nob = { name: "Rakesh", dept: "Development", desg: "Full stack Developer" }

for(let x in nob){
    console.log(nob[x])
}

for(let person of arr){
    console.log(person)
}