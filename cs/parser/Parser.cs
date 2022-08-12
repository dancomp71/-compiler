using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DanBuilds
{
    public class Ast<T>
    {
        public string Type { get; set; }
        public T Value { get; set; }
    }

    public class Parser
    {
        private string _buffer;
        private Tokenizer _tokenizer;

        public Parser()
        {
            this._buffer = "";
            this._tokenizer = new Tokenizer();
        }

        public void Parse(string buffer)
        {
            this._buffer = buffer;
            this._tokenizer.Init(buffer);
            this._lookahead = this._tokenizer.GetNextToken();
            return this.Program();
        }

        public Ast<T> Program<T>()
        {
            return new Ast<T>
            {
                Type = "Program",
                Value = this.Literal()
            };
        }
    }
}
