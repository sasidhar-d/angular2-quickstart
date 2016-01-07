## Build and Deployment

In this part of the Hero project, we introduce a build and deployment step in order to facilitate the use of modules. We need a way to be able to compile es6 features into es5 features, which we do using babel. Then in order to handle the require('') commands, we introduce browserify which combines all of our required modules into one file called bundle.js. Then we switch index.html to use the /dist directory instead of the /app directory

## TODO

Things that could be included but have not yet been translated include, Annotations for components, and source stream for better debug and understanding.