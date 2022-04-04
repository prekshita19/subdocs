![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# PROGRAD LABS | NODE | REST API | SUB DOCUMENT

## Learning Goals

In this exercise, you will learn how to create REST api end points and subdocuments:

- Building a RESTful API.
- Performing subdocument operations.
- Writing API endpoints.

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

## Introduction

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover the basics of `server-side routing` and using global `middleware`.

Build a RESTful Web API to manage _"Lessons"_ and _"Squads"_. A _Squad_ is a group chat channel that brings together an instructor and a group of students from the same cohort as they work on a _Lesson_.

An example would be a _Squad_ created to go over the "Introduction to Node and Express" lesson for the _Web 1_ cohort.

A Lesson has:

- a unique `id`.
- a `name`.

A Squad has:

- a unique `id`.
- a `name`.
- a `lessonId` that connects it to the corresponding Lesson.
- a `cohort`.

### Features

The Web API must provide a set of `endpoints` to fulfill the following needs:

- add a new Lesson.
- view a list of existing Lessons.
- view the details of a single Lesson
- update the information of an existing Lesson.
- remove a Lesson.
- add a new Squad.
- view a list of existing Squads.
- view the details of a single Squads
- update the information of an existing Squads.
- remove a Squad.

### PROGRESSION 1 | ESTABLISH CONNECTION
Your task in this iteration is to create a
- `EXPRESS` server.
- An account in `Mongo Atlas`
- connection between node and atlas using mongoose.

### PROGRESSION 2 | End points

Here is a table with the `endpoint` descriptions:

| Action               | URL               | Method | Response         |
| :------------------- | :---------------- | :----- | :--------------- |
| Add a Lesson         | /api/lessons      | POST   | the new Lesson   |
| View list of Lessons | /api/lessons      | GET    | array of Lessons |
| View Lesson details  | /api/lessons/{id} | GET    | a Lesson         |
| Update Lesson        | /api/lessons/{id} | PUT    | updated Lesson   |
| Remove a Lesson      | /api/lessons/{id} | DELETE | deleted Lesson   |
| Add a Squad          | /api/squad        | POST   | the new Squad    |
| View list of Squads  | /api/squads       | GET    | array of Squads  |
| View Squad details   | /api/squads/{id}  | GET    | a Squad          |
| Update Squad         | /api/squads/{id}  | PUT    | updated Squad    |
| Remove a Squad       | /api/squads/{id}  | DELETE | deleted Squad    |

### PROGRESSION 3 | POPULATE THE DATA
Use `populate` method from mongoose to display all the data.

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ProGrad ❤️!
