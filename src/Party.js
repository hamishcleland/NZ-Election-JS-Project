class Party {
  constructor (newName, newColour, newVotes) {
    this.name = newName
    this.colour = newColour
    this.votes = newVotes
    this.votePercent = 0
    this.allMyElectoratesWon = []
    this.electoratesWonCount = 0
  }

  updateVotes (newVotes) {
    this.votes = newVotes
  }

  countElectorate (theElectorate) {
    this.allMyElectoratesWon.push(theElectorate)
  }

  setVotePercent (newVotePercent) {
    this.votePercent = newVotePercent
  }

  asHtmlTable () {
    return `<tr><td>${this.name}</td><td align="right">${this.votePercent}</td></tr>`
  }

  asChartData () {
    return [this.votePercent, this.colour, this.name]
  }

  toString () {
    return this.name
  }

  toTableRow () {
    let result = '<tr>'
    result += `<td class = "party_rows">${this.name}</td>`
    result += `<td class = "party_rows">${this.electoratesWonCount}</td>`
    result += `<td class = "party_rows">${this.votePercent} %</td>`
    result += '</tr>'
    return result
  }
}
