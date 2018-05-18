# README


## Description

ToMemeOrNot is an [Imgur](https://www.imgur.com) clone, operating as a single page app, built in approx. 120 hours over the span of 10 days.

* For the unfamiliar, this app allows users to:
    * create a new, secured account
    * login to their account at a later time


*  Make content:
    * upload and delete their own images and gifs as posts
    * create and delete their own comments on posts


*  Interact with content:
    * up and down-vote on posts and comments
    * view all available posts on the homepage
    * visit other user profile pages to see their comments and posts


* Future implementations:
  * Front page sorting based on a posts' number of votes
    * Similar comment sorting within each post
  * Search
  * Chat:
    * User-to-User
    * Site-wide

### Technical
  * Backend:
    * Ruby
      * Ruby on Rails
    * PostgreSQL


  * Frontend:
    * AJAX
    * Javascript
      * LoDash
    * HTML, CSS
    * React
      * Router
      * Icons
    * Redux
      * Logger
      * Thunk

## Dev init

* Ruby version: 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin16]

* After entering the root dir, pre-run setup:
  * easy-mode:
  `sh init.sh`
  * otherwise:
  ` bundle install && npm install && rails db:setup`
    * then `rails server` & `npm run webpack`


* Test suite:
  * pending


* Deployed:
  * currently (18.05.18) running on Heroku linux webserver @ ToMemeOrNot.herokuapp.com

***
