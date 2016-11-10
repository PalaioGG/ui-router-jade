# ui-router-jade
A working example for UI-Router and Jade.

Angular-UI-Router can only accept .html pages in it's states so when you are passing in the state's templateUrl something like: "directory/somepage.jade", ui-router gives you back only text. One way to "fix" this is to make a call to the server so you can GET the rendered page.

I guess it's a noob problem but I thought to share it so it's available in the future as it can be usefull for scaffolding.

Instructions

1. Install node.js
2. Open node.js command line and navigate to the project directory
3. Run `npm install` to install the dependencies
4. Run the server with `node server.js`
5. Open your browser and navigate to "localhost:3000"
