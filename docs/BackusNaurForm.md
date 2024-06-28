# Backus-Naur Form
> a notation to describe syntax and grammars of languages

```
Program
  : StatementList
  ;

Statement
  : BlockStatement
  | Iftatement
  | FunctionDeclaration
    ...
  ;

FunctionDeclaration
  : def Identifier ( Arguments ) BlockStatement
```

