# Hello World with React boilerplate

Start coding a react application

> If you are working locally instead of using codespaces or gitpod, please follow [local installation steps](#local-installation-skip-if-you-are-working-on-codespaces-or-gitpod) and come back to this part of the readme.

## How to start coding?

- Install the packages with `$ npm install`.
- Run the webpack server with `$ npm run start`

You can update the `styles/index.css` or `js/index.js` depending on your needs.
Add more files into your, `./src/js/components` or styles folder as you need them.

## Local Installation (skip if you are working on codespaces or gitpod)

Download the boilerplate using git

```
$ git clone https://github.com/4GeeksAcademy/react-hello.git
$ cd react-hello
```

## Publish your website!

This boilerplate is 100% compatible with the free [github pages](https://pages.github.com/) and [vercel](https://vercel.com/) hosting.

It takes just 2 minutes to deploy, [click here to start the process](https://github.com/4GeeksAcademy/react-hello/blob/master/docs/DEPLOY.md).

## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).

### Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school github page](https://github.com/4geeksacademy/).


The code defines a functional component named `Todo` that returns some JSX code representing the UI for the To-Do List application. The `Todo` component has three state variables declared using the `useState` hook:

- `task`: a string variable that represents the value of the input field where the user enters new tasks.
- `displayx`: a boolean variable that determines whether the 'X' icon should be displayed or hidden for each task in the list.
- `newTodo`: an array of objects that represents the list of tasks.

The `Todo` component uses the `useEffect` hook to make an API call to fetch the initial list of tasks from the server. When the component mounts, the `getTodo` function is called, which fetches the list of tasks from the server and updates the `newTodo` state variable.

The `Todo` component defines several functions to manipulate the state of the application:

- `removeTask`: a function that removes a task from the list when the user clicks the 'X' icon. It takes an index parameter and filters out the task at that index from the `newTodo` array.
- `addTodo`: a function that adds a new task to the list when the user hits the Enter key while typing in the input field. It takes an event parameter and creates a new array of tasks by spreading the existing `newTodo` array and adding the new task to it. It then makes a PUT request to the server to update the list of tasks and calls `getTodo` to update the state variable `newTodo` with the new list of tasks.

The `Todo` component renders a form input element where the user can enter new tasks. It also renders an unordered list element that displays the list of tasks. For each task, it renders a list item element that displays the task label and an 'X' icon that allows the user to remove the task from the list. Finally, it displays a message indicating the number of tasks remaining in the list.