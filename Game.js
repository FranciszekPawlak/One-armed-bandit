const walletValue = 200

class Game {
    constructor() {
        document.querySelector('button').addEventListener('click', this.startGame)
        this.bid = document.querySelector('input');
        this.wallet = new Wallet(walletValue)

    }

    gameResult = () => {
        const colors = ['pink', 'orange', 'purple', 'blue']
        const result = []
        for (let i = 0; i < 3; i++) {
            const color = Math.floor(Math.random() * 4)
            result.push(colors[color])
        }
        this.render(result)
        if (result[0] === result[1] && result[1] === result[2]) {
            return '+'
        } else {
            return '-'
        }
    }

    render = (colors) => {
        const cards = [...document.querySelectorAll('.colors div')]
        cards.forEach((card, index) => card.className = colors[index])
    }

    startGame = e => {
        e.preventDefault()

        const stats = new Stats()
        if (!this.bid.value) {
            return alert('Enter the amount of the bet')
        }
        if (this.wallet.checkCanPlay(this.bid.value)) {
            this.wallet.changeWalletValue(this.gameResult(), this.bid.value)
            this.bid.value = ''
        } else {
            return alert('You do not have enough money in your wallet')
        }


    }
}