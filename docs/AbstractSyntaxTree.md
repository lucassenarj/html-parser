# Abstract Syntax Tree
> String: "7 + 3 * 4"

```
{
  type: "BinaryExpression",
  operator: "+",
  left: {
    type: "NumericalLiteral",
    value: 7
  },
  right: {
    type: "BinaryExpression",
    operator: "*",
    left: {
      type: "NumericalLiteral",
      value: 3
    },
    right: {
      type: "NumericalLiteral",
      value: 4
    }
  }
}
```