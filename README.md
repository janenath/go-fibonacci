# Fibonacci Sequence Generator
Simple fullstack web app for generating a sequence of fibonacci numbers of a user-specified length

Tech stack: 
   - go api backend
   - react frontend (bootstrapped with create-react-app)
   
### Screenshot:
<img src="https://i.imgur.com/AkJxPAI.png" alt="app screenshot" width="600px"/>

### Demo:
https://www.loom.com/share/1a60cfbcf0da4d7180be623d16b265d9


### Usage:
   - User types in a number 1-100 inclusive, and clicks "go!"
   - If user input does not meet specified criteria (integer between 1 and 100), error message is generated
   - Otherwise, sequence of fibonacci numbers of the length specified by user input is generated on backend and rendered on result page.
   

### Setup:
   - git clone https://github.com/janenath/go-fibonacci.git
   - cd go-fibonacci
   - go run main.go
   - cd fibonacci_frontend
   - npm start
   - go to http://localhost:3000/ in browser
