const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const beautify = require('js-beautify').js;
const { dutchKeywordMap } = require('./language-maps/dutch-maps');
const { spanishKeywordMap } = require('./language-maps/spanish-maps');

let codeString = `let myVariable = null; function myFunction() { if (javas === true) { return false } else if (java === false) { return 'true' } else { return 'hello' } }`;

const processCode = (languageMap) => {
    let code = beautify(codeString, {
        indent_size: 4,
        space_in_empty_paren: true
    });

    const replacements = [];

    const ast = parser.parse(code, { sourceType: 'module', plugins: ['jsx'] });

    /**
     * Extracts token keywords from the original code
     * @param {Number} start // Starting indice of token placement
     * @param {Number} end // Ending indice of token placement
     * @param {String} replacement // Token to replace with
     * @returns 
     */
    const tokenExtractor = (start, end, replacement) => {
        return replacements.push({ start, end, replacement })
    }

    traverse(ast, {
        enter(path) {
            // Extracts for loop statement token "for"
            if (path.isForStatement()) tokenExtractor(path.node.start, path.node.start + 'for'.length, languageMap.for);

            // Extracts tokens from variable declarations
            if (path.isVariableDeclaration()) {
                const declarationType = path.node.kind;
                // Gets start position of token
                const start = path.node.start;
                // Gets the end position of token
                const end = start + declarationType.length;

                tokenExtractor(path.node.start, end, languageMap[declarationType])
            }

            // Extracts tokens from variable declarations
            if (path.isIfStatement()) {
                tokenExtractor(path.node.start, path.node.start + 'if'.length, languageMap.if);

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
            }

            // Extracts boolean values to replace
            if (path.isBooleanLiteral()) tokenExtractor(path.node.start, path.node.end, languageMap[path.node.value]);

            // Extracts function keyword to replace
            if (path.isFunctionDeclaration()) tokenExtractor(path.node.start, path.node.start + 'function'.length, languageMap.function);

            // Extracts return keyword to replace
            if (path.isReturnStatement()) tokenExtractor(path.node.start, path.node.start + 'return'.length, languageMap.return);

            // Extracts null keyword to replace
            if (path.isNullLiteral()) tokenExtractor(path.node.start, path.node.start + 'null'.length, languageMap.null);
        }
    });

    // Apply replacements in reverse order to the code
    // Sorting the replacements array in order of index positions to counteract issues 
    replacements.sort((a, b) => b.start - a.start).forEach(({ start, end, replacement }) => {
        // Replaces each keyword while, adding on the rest of the original code string
        code = code.substring(0, start) + replacement + code.substring(end);
    });

    return code
}

console.log(processCode(spanishKeywordMap))
