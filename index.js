const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const beautify = require('js-beautify').js;
const { dutchKeywordMap } = require('./language-maps/dutch-maps');
const { spanishKeywordMap } = require('./language-maps/spanish-maps');
const { isMemberExpression } = require('@babel/types');

let codeString = `
async   function   myFunction (res) {
    const vari = await data
}
`;

// Beutifies Javascript code
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
            if (path.isForStatement()) {
                const forKeywordLength = 'for'.length
                tokenExtractor(path.node.start, path.node.start + forKeywordLength, languageMap.for);
            }

            // Extracts tokens from variable declarations
            if (path.isVariableDeclaration()) {
                const declarationType = path.node.kind;
                // Gets start position of token
                const start = path.node.start;
                // Gets the end position of token
                const end = start + declarationType.length;

                tokenExtractor(path.node.start, end, languageMap[declarationType]);
            }

            // Extracts tokens from variable declarations
            if (path.isIfStatement()) {
                const ifKeywordLength = 'if'.length;
                tokenExtractor(path.node.start, path.node.start + ifKeywordLength, languageMap.if);

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

            // Extracts function keyword to replace, and takes into account async functions
            if (path.isFunctionDeclaration()) {
                // Handles keyword logic if the declaration is an async function
                if (path.node.async) {
                    let asyncKeywordLength = 'async'.length;
                    // Calculates start position of 'function' keyword
                    let functionKeywordStart = path.node.start + asyncKeywordLength;

                    const functionKeywordLength = 'function'.length;

                    // Takes into account whitespace between async keyword and function
                    const betweenAsyncAndFunction = codeString.slice(path.node.start, path.node.start + functionKeywordStart);
                    const whitespaceLength = betweenAsyncAndFunction.match(/\s+/)[0].length;

                    functionKeywordStart += whitespaceLength;

                    tokenExtractor(functionKeywordStart, functionKeywordStart + functionKeywordLength, languageMap.function);
                    tokenExtractor(path.node.start, path.node.start + asyncKeywordLength, languageMap.async);

                } else {
                    // Logic if function is not async
                    tokenExtractor(path.node.start, path.node.start + 'function'.length, languageMap.function);
                }
            }

            // Extracts return keyword to replace
            if (path.isReturnStatement()) tokenExtractor(path.node.start, path.node.start + 'return'.length, languageMap.return);
            
            // Extracts null keyword to replace
            if (path.isNullLiteral()) tokenExtractor(path.node.start, path.node.start + 'null'.length, languageMap.null);

            // Gets each member expression to replace
            if (path.isMemberExpression()) {
                tokenExtractor(path.node.property.start, path.node.property.end, languageMap.memberExpressions[path.node.property.name]);
            }

            // Replaces the term "switch" in a switch statement
            if (path.isSwitchStatement()) tokenExtractor(path.node.start, path.node.start + 5, languageMap.switch);

            // Replaces the term "case" in a switch statement
            if (path.isSwitchCase()) tokenExtractor(path.node.start, path.node.start + 4, languageMap.case);

            // Replaces the term "break" in a switch statement
            if (path.isBreakStatement()) tokenExtractor(path.node.start, path.node.start + 5, languageMap.break);

            // Replaces the term "await" in an async function
            if (path.isAwaitExpression()) tokenExtractor(path.node.start, path.node.start + 5, languageMap.await);
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

console.log(processCode(dutchKeywordMap))
