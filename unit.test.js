const expect = chai.expect;


describe('new Deck', function(){
    it('Deck should have 52 cards', function(){
        let testDeck = new Deck()
        expect(testDeck.cards.length).to.equal(52);
    });
});

describe('new Player', ()=> {
    it('Player object should start with points = 0, playerDeck = []', ()=>{
        let testPlayer = new Player('Test')
        expect(testPlayer).to.have.property('points').to.equal(0)
        expect(testPlayer).to.have.property('playerDeck').with.lengthOf(0)
    })
})


describe('shufflenDeal', ()=> {
    it('each playerDeck should have a 26 card deck', () => {
        const testGame = new Game();
expect(playerOne.playerDeck).to.have.lengthOf(26)
expect(playerTwo.playerDeck).to.have.lengthOf(26)
    } )
})

describe('shuffle', () => {
    it('should be in a non-random, sorted order', () => {
        
        const testDeckControl = new Deck()
        const testDeck = new Deck()
        expect(testDeck.cards[0].value).to.deep.equal(testDeckControl.cards[0].value)
        expect(testDeck.cards[26].value).to.deep.equal(testDeckControl.cards[26].value)
        expect(testDeck.cards[51].value).to.deep.equal(testDeckControl.cards[51].value)

        testDeck.shuffle()
        expect(testDeck.cards[0].value).to.not.equal(testDeckControl.cards[0].value)
        expect(testDeck.cards[26].value).to.not.equal(testDeckControl.cards[26].value)
        expect(testDeck.cards[51].value).to.not.equal(testDeckControl.cards[51].value)
    })
})

