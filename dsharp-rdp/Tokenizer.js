class Tokenizer {
    init(string) {
        this._string = string;
        this._cursor = 0;
    }

    hasMoreTokens() {
        return this._cursor < this._string.length;
    }

    getNextToken() {
        if(!this.hasMoreTokens()) {
            return null;
        }

        const string = this._string.slice(this._cursor);

        // Numbers:
        if(!Number.isNaN(Number(string[0]))) {
            let number = '';
            while(this._cursor < this._string.length && !Number.isNaN(Number(string[this._cursor]))) {
                number += string[this._cursor++];
            }
            return {
                type: 'NUMBER',
                value: number,
            };
        }

        // String:
        if(string[0] === '"') {
            let s = '';
            do {
                s += string[this._cursor++];
            } while(string[this._cursor]!== '"' && !this.isEOF());
            s += string[this._cursor++]; // skip "
            return {
                type: 'STRING',
                value: s,
            };
        }

        return null;
    }

    isEOF() {
        return this._cursor === this._string.length;
    }
}

module.exports = {
    Tokenizer,
}