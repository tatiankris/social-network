


function logPerson () {
    console.log(`Person ${this.name} , ${this.age}, ${this.job}`)

}

function bind (person, func) {

    const name = person.name
    const age = person.name
    const job = person.name
    func();
}
 const person1 = {name:'DD' ,age:'12', job:'eee'}
 const person2 = {name:'LL' ,age:'23', job:'aaa'}

bind (person1, logPerson);
bind (person2, logPerson);