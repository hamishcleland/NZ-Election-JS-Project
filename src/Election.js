class Election {
  constructor (newName, newYear) {
    this.name = newName
    this.year = newYear
    this.allMyParties = []
    this.allMyElectorates = []
    this.partyCount = 0
    this.electorateCount = 0
  }

  addParty (newName, newColour, newVotes) {
    const aNewParty = new Party(newName, newColour, newVotes)
    this.allMyParties.push(aNewParty)
    this.partyCount += 1
  }

  addElectorate (newName, newWinner) {
    const aNewElectorate = new Electorate(newName, newWinner)
    this.allMyElectorates.push(aNewElectorate)
    this.electorateCount += 1
  }

  findElectorate (targetElectorateName) {
    let foundElectorate, aElectorate
    for (aElectorate of this.allMyElectorates) {
      if (aElectorate.name === targetElectorateName) {
        foundElectorate = aElectorate
        break
      }
    }
    return foundElectorate
  }

  findParty (targetPartyName) {
    let foundParty, aParty
    for (aParty of this.allMyParties) {
      if (aParty.name === targetPartyName) {
        foundParty = aParty
        break
      }
    }
    return foundParty
  }

  setWinningParty (targetElectorateName, partyName) {
    const foundElectorate = this.findElectorate(targetElectorateName)
    const foundParty = this.findParty(partyName)
    foundElectorate.winner = foundParty.name
    foundParty.countElectorate(foundElectorate)
    foundParty.electoratesWonCount += 1
    // find the party - DONE

    // tell the party about the electorate - DONE

    // tell the electorate about the party - to complete in future iteration
  }

  setVotePercent (targetPartyName, newVotePercent) {
    const foundParty = this.findParty(targetPartyName)
    foundParty.setVotePercent(newVotePercent)

    // find the party

    // pass the vote to the party
  }

  sortParties () {
    this.allMyParties.sort(function (a, b) {
      if (a.votePercent < b.votePercent) {
        return 1
      }
      if (a.votePercent > b.votePercent) {
        return -1
      }
      if (a.votePercent === b.votePercent) {
        return 0
      } else { return null }
    })
  }

  CalcPercentages (theElectorate) {
    let totalVotes = 0
    for (const aParty of this.allMyParties) {
      totalVotes += aParty.votes
    }
    for (const aParty of this.allMyParties) {
      aParty.votePercent = (aParty.votes / totalVotes) * 100
    }
    this.sortParties()
    theElectorate.sortCandidates()
    const winningCandidate = theElectorate.allMyCandidates[0]
    return winningCandidate.party
  }

  getPartiesAsHtmlTable () {
    let result = '<table border="1px" align="center">'
    result += '<tr><th>Party</th><th>Vote Percentage</th></tr>'
    for (const aParty of this.allMyParties) {
      result += aParty.asHtmlTable()
    }
    result += '</table>'
    return result
  }

  getChartData (aPartyOrCandidateArray) {
    const dataArray = []
    const colorArray = []
    const labelsArray = []
    for (const aPartyOrCandidate of aPartyOrCandidateArray) {
      const aPartyOrCandidateData = aPartyOrCandidate.asChartData()
      dataArray.push(aPartyOrCandidateData[0])
      colorArray.push(aPartyOrCandidateData[1])
      labelsArray.push(aPartyOrCandidateData[2])
    }
    return [dataArray, colorArray, labelsArray]
  }

  getPartyVoteData () {
    return this.getChartData(this.allMyParties)
  }

  getCandidateVoteData () {
    return this.getChartData(this.allMyCandidates)
  }

  toString () {
    return this.name + SPACE + this.year
  }

  toTable () {
    const aElectorateName = this.findElectorate('Christchurch Central')
    aElectorateName.sortCandidates()
    let result = `<div class="table-responsive-sm"><table class="table"><tr class="election_header" scope="row"><th scope="col-2" colspan="2">${this.name}</th> <th scope="col">${this.year}</th></tr>`
    result += '<tr class="axis_title"><th scope="col">Party Name</th> <th scope="col">Seats</th> <th>Percentage of the Vote</th></tr>'
    for (const aParty of this.allMyParties) {
      aParty.votePercent = aParty.votePercent.toFixed(2)
      result += aParty.toTableRow()
    }
    result += '<tr class="axis_title" scope="row"><th scope="col" colspan="2">Electorate</th> <th scope="col">Winning Party</th></tr>'
    for (const aElectorate of this.allMyElectorates) {
      result += aElectorate.toTableRow()
    }
    result += `<tr class="election_header"><th colspan="3">${aElectorateName.name}</th></tr>`
    result += '<tr class="axis_title" scope="row"><th scope="col">Candidate Name</th> <th>Party Name</th> <th scope="col">Votes</th></tr>'

    for (const aCandidate of aElectorateName.allMyCandidates) {
      result += aCandidate.toTableRow()
    }
    result += '</table></div>'
    return result
  }
}
