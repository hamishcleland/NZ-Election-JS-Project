class Controller { // eslint-disable-line no-unused-vars
  static setup (electorateJSON) {
    // *********** ELECTION 2017 ***************************************************************
    // data is from
    // https://www.electionresults.govt.nz/electionresults_2017/statistics/votes-by-voting-place-electorate-index.html
    // party color information from
    // https://en.wikipedia.org/wiki/Category:New_Zealand_political_party_colour_templates

    // var electorate = new Electorate('Christchurch Central', 2017)

    const electorateName = electorateJSON.electorate.name
    const electionYear = electorateJSON.electorate.year
    const electionName = 'NZ Election'
    const election = new Election(electionName, electionYear)
    election.addElectorate(electorateName)
    // ADD Parties and their total votes
    for (const aNewParty of electorateJSON.electorate.parties) {
      console.log(aNewParty)
      const newName = aNewParty.name
      const newColor = aNewParty.color
      const newVotes = aNewParty.votes
      console.log(newName, newColor, newVotes)
      election.addParty(newName, newColor, newVotes)
    }
    // ADD Candidates and their total votes
    for (const aNewCandidate of electorateJSON.electorate.candidates) {
      console.log(aNewCandidate)
      const newReferenceName = aNewCandidate.referenceName
      const newPersonalNames = aNewCandidate.personalNames
      const thePartyName = aNewCandidate.party
      const newVotes = aNewCandidate.votes
      console.log(newReferenceName, newPersonalNames, thePartyName, newVotes)
      const electorate = election.findElectorate(electorateName)
      const candName = `${newPersonalNames} ${newReferenceName}`
      electorate.addCandidate(candName, thePartyName)
      const theCandidate = electorate.findCandidate(candName)
      theCandidate.updateVotes(newVotes)
    }
    const theElectorate = election.findElectorate(electorateName)
    election.setWinningParty(electorateName, election.CalcPercentages(theElectorate))
    return election
  }
}
