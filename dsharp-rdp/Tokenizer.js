const Spec = [
    // whitespace
    [/^\s+/, null],
    
    // numbers
    [/^\d+/, 'NUMBER'],
    
    //comments
    [/^\/\/.*/, null],
    [/^\/\*[\s\S]*?\*\//, null],

    // strings
    [/^"[^"]*"/, 'STRING'],
    [/^'[^']*'/, 'STRING'],
];


class Tokenizer {
    init(string) {
        this._string = string;
        this._cursor = 0;
    }

    hasMoreTokens() {
        return this._cursor < this._string.length;
    }

    _match(regexp, string) {
        const matched = regexp.exec(string);
        if(matched == null) {
            return null;
        }
        this._cursor += matched[0].length;
        return matched[0];
    }

    getNextToken() {
        if(!this.hasMoreTokens()) {
            return null;
        }

        const string = this._string.slice(this._cursor);
        for(const [regexp, tokenType] of Spec) {
            const tokenValue = this._match(regexp, string);
            
            if (tokenValue == null)  {
                continue;
            }

            if(tokenType == null) {
                // whitespace
                return this.getNextToken();
            }

            return {
                type: tokenType,
                value: tokenValue
            };
        }

        throw new SyntaxError(`Unexpected token: "${string[0]}"`);
    }

    isEOF() {
        return this._cursor === this._string.length;
    }
}

module.exports = {
    Tokenizer,
}