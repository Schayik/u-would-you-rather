# Would You Rather

Udacity React course project by Pim van Schayik

## The Application

Would You Rather is a simple application where people can post and answer simple
questions starting with 'Would you rather ...' followed by two options.
### Homepage
Shows a list of all questions, the user can toggle between the questions he/she has
answered or still has to answer. Clicking view full will direct to that question's page.
### Question
This page either shows the answers to be chosen from which can than be submitted, or
the results and statistics of the question, depending on if the user answered the question.
### New Question
Here, the user can create a new question by filling in both options and then submit it.
### Leaderboard
This page shows how many questions each user had made and how much questions each user has
answered. The users are sorted by adding those two numbers.

## Development

### to start development
* install all project dependencies with `npm install`
* start the development server with `npm start`

### technologies used
* NodeJS & ReactJS: Required for a standard React app.
* React Router: For navigation between pages and compatibility with the web browser.
* Redux: For clear data storage and reduce the amount of passed props.
* Redux-thunk: For async data requests
