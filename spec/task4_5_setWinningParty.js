describe('tasks 4 and 5 setting a winning party in an election and the vote percentage', () => {
	
  describe(' tasks 4 and 5 setting a winning party in an election and the vote percentage', () => {
    var theElection
    beforeEach(() => {
      theElection = new Election()
	  theElection.addElectorate('Auckland Central')
      theElection.addElectorate('Banks Peninsula')
      theElection.addElectorate('Bay of Plenty')
	  theElection.addParty('Green Party')
	  theElection.addParty('Labour Party')
	  theElection.addParty('National Party')
	  theElection.setWinningParty('Auckland Central', 'Green Party')
	  theElection.setWinningParty('Banks Peninsula', 'Labour Party')
      theElection.setWinningParty('Bay of Plenty', 'National Party')
	  aElectorate = theElection.findElectorate('Auckland Central')
	  bElectorate = theElection.findElectorate('Banks Peninsula')
	  cElectorate = theElection.findElectorate('Bay of Plenty')
	  theElection.setVotePercent('Green Party', 7.6)
      theElection.setVotePercent('Labour Party', 49.1)
      theElection.setVotePercent('National Party', 26.8)
	  aParty = theElection.findParty('Green Party')
	  bParty = theElection.findParty('Labour Party')
	  cParty = theElection.findParty('National Party')
    })
	
	it('.winner should have updated to correct winner - Green Party', () => {
        expect(aElectorate.winner).toBe('Green Party')
      })
	  
	it('.winner should have updated to correct winner - National Party', () => {
        expect(aElectorate.winner).toBe('Green Party')
      })
	  
	it('.winner should have updated to correct winner - Labour Party', () => {
        expect(aElectorate.winner).toBe('Green Party')
      })
	  
	it('Correct vote percentage for Green Party', () => {
        expect(aParty.votePercent).toBe(7.6)
      })
	  
	it('Correct vote percentage for Labour Party', () => {
        expect(bParty.votePercent).toBe(49.1)
      })
	  
	it('Correct vote percentage for National Party', () => {
        expect(cParty.votePercent).toBe(26.8)
      })
	  
	
  })
	})

