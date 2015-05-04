export default class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
		this.friendsList = []
	}

	friendsWith(...friends) {
		for (let friend of friends) {
			this.friendsList.push(friend)
		}
	}

	getFriends() {
		return [].slice.call(this.friendsList)
	}

	get fullName() {
		return `${ this.firstName } ${ this.lastName }`
	}

	set fullName(name) {
		let [ firstName, lastName ] = name.split(' ')
		this.firstName = firstName
		this.lastName = lastName
	}
}
