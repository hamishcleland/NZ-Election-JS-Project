describe('task2 adding Party', () => {
	
  describe('addition types of values of Election from the setup method of Controller added iteration 2 ', () => {
    var theElection
    beforeEach(() => {
      theElection = new Election()
    })

    it('should have a party count', () => {
      expect(theElection.hasOwnProperty('partyCount')).toBeTruthy()
    })

    it('should have a party list', () => {
       expect(Array.isArray(theElection.allMyParties)).toBeTruthy()
    })
	
	it('check that allMyParties has length of 0', function(){
		const arraySize = theElection.allMyParties.length
		expect(arraySize).toBe(0)
	})
  })
  
    describe('checking the values of the parties after addition', () => {
      var theElection
      beforeEach(() => {
        theElection = Controller.setup(electorateJSON)
		aParty = theElection.allMyParties[0]
		bParty = theElection.allMyParties[1]
		cParty = theElection.allMyParties[8]
		dParty = theElection.allMyParties[11]
      })

      it('should have party count of 16', function() {
        const count = theElection.partyCount
		expect(count).toBe(16)
      })
      
      it('should have 16 entries in the allMyParties array', function() {
        const arraySize = theElection.allMyParties.length 
			expect(arraySize).toBe(16)
      })
	  
	  it('should have a Party in the allMyParties array', function() {
      const aParty = theElection.allMyParties[0] 
		expect(aParty instanceof Party).toBeTruthy()
		})
		
		it('should have a .name property', function() {
		expect(aParty.hasOwnProperty('name')).toBeTruthy()
		})
		
		it('should return the right string', function() {
      const output = aParty.toString()
	  expect(output).toBe("Labour Party")
		})
		
		it('should return the right table row', function() {
      const output = aParty.toTableRow()
	  expect(output).toBe('<tr><td class = "party_rows">Labour Party</td><td class = "party_rows">1</td><td class = "party_rows">43.92957337718874 %</td></tr>')
		})
		
		it('should have a .name of "Labour Party"', function() {
        var theValue = aParty.name
		expect(theValue).toBe("Labour Party")
      })

		it('should have a .name of National Party', function() {
        var theValue = bParty.name
		expect(theValue).toBe('National Party')
      }) 
		
		it('should have a .name of "Internet Party"', function() {
        var theValue = cParty.name
		expect(theValue).toBe('Internet Party')
      }) 
	  
	  it('should have a .name of "United Future"', function() {
        var theValue = dParty.name
		expect(theValue).toBe('United Future')
      }) 
	})
})
