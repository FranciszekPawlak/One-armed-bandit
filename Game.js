const walletValue = 200
const wonMultiplication = 3
class Game {
    constructor() {
        document.querySelector('button').addEventListener('click', this.startGame)
        this.bid = document.querySelector('input');
        this.resultTxt = document.querySelector('.result')
        this.wallet = new Wallet(walletValue)
        this.stats = new Stats()
        this.cardsColors = []
    }

    gameResult = () => {
        const colors = ['pink', 'orange', 'purple', 'blue']
        const result = []
        for (let i = 0; i < 3; i++) {
            const color = Math.floor(Math.random() * 4)
            result.push(colors[color])
        }
        this.cardsColors = result
        if (result[0] === result[1] && result[1] === result[2]) {
            return '+'
        } else {
            return '-'
        }
    }

    render = (colors = ['grey', 'grey', 'grey']) => {
        const cards = [...document.querySelectorAll('.colors div')]
        cards.forEach((card, index) => card.className = colors[index])
        this.stats.showStats()
    }

    startGame = e => {
        const bid = this.bid.value
        e.preventDefault()
        if (!bid) {
            return alert('Enter the amount of the bet')
        }
        if (this.wallet.checkCanPlay(bid)) {
            const result = this.gameResult()
            this.wallet.changeWalletValue(result, bid)
            this.stats.changeStats(result, this.wallet.getWalletValue())
            if (result === '+') {
                this.resultTxt.textContent = `You won ${bid * wonMultiplication}$`
            } else {
                this.resultTxt.textContent = `You lost ${bid}$`
            }
            this.render(this.cardsColors)
            this.bid.value = ''
        } else {
            this.bid.value = ''
            return alert('You do not have enough money in your wallet')
        }
    }
}