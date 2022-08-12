using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DanBuilds
{
    public class Tokenizer
    {
        private string _buffer;
        private int _cursor;

        public void Init(string buffer)
        {
            this._buffer = buffer;
            this._cursor = 0;
        }

        public bool HasMoreToken()
        {
            return this._cursor < this._buffer.Length;
        }

        public string Match(string pattern, string input)
        {
            var matched = Regex.Match(input, pattern);
            if (!matched.Success)
                return null;
            this._cursor += matched.Value.Length;
            return matched.Value;
        }
        
        public Ast<T> GetNextToken<T>()
        {
            if(!this.HasMoreToken())
            {
                return null;
            }

            var buffer = this._buffer.Slice(this._cursor);
            foreach(var spec in Specs)
            {
                var pattern = spec.Pattern;
                var tokenType = spec.TokenType;

            }
        }
    }
}
