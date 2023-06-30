describe('task3a adding electorates', () => {
	
  describe('addition types of values of Election from the setup method of Controller added for the add electorate function ', () => {
    var theElection
    beforeEach(() => {
      theElection = new Election()
    })

    it('should have a electorate count', () => {
      expect(theElection.hasOwnProperty('electorateCount')).toBeTruthy()
    })

    it('should have an electorate list', () => {
       expect(Array.isArray(theElection.allMyElectorates)).toBeTruthy()
    })
	
	it('check that allMyElectorates has length of 0', function(){
		const arraySize = theElection.allMyElectorates.length
		expect(arraySize).toBe(0)
	})
  })
  
  describe('task3b adding Electorate', () => {
    describe('Electorate Properties', () => {
      let theElectorate
      beforeEach(() => {
        theElectorate = new Electorate('Christchurch Central', 'New Zealand Labour Party')
      })

      it('should have a .name property', () => {
        expect(theElectorate.hasOwnProperty('name')).toBeTruthy()
      })

      it('should have a .winner property', () => {
        expect(theElectorate.hasOwnProperty('winner')).toBeTruthy()
      })
    })

    describe('values of Electorate from the setup method of Controller ', () => {
      var theElectorate
      beforeEach(() => {
        theElection = Controller.setup(electorateJSON)
		aElectorate = theElection.allMyElectorates[0]
		bElectorate = theElection.allMyElectorates[1]
		cElectorate = theElection.allMyElectorates[8]
		dElectorate = theElection.allMyElectorates[17]
      })

      it('should have electorate count of 1', function() {
        const count = theElection.electorateCount
		expect(count).toBe(1)
      })
	  
	  it('should have one entry in the allMyElectorates array', function() {
        const arraySize = theElection.allMyElectorates.length 
			expect(arraySize).toBe(1)
      })
	  
	  it('should have an electorate in the allMyElectorates array', function() {
      const aElectorate = theElection.allMyElectorates[0] 
		expect(aElectorate instanceof Electorate).toBeTruthy()
		})
	  
	  it('should have the correct name', () => {
        expect(aElectorate.name).toBe('Christchurch Central')
      })

      it('should have the correct winner', () => {
        expect(aElectorate.winner).toBe('Labour Party')
      })

      it('name should NOT have leading spaces', () => {
        expect(aElectorate.name).not.toBe(' ')
      })

      it('name should NOT have trailing spaces', () => {
        expect(aElectorate.name[aElectorate.name.length-1]).not.toBe(' ')
      })

      it('year should be a number', () => {
        expect(typeof aElectorate.name).toBe('string')
      })
    })
    })
})
