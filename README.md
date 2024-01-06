# Polyscript JS (WIP)
## Live Site: https://zakschenck.github.io/polyscript-js

![Alt text]([https://i.ibb.co/PzbKQZp/Screenshot-2024-01-02-at-11-51-02-AM.png](https://ibb.co/RgJZhKv))

## What is it?
In a world where English is the monopoly on programming languages, this is a helpful educational resource for people who do not speak English and want to understand the Javascript keywords with a quick translation. This heavily speeds up the process of using Google translator, and you can easily view each translated word in the Javascript language (currently only supporting Dutch).

## Tools Used
* Vue
* Babel
* Prism
* Modern Javascript
* SCSS/Sass
* Tippy

## Future Plans
Future Implementations include:
* Traversing the AST with better contexual knowledge
* More accurate translations
* More language support
* Backend allowing users to save code snippets (Most likely GO).

## Challenges & Complexities
### During this project I had to create several algorithms ESPECIALLY in my AST Traversal. 
#### Sorting and Replacement
This was one of the complexities to solve. This was for replacing the keywords with the code. Why did I do replacements in reverse order? When you make replacements in reverse order, this will not effect the indicies. Implementing this in ascending order makes the "start" and "end" indices invalid from what they originally were, causing a jumbled mess of what used to be your code.
```js
        // Apply replacements in reverse order to the code
        // Sorting the replacements array in order of index positions to counteract issues 
        replacements.sort((a, b) => b.start - a.start).forEach(({ start, end, replacement }) => {
            // Replaces each keyword while, adding on the rest of the original code string
            code = code.substring(0, start) + replacement + code.substring(end);
        });
```

