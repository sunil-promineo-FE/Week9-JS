const expect = chai.expect;
describe('testing the deck', () => {
it('deck should contain 52 cards', () => {
    
    let newDeck = new Deck()
    console.log("testing my deck this is what it looks like:", newDeck)
    expect(newDeck.cards.length).to.equal(52)
})

})