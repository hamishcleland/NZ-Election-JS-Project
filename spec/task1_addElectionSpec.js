/* global describe beforeEach Controller it expect Election */
describe('task1 adding Election', () => {
  
  describe('Election Properties', () => {
    let theElection
    beforeEach(() => {
      theElection = new Election('NZ Election', 2020)
    })

    it('should have a .name property', () => {
       expect(theElection.hasOwnProperty('name')).toBeTruthy()
    })

    it('should have a .year property', () => {
      expect(theElection.hasOwnProperty('year')).toBeTruthy()
    })
  })

  describe('values of Election from the setup method of Controller ', () => {
    var theElection
    beforeEach(() => {
      theElection = Controller.setup(electorateJSON)
    })

    it('should have the correct name', () => {
      expect(theElection.name).toBe('NZ Election')
    })

    it('should have the correct year', () => {
       expect(theElection.year).toBe(2017)
    })
  })
  
    describe('types of values of Election from the setup method of Controller ', () => {
      var theElection
      beforeEach(() => {
        theElection = Controller.setup(electorateJSON)
      })

      it('name should NOT have leading spaces', () => {
        expect(theElection.name[0]).not.toBe(' ')
      })
      
      it('name should NOT have trailing spaces', () => {
        expect(theElection.name[theElection.name.length-1]).not.toBe(' ')
      })


      it('year should be a number', () => {
         expect(typeof theElection.year).toBe('number')
      })
  })
})
