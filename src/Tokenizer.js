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
    if (!this.hasMoreTokens()) {
      return null
    }

    const string = this._string.slice(this._cursor);

    // Numbers:
    if (!Number.isNaN(Number(string[0]))) {
      let number = "";

      while (!Number.isNaN(Number(string[this._cursor]))) {
        number += string[this._cursor++];
      }

      return {
        type: "NUMBER",
        value: number,
      }
    }

    // Strings:
    if (string[0] === '"') {
      let chars = '';
      do {
        chars += string[this._cursor++];
      } while(string[this._cursor] !== '"' && !this.isEOF());
      chars += this._cursor++;
      return {
        type: "STRING",
        value: chars,
      }
    }

    return null;
  }
}

module.exports = {
  Tokenizer,
}