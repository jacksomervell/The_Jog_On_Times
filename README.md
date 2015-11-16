# The New York Time Travels

## GA WDI London: 1-day Hackathon

![]()

### The Build

* HTML
* CSS
* JavaScript
* Node
* Express
* Angular
* UI-Router

### Approach taken

We spent a few minutes discussing ideas before deciding on a quiz game before using a whiteboard to sketch out how we could make it work. We decided to work on everything in pairs and I also volunteered to set up the Trello planning board.

We set up a backend api of our own to call the New York Times API and send the data to the frontend. This meant we didn't need a database and instead used LocalStorage to save user scores.

### How It Works

The landing page invites the user to enter their name before choosing a year between 1852 and 2015 along with a subject from a dropdown list. The instructions explain that there will be nine questions - headlines from the newspaper with one word removed.

When a user has typed in their best guess for the missing word, pressing submit returns the actual headline with the missing word in green if they got it right and red if it did not match.

At the end of the quiz, the user is shown their result and see it added to the high-scores table shown in the right sidebar.

### Challenges and Problems

The API returned nine headlines each time so that was the maximum we could use, while ten would have made more sense. We decided to remove all punctuation except apostrophes to make it as easy as possible for users to guess the right word.

### Future Plans

Deploy to Heroku so the working app can be used.

### Our Team

* [Jack Somervell](https://github.com/jacksomervell)
* [Joshua Swiss](https://github.com/jswiss)
* [Niall Wallace](http://github.com/croconiall)
