class Candidate {
  constructor (newName, newParty, newVotes) {
    this.name = newName
    this.party = newParty
    this.votes = newVotes
  }

  updateVotes (newVotes) {
    this.votes = newVotes
  }

  toString () {
    return this.name + SPACE + this.party
  }

  toTableRow () {
    let result = '<tr>'
    result += `<td class = "party_rows">${this.name}</td>`
    result += `<td class = "party_rows">${this.party}</td>`
    result += `<td class = "party_rows">${this.votes}</td>`
    result += '</tr>'
    return result
  }
}
