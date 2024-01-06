const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const beautify = require('js-beautify').js;

/**
 * 
 * @param {Object} languageMap 
 * @param {String} codeString 
 * @returns {String}
 */
export const processCode = (languageMap, codeString) => {
    // Formats and beautifies returned code
    let code = beautify(codeString, {
        indent_size: 4,
        space_in_empty_paren: true
    });

    const replacements = [];

    // Try statement handling potential errors
    try {
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

        /**
         * Processes for statement replacements
         * @param {Object} path Path of the AST being returned
         * @param {Object} language Gets specific language being used
         * @returns {Function} tokenExtractor
         */
        const processForStatement = (path, language) => {
            const forKeywordLength = 'for'.length
            return tokenExtractor(path.node.start, path.node.start + forKeywordLength, language.for);
        }

        /**
         * Processes variable declaration keywords
         * @param {Object} path Path of the AST being returned
         * @param {Object} language Gets specific language being used
         * @returns {Function} tokenExtractor
         */
        const processVariableDeclaration = (path, language) => {
            const declarationType = path.node.kind;
            // Gets start position of token
            const start = path.node.start;
            // Gets the end position of token
            const end = start + declarationType.length;

            return tokenExtractor(path.node.start, end, language[declarationType]);
        }

        /**
         * Processes variable declaration keywords
         * @param {Object} path Path of the AST being returned
         * @param {Object} language Gets specific language being used
         * @returns {Function} tokenExtractor
         */
        const processIfStatement = (path, language) => {
            const ifKeywordLength = 'if'.length;
            tokenExtractor(path.node.start, path.node.start + ifKeywordLength, language.if);

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
                    tokenExtractor(elseStart, elseStart + 4, language.else)
                }
            }
        }

        /**
         * Processes variable declaration keywords
         * @param {Object} path Path of the AST being returned
         * @param {Object} language Gets specific language being used
         * @returns {Function} tokenExtractor
         */
        const procesFunctionDeclaration = (path, language) => {
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

                tokenExtractor(functionKeywordStart, functionKeywordStart + functionKeywordLength, language.function);
                tokenExtractor(path.node.start, path.node.start + asyncKeywordLength, language.async);

            } else {
                // Logic if function is not async
                tokenExtractor(path.node.start, path.node.start + 'function'.length, language.function);
            }
        }

        /**
         * Processes unary expression operator keywords
         * @param {Object} path Path of the AST being returned
         * @param {Object} language Gets specific language being used
         * @returns {Function} tokenExtractor
         */
        const processUnaryExpr = (path, language) => {
            switch (path.node.operator) {
                case 'typeof': {
                    const typeofLength = 'typeof'.length;
                    tokenExtractor(path.node.start, path.node.start + typeofLength, language['typeof']);
                    break;
                }
                case 'void': {
                    const voidLength = 'void'.length;
                    tokenExtractor(path.node.start, path.node.start + voidLength, language['void']);
                    break;
                }
                case 'delete': {
                    const deleteLength = 'delete'.length;
                    tokenExtractor(path.node.start, path.node.start + deleteLength, language['delete']);
                    break;
                }
                default:
                    break;
            }
        }

        traverse(ast, {
            // Extracts for loop statement token "for"
            ForStatement(path) {
                processForStatement(path, languageMap);
            },

            // Extracts tokens from variable declarations
            VariableDeclaration(path) {
                processVariableDeclaration(path, languageMap)
            },

            // Extracts tokens from variable declarations
            IfStatement(path) {
                processIfStatement(path, languageMap)
            },

            // Extracts boolean values to replace
            BooleanLiteral(path) {
                tokenExtractor(path.node.start, path.node.end, languageMap[path.node.value])
            },

            // Extracts function keyword to replace, and takes into account async functions
            FunctionDeclaration(path) {
                procesFunctionDeclaration(path, languageMap)
            },

            // Extracts return keyword to replace
            ReturnStatement(path) {
                const returnKeywordLen = 'return'.length
                tokenExtractor(path.node.start, path.node.start + returnKeywordLen, languageMap.return)
            },

            // Extracts null keyword to replace
            NullLiteral(path) {
                const nullKeywordLen = 'null'.length;
                tokenExtractor(path.node.start, path.node.start + nullKeywordLen, languageMap.null);
            },

            // Gets each member expression to replace
            MemberExpression(path) {
                // This if check separates object properties and javascript keywords
                if (path.node.property.name in languageMap.memberExpressions) {
                    tokenExtractor(path.node.property.start, path.node.property.end, languageMap.memberExpressions[path.node.property.name]);
                }
            },

            // Replaces the term "switch" in a switch statement
            SwitchStatement(path) {
                const defaultKeywordLen = 'default'.length
                if (path.node.test === null) {
                    tokenExtractor(path.node.start, path.node.start + defaultKeywordLen)
                }
                tokenExtractor(path.node.start, path.node.start + 5, languageMap.switch);
            },

            // Replaces the term "case" in a switch statement
            SwitchCase(path) {
                const caseKeywordLen = 'case'.length
                tokenExtractor(path.node.start, path.node.start + caseKeywordLen, languageMap.case);
            },

            // Replaces the term "break" in a switch statement
            BreakStatement(path) {
                const breakKeywordLen = 'break'.length;
                tokenExtractor(path.node.start, path.node.start + breakKeywordLen, languageMap.break);
            },

            // Replaces the term "await" in an async function
            AwaitExpression(path) {
                const awaitKeywordLen = 'await'.length;
                tokenExtractor(path.node.start, path.node.start + awaitKeywordLen, languageMap.await);
            },

            // Replaces the term "try" in a try/catch block
            TryStatement(path) {
                const tryKeyWordLen = 'try'.length;
                tokenExtractor(path.node.start, path.node.start + tryKeyWordLen, languageMap.try);
            },

            // Replaces the term "catch" in a try/catch block
            CatchClause(path) {
                const catchKeywordLen = 'catch'.length;
                tokenExtractor(path.node.start, path.node.start + catchKeywordLen, languageMap.catch);
            },

            // Replaces the term "class" when initializing a class
            ClassDeclaration(path) {
                const classKeywordLen = 'class'.length;
                tokenExtractor(path.node.start, path.node.start + classKeywordLen, languageMap.class);
            },

            // Replaces the term "constructor" inside a class method
            ClassMethod(path) {
                tokenExtractor(path.node.start, path.node.start + path.node.kind.length, languageMap[path.node.kind])
            },

            // Replaces the term "continue" inside a for loop
            ContinueStatement(path) {
                const continueKeywordLen = 'continue'.length;
                tokenExtractor(path.node.start, path.node.start + continueKeywordLen, languageMap['continue'])
            },

            // Replaces the term "while" inside a while loop
            WhileStatement(path) {
                const whileKeywordLen = 'while'.length
                tokenExtractor(path.node.start, path.node.start + whileKeywordLen, languageMap['while'])
            },

            // Finds proper unary expression operators
            UnaryExpression(path) {
                processUnaryExpr(path, languageMap);
            },

            // Replaces for with "voor" in a "for in" statement
            ForInStatement(path) {
                const forKeywordLen = 'for'.length;
                tokenExtractor(path.node.start, path.node.start + forKeywordLen, languageMap['for']);
            },

            // Replaces for with "voor" in a "for of" statement
            ForOfStatement(path) {
                const forKeywordLen = 'for'.length;
                tokenExtractor(path.node.start, path.node.start + forKeywordLen, languageMap['for']);
                tokenExtractor(path.node.left.end + 1, path.node.right.start - 1, languageMap['of'])
            }

        });

        // Apply replacements in reverse order to the code
        // Sorting the replacements array in order of index positions to counteract issues 
        replacements.sort((a, b) => b.start - a.start).forEach(({ start, end, replacement }) => {
            // Replaces each keyword while, adding on the rest of the original code string
            code = code.substring(0, start) + replacement + code.substring(end);
        });

        return { success: true, code: code };
    } catch (error) {
        // Handle parsing errors
        console.error("Error parsing the code:", error);
        return { success: false, error: error.message };
    }
}