import Person from './Person'

let walter = new Person('Walter', 'White')
let jesse = new Person('Jesse', 'Pinkman')
let hank = new Person('Hank', 'Schrader')
let saul = new Person('Saul', 'Goodman')

walter.friendsWith(jesse)
walter.friendsWith(hank, saul)

for (let friend of walter.getFriends()) {
	console.log(`${ walter.firstName } friends with ${ friend.fullName }`)
}

walter.fullName = 'Mr. Heisenberg'

for (let friend of walter.getFriends()) {
	console.log(`${ walter.fullName } friends with ${ friend.fullName }`)
}

