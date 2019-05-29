class Stats {
    constructor() {
        this.wallet = document.querySelector('.wallet')
        this.games = document.querySelector('.games')
        this.wins = document.querySelector('.wins')
        this.losses = document.querySelector('.losses')
        this.gameCounter = 0
        this.stats = {
            wallet: `${walletValue}$`,
            games: 0,
            wins: 0,
            losses: 0,
        }
    }
    changeStats = (action, newWallet) => {
        const {
            games,
            wins,
            losses
        } = this.stats
        if (action === '+') {
            this.stats.wallet = `${newWallet}$`
            this.stats.games = games + 1
            this.stats.wins = wins + 1
        } else if (action === '-') {
            this.stats.wallet = `${newWallet}$`
            this.stats.games = games + 1
            this.stats.losses = losses + 1
        } else {
            return alert('Error: invalid type of action')
        }
    }
    showStats = () => {
        this.wallet.textContent = this.stats.wallet
        this.games.textContent = this.stats.games
        this.wins.textContent = this.stats.wins
        this.losses.textContent = this.stats.losses
    }
}