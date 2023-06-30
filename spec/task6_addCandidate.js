describe('task 6 adding a candidate and setting their vote', () => {
	
  describe('task 6 adding a candidate and setting their vote', () => {
    var theElection
    beforeEach(() => {
      theElection = new Election()
	  theElection.addElectorate('Christchurch Central')
      const theElectorate = theElection.findElectorate('Christchurch Central')
      theElectorate.addCandidate('GASKIN, Ian Camden', 'United Future')
      theElectorate.addCandidate('HILL, Douglas MacMillan', 'The Opportunities Party (TOP)')
      theElectorate.addCandidate('RICHARDSON, Peter Ian', 'Green Party')
      theElectorate.addCandidate('ROBINSON, Philip John', 'New Zealand First Party')
      theElectorate.addCandidate('HERBERT-SHUFFLEBOTHAM, Janine Anne', 'Aotearoa Legalise Cannabis Party')
      theElectorate.addCandidate('WAGNER, Nicola Joanne', 'National Party')
      theElectorate.addCandidate('WEBB, Duncan Alexander', 'Labour Party')
      theElectorate.setCandidateVote('GASKIN, Ian Camden', 80)
      theElectorate.setCandidateVote('HILL, Douglas MacMillan', 879)
      theElectorate.setCandidateVote('RICHARDSON, Peter Ian', 1957)
      theElectorate.setCandidateVote('ROBINSON, Philip John', 1091)
      theElectorate.setCandidateVote('HERBERT-SHUFFLEBOTHAM, Janine Anne', 304)
      theElectorate.setCandidateVote('WAGNER, Nicola Joanne', 13760)
      theElectorate.setCandidateVote('WEBB, Duncan Alexander', 16631)
      aCandidate = theElectorate.findCandidate('GASKIN, Ian Camden')
      bCandidate = theElectorate.findCandidate('HILL, Douglas MacMillan')
      cCandidate = theElectorate.findCandidate('RICHARDSON, Peter Ian')
    })
	
	it('aCandidate should be GASKIN, Ian Camden', () => {
        expect(aCandidate.name).toBe('GASKIN, Ian Camden')
      })
	  
      it('bCandidate should be HILL, Douglas MacMillan', () => {
        expect(bCandidate.name).toBe('HILL, Douglas MacMillan')
      })

      it('cCandidate should be RICHARDSON, Peter Ian', () => {
        expect(cCandidate.name).toBe('RICHARDSON, Peter Ian')
      })

      it('aCandidate vote should be 80', () => {
        expect(aCandidate.votes).toBe(80)
      })

      it('bCandidate vote should be 879', () => {
        expect(bCandidate.votes).toBe(879)
      })

      it('cCandidate vote should be 1957', () => {
        expect(cCandidate.votes).toBe(1957)
      })
  })
	})

