---
title: Task Schedule App
description: ALX final project. A web app for scheduling tasks by date, time and priority, with accounts, a REST API and a MySQL database behind SQLAlchemy.
date: 2024-01-26
tags: [Python, Flask, SQLAlchemy, MySQL, REST, JavaScript]
featured: false
repo: https://github.com/scholasticstan/task-schedule-app
accent: '#fbbf24'
---

## Overview

Users register, log in and manage tasks with a name, start and end dates, a time, a priority and a status. Tasks show as cards with the time remaining and can be edited or deleted. Passwords are hashed with bcrypt. The web app talks to its own REST API (`/api/v1`), which handles CRUD for users and tasks and is served as a separate Flask process.

## Stack

Flask, SQLAlchemy with MySQL, a base-model pattern shared with the AirBnB clone, Bootstrap and vanilla JavaScript for the dashboard.

## Looking back

It works, and it shipped on time for the ALX deadline. If I rebuilt it today I would drop the second Flask process, add tests around the API, and move the secret key out of the source file. That thinking fed directly into how LinkBolt was built.
