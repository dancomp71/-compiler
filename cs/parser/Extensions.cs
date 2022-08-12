using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DanBuilds
{
    public static partial class Extensions
    {
        public static string Slice(this string buffer, int start)
        {
            return buffer.Substring(start);
        }

        public static string Slice(this string buffer, int start, int end)
        {
            return buffer.Substring(start, end);
        }
    }
}
