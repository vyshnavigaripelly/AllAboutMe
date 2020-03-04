# All About Me :muscle: [![Build Status](https://travis-ci.org/FAC-11/AllAboutMe.svg?branch=master)](https://travis-ci.org/FAC-11/AllAboutMe) [![codecov](https://codecov.io/gh/FAC-11/AllAboutMe/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC-11/AllAboutMe)

_*\
_*Continued for 2 more sprints as a Graduate Project*_ [Link here](https://allaboutme-af.herokuapp.com/)
_*
<img src="https://i.imgur.com/emJvg9x.jpg" width="600">

## Summary :pencil:

All About Me is a mobile-first web application which allows young people at the
Anna Freud centre to answer questions about their mental health and send their
answers to their mental heath workers.

## Challenge :warning:

Patients at [The Anna Freud Centre](http://www.annafreud.org/) were tired of
being asked the same questions every time their clinician changed or when they
went to a new centre. They wrote up the most commonly asked questions into one
questionnaire which they could give to their clinicians, however it was still
paper-based, papers often get lost and they found themselves again in a
distressing place where they would have to repeat answers to personal questions.

## Solution :bulb:

All About Me allows patients to answer the questionnaire online in their own
time, save their answers, and update their details as needed. When they're ready
they can send their form to their clinician.

## How?

**Design Sprint** :art: (See a detailed process
[here](https://github.com/FAC-11/AllAboutMe/blob/master/designsprint.md))

* [x] Ideation

* [x] Prototyping

* [x] User Testing

_*The outcome of our design sprint was a prototype designed in Figma:*_

![figma designs](https://i.imgur.com/Cg6iIlb.png)

_*And our database design:*_

![schema diagram](schema.png)

**Build Sprint :wrench:**

* Sprint Planning

* Build!

* Frequent discussion of priorities and user testing results with PO

_*See the outcome below!*_

### User Stories :books:

In order to create a realistic MVP we focused on specific user stories we wanted
to achieve.

#### Sprint 1

_*"As a user I want to be able to...:"*_

* [x] Login securely
* [x] Sign up to the app
* [ ] Change the colour scheme of the whole app
* [x] Answer the questionnaire
* [x] Send answers to questions
* [x] Edit answers once saved
* [x] See my progress within the questionnaire via a progress bar
* [ ] See completed/incomplete sections on screen
* [ ] Access the app offline
* [x] Be able to use the form on mobile and desktop
* [x] See ideas to help with answering some questions
* [x] Enjoy using the app!

#### Sprint 2

* [ ] Use the app offline (PWA) - no longer considered a priority
* [x] Change the colour scheme of the whole app
* [x] My data is safe and secure
* [x] Add 'Forgotten your password?' functionality
* [x] More tests to prevent unexpected errors
* [x] Navigate the app easily
* [x] Send a copy of the form to myself

#### Sprint 3

* [x] Draw my answers - feature is almost ready but is not yet tested or
      integrated with the rest of the app
* [x] Be able to hide my answers
* [x] Better styling on mobile
* [x] Fix colour change bug
* [x] See sensible error pages/messages when something goes wrong
* [x] Include any additional information I feel is relevant
* [ ] Autosave answers - moved to sprint 4
* [ ] Have a child-friendly experience while using the app (animations) - moved
      to sprint 4

#### Sprint 4

* [ ] Integrate drawing capability
* [ ] Add questions about current and previous medication
* [ ] Improve user experience
* [ ] Increase test coverage to ensure the app runs as smoothly as possible
* [ ] Autosave answers to help users avoid losing their input
* [ ] Customisable background image
* [ ] See fun animations on the site
* [ ] View the info page again (currently only shows on signup)
* [ ] Answer questions using an interactive modal
* [ ] Close their account should they choose to

## The product! :sparkles:

Check it out [here](https://allaboutme-annafreud.herokuapp.com/) :eyes:

Or look at this short video that shows basic functionality of the app:

![app walkthrough gif](demo.gif)

## Set up the app locally :computer:

First clone this repo:

```
git clone git@github.com:vyshnavigaripelly/AllAboutMe.git
```

then run `npm i` to install the dependencies for the app.

### Database Setup

In terminal type psql or pgcli if installed. Within psql/pcli enter the
following commands:

```bash
CREATE DATABASE [db_name];
CREATE USER [user_name] WITH PASSWORD '[password]'; # (password in single quotes)
```

Now you can set the database url in your config.env as follows (setting the
values in square brackets to the values you defined in the steps above):

```bash
postgres://[user_name]:[password]@localhost:5432/[db_name]
```

Next run the db_build.js file in terminal:

```bash
npm run dbBuild # to build the database
npm run dbSeed # to build the database and prepopulate with seed data
```

This will create the tables in your database. The seed data adds a user with
email `jam@gmail.com` and password `password`.

### Environment Variables

Environment variables are one of the ways we keep our product safe. If you want
to access our app locally you will need to add your own.

First create a [config.env](https://github.com/dwyl/env2#create-a-env-file) file
in the root directory of the project and add the following variables:

```
DATABASE_URL
SECRET
SESSION_SECRET
```

and for sending emails you need the following:

```
TEMPLATE_DIRECTORY = ./src/email_templates
SENDER_EMAIL_ADDRESS
AWS_REGION
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

_*(Note: have a look at the [SendEmail](https://www.npmjs.com/package/sendemail)
module to set this up and find the values for the variables)*_

### Redis

Our app uses redis to store information used to reset passwords. In order to run
the app locally you will need to have a redis server running on your machine.
The instructions for this will vary depending on your setup:
https://redis.io/topics/quickstart

### Start the Server

You can now start the server! In your terminal type:

```
npm run devStart
```

then you should be able to go to [localhost](http://localhost:4001/) and view
the app!

## Technologies :floppy_disk:

* Database: [PostgreSQL](https://www.postgresql.org/) and
  [redis](https://redis.io/).
* Authentication: Password hashing using
  [bcrypt](https://www.npmjs.com/package/bcryptjs).
* Styling: [Tachyons](http://tachyons.io/) and CSS.
* [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/) and
  [Handlebars](http://handlebarsjs.com/).
* To send the form via email:
  [SendEmail](https://www.npmjs.com/package/sendemail) with
  [AWS](https://aws.amazon.com/ses/getting-started/).

## Rescources

* [Send email Dwyl library](https://github.com/dwyl/sendemail)
* [Using flash messages](https://gist.github.com/brianmacarthur/a4e3e0093d368aa8e423)
* [Password reset flow](https://stormpath.com/blog/the-pain-of-password-reset)
* [CSS speech bubble :)](https://codepen.io/Founts/pen/gmhcl)
* [Handling 404s with Express](https://expressjs.com/en/starter/faq.html)
* [Choosing accessible colour combinations](http://jxnblk.com/colorable/demos/text/?background=%23f73f8e&foreground=%23FFFFFF)

:dancer::dancer::dancer::dancer:
