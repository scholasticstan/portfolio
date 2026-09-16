---
title: AirBnB Clone
description: The ALX capstone series, versions 1 to 4. A command console, a storage engine with file and MySQL backends, a Flask site, a REST API, and a dynamic front end.
date: 2023-08-07
tags: [Python, Flask, MySQL, SQLAlchemy, REST, jQuery]
featured: true
repo: https://github.com/scholasticstan/AirBnB_clone_v4
accent: '#f9a8d4'
---

## The four versions

1. **Console.** A command interpreter that creates, shows, updates and destroys objects (User, Place, City, State, Amenity, Review), backed by a JSON file storage engine.
2. **MySQL.** The same models moved onto SQLAlchemy with a MySQL backend, selectable by environment variable. Setup scripts for the dev and test databases, and deployment scripts for the static site.
3. **REST API.** A Flask API with CORS, error handlers, and full CRUD for every model, plus a status and stats endpoint.
4. **Dynamic front end.** The pages fetch places from the API and filter by amenity and location with jQuery, with the checkbox state driving the query.

## What it taught me

It is one project that gets rebuilt as the stack grows, so you feel each layer's job. The storage abstraction had to survive swapping the backend. The API had to serve the front end without leaking model internals. Unit tests for the console and the models ran with `unittest` and were part of every task's review.

Repositories: [v1](https://github.com/scholasticstan/AirBnB_clone), [v2](https://github.com/scholasticstan/AirBnB_clone_v2), [v3](https://github.com/scholasticstan/AirBnB_clone_v3), [v4](https://github.com/scholasticstan/AirBnB_clone_v4).
