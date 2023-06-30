class Electorate {
  constructor (newName, newWinner) {
    this.name = newName
    this.winner = newWinner
    this.allMyCandidates = []
    this.allMyParties = []
  }

  addCandidate (newName, newParty) {
    const aNewCandidate = new Candidate(newName, newParty)
    const aNewParty = new Party(newName)
    this.allMyCandidates.push(aNewCandidate)
    this.allMyParties.push(aNewParty)
  }

  findCandidate (targetCandidateName) {
    let foundCandidate, aCandidate
    for (aCandidate of this.allMyCandidates) {
      if (aCandidate.name === targetCandidateName) {
        foundCandidate = aCandidate
        break
      }
    }
    return foundCandidate
  }

  setCandidateVote (newName, newVotePercent) {
    const foundCandidate = this.findCandidate(newName)
    foundCandidate.votes = newVotePercent
  }

  sortCandidates () {
    this.allMyCandidates.sort(function (a, b) {
      if (a.votes < b.votes) {
        return 1
      }
      if (a.votes > b.votes) {
        return -1
      }
      if (a.votes === b.votes) {
        return 0
      } else { return null }
    })
  }

  toString () {
    return `${this.name}, ${this.winner}`
  }

  toTableRow () {
    let result = '<tr scope="row">'
    result += `<td colspan="2" class = "electorate_rows">${this.name}</td>`
    result += `<td class = "electorate_rows">${this.winner}</td>`
    result += '</tr>'
    return result
  }
}
