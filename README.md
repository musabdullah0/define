# managerly application app
This React app gets definitions for a word using the Oxford Dictionary API. 

## how to run code
The app is hosted by heroku at [here](https://nameless-brushlands-25087.herokuapp.com/). If you want to run the app locally then
1. clone this repository
2. cd to the define folder
3. run `npm start`

## issues

This API does not allow my front end to directly access it and sends a `Access-Control-Allow-Origin` header in its response if I attempt to, most likely for security reasons. I bypassed this by setting up a NodeJS [CORS-proxy]('https://stark-hollows-46944.herokuapp.com/') which adds CORS headers to the proxied request.

## questions

How long did you spend on the challenge?
- I spent about 3-4 hours on this project, mostly on the CORS issue

What did you learn in this project?
- I learned some NodeJS, about CORS headers, and some basic networking

What do you like about your implementation?
- I like the minimalism of my implementation

What you would change if you were going to do it again?
- I would probably use a simpler API.

How did you make your design decisions?
- I just thought of exactly what I would have wanted in a dictionary app and tried to replicate that as much as possible. In that way, I stripped as much extra functionality from the app as possible. Regarding the structure of the React app, I just thought all of these components didn't have sophisticated enough states to warrant classes, so I kept all of them functional. Using hooks like useState also just makes life a lot simpler and code a lot more legible.


