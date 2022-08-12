namespace DanBuilds
{
    public static class Specs
    {
        public static Spec[] Create()
        {
            return new Spec[]
            {
                new Spec() { Pattern = @"^\s+", TokenType = null },
                new Spec() { Pattern = @"^\d+", TokenType = "NUMBER" },
                new Spec() { Pattern = @"^\/\/.*", TokenType = null },
                new Spec() { Pattern = @"^\/\*[\s\S]*?\*\/", TokenType = null },
                new Spec() { Pattern = "\"([^\"]*)\"", TokenType = "STRING" },
                new Spec() { Pattern = @"^'[^']*'", TokenType = "STRING" },
            };
        }
    }
}
