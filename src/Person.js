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

	getFriendsFullNames() {
		return this.friendsList.map(friend => friend.fullName)
	}

	get fullName() {
		return `${ this.firstName } ${ this.lastName }`
	}
}
