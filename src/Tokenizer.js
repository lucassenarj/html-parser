/**
 * Tokenizer Spec
 */
const Spec = [
  // -------------------------------
  // Whitespace:
  [/^\s+/, null],

  // -------------------------------
  // Comments:

  // Skip single-line comments:
  [/^\/\/.*/, null],

  // Skip multi-line comments:
  [/^\/\*[\s\S]*?\*\//, null],

  // -------------------------------
  // Numbers:
  [/^\d+/, "NUMBER"],
  
  // -------------------------------
  // Strings:
  [/^"[^"]*"/, "STRING"],
  [/^'[^']*'/, "STRING"],
  
];

/**
 * Tokenizer class.
 * 
 * Lazily pulls a token form a stream.
 * Work as a State Machine -> Infinite Automat
 */
class Tokenizer {
  /**
   * Initializes the string
   */
  init(string) {
    this._string = string;
    this._cursor = 0;
  }

  /**
   * Whether the tokeziner reach the end of file.
   */
  isEOF() {
    // check if end of the string, if the cursor is equal to the length of the string
    return this._cursor === this._string.length;
  }

  /**
   * Whether we sstill have more tokens.
   */
  hasMoreTokens() {
    return this._cursor < this._string.length;
  }

  /**
   * Obtains next token
   */
  getNextToken() {
    console.log("getNextToken(): ");
    if (!this.hasMoreTokens()) {
      return null;
    }

    const string = this._string.slice(this._cursor);
    
    for (const [regexp, tokenType] of Spec) {
      const tokenValue = this._match(regexp, string);

      if (tokenValue == null) {
        continue;
      }

      // Should skip token, e.g. whitepace.
      if (tokenType === null) {
        return this.getNextToken();
      }

      return {
        type: tokenType,
        value: tokenValue,
      };
    }

    throw new SyntaxError(`Unexpected token: "${string[0]}"`);
  }

  /**
   * Matches a token for a regular expression.
   */
  _match(regexp, string) {
    let token = regexp.exec(string);

    if (!token) {
      return null; 
    }

    this._cursor += token[0].length;

    return token[0];
  }
}

module.exports = {
  Tokenizer,
}