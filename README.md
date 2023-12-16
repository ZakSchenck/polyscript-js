# PolyScript (WIP)

## What is this?
This is a potential huge educational resource for people learning Javascript who are not English speakers. I traverse the vanilla Javascript AST of a code snippet, then spit out a translated copy from a multitude of languages. This only effects keywords, and will NOT translate strings.

## Example Inputs and Outputs
### Spanish:
#### Input
```
let myVariable = null; function myFunction() { if (javas === true) { return false } else if (java === false) { return 'true' } else { return 'hello' } }
```
#### Output
```
permitir myVariable = nulo;

función myFunction() {
    si (javas === verdadero) {
        retorno falso
    } sino si (java === falso) {
        retorno 'true'
    } sino {
        retorno 'hello'
    }
}
```

### Dutch:
#### Input
```
let variable = 'string true'; for (let i = 0; i < array.length; i++) { if (variable === true) { variable = false } }
```

#### Output
```
laat variable = 'string true';
voor (laat i = 0; i < array.lengte; i++) {
    als (variable === waar) {
        variable = onwaar
    }
}
```

## Challenges
One of the challenges was dealing with certain keywords not explicitly being inside of the AST, so I had to work around extracting the else keyword in this example. I extracted else using babel's consequent, and alternate start and end. This extracts the certain area where else lies. This problem occurs a lot, with different nuances I then had to replace that value:
```js
                if (path.node.alternate) {
                    // These get the end of the consequent and start of alternate. This achieves the else guaranteed in between these statements
                    const consequentEnd = path.node.consequent.end;
                    const alternateStart = path.node.alternate.start;

                    // Source code that lies in between each start and end
                    const betweenConsequentAndAlternate = code.substring(consequentEnd, alternateStart);

                    // Finds the else keyword in the code snippet
                    const elseIndex = betweenConsequentAndAlternate.indexOf('else');

                    // Quick check to see if else exists
                    if (elseIndex !== -1) {
                        const elseStart = consequentEnd + elseIndex;
                        // Finally replacing the extracted else
                        tokenExtractor(elseStart, elseStart + 4, languageMap.else)
                    }
                }
```
