(function () {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        #face;
        #suit;
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;

        }

        get face() {
            return this.#face;
        }

        set face(face) {
            if (!validFaces.find(x => x === face)) {
                throw new Error();
            }

            this.#face = face;
        }

        get suit() {
            return this.#suit;
        }

        set suit(suit) {
            if (suit !== '♣' && suit !== '♠' && suit != '♥' && suit !== '♦') {
                throw new Error();
            }

            this.#suit = suit;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
}())