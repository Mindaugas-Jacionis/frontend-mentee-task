# Frontend mentee task

This is a Task for my mentees to simply check the level of knowledge & provide starting point.

> Note: To clone this repository you will need [GIT-LFS](https://git-lfs.github.com/)

## Few simple steps

1. Fork this repo
2. Do your best
3. Prepare a pull request and let me know that you are done(ping me via email, facebook, twitter or simply in the PR)

## Few simple requirements
### Design
* Design should be recreated as closely as possible.
* Design must be responsive.
* It is not mandatory, but recommended to use a CSS pre-processor (SASS, LESS, etc.) or preferably CSS-in-JS library (recommended: [styled-components](https://www.npmjs.com/package/styled-components))

### App
* Use ReactJS
* This must be a single page application. Use Router solution for frontend routing(recommended: [react-router-dom](https://www.npmjs.com/package/react-router-dom))
* Implement login by sending an authorization request (`POST`) to http://playground.tesonet.lt/v1/tokens to generate a token (don't forget to pass Content-Type):

```
{"username": "tesonet", "password": "partyanimal"}
```

* Save the newly-created token to the local storage(you can use vaniulla js solution or any js package that you prefer)
* Use the token to retrieve the server list from http://playground.tesonet.lt/v1/servers , order the results by `distance` and `name`.
* Implement logout

### Miscellaneous
* Your app must work on all modern browsers and IE11+
* Use npm scripts or gulp for running tasks
* Tests are not mandatory, but prefered. Use a unit testing library (Jest preferred)
* Do not commit the build (you never put `build` or `node_modules` to git)

## Few tips
* Structure! A LOT OF LOVE FOR STRUCTURE!
* Maybe You have an idea how it should interact with users? Or any other improvements that in your opinion fit here? Do it! Its on you!
* Have fun!
