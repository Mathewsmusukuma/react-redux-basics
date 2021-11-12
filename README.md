# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Test if redux is working
In the console, run this 

```
store.getState();
// output: {articles: Array(0)}
```
### State update
To  listen for state updates with subscribe with:

```
store.subscribe(() => console.log('Look I'm fired everytime, Redux!!'));
```

### To dispatch an action

To change the state in Redux we need to dispatch an action by calling the dispatch method, in this case we are dispatching an action that will add an article. 

```
store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners part 1', id: 1 }));

store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners part 2', id: 2 }));

store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners part 3', id: 3 }));

```

Chech the state again 

```
store.getState();
// output: {articles: Array(3)}
```

### To delete an article

```
store.dispatch(deleteArticle({id: 3 }));

```

Check the state again to see if the article was deleted

```
store.getState();
// output: {articles: Array(2)}
```

We can see the array has two articles now, so the article was deleted successfully!

