import Person from './Person'

let walter = new Person('Walter', 'White')
let jesse = new Person('Jesse', 'Pinkman')
let hank = new Person('Hank', 'Schrader')
let saul = new Person('Saul', 'Goodman')

walter.friendsWith(jesse)
walter.friendsWith(hank, saul)

for (let name of walter.getFriendsFullNames()) {
	console.log(`${ walter.fullName } friends with ${ name }`)
}

