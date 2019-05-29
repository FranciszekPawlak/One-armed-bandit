class Wallet {
    constructor(cash) {
        this._cash = cash
        this.wallet = this._cash
    }
    getWalletValue = () => {
        return this.wallet
    }
    checkCanPlay = (bid) => {
        if (bid > this.wallet) {
            return false
        } else {
            return true
        }
    }
    changeWalletValue = (action, bid) => {
        if (action === '+') {
            this.wallet += bid * wonMultiplication
        } else if (action === '-') {
            this.wallet = this.wallet - bid
        } else {
            return alert('Operation error')
        }
    }
}