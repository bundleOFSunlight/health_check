# Take Home Assignment

## Objective

The objective of this assignment is to:

1. create an interactive script or app that periodically queries GitLab's health check, readiness, and metadata API endpoints. 
   - `From GitLab API Doc https://docs.gitlab.com/ee/api/, fake the response data, demo the process in controller/gitlab_health_helper.js`

1. store the result in a table, minimally these fields should be stored:

    - `timestamp` of each run
    - `status` of the health check
    - `status` of the readiness check
    - `version` of the GitLab instance

    - `database sql file exported at controller/csv_generator/personal_health_check.sql` 

1. allow generating and downloading of the report in CSV format.

   - `API provide in routes/common/2. method_two.js`
   - `CSV download => GET API: ${url}/two/download`

## Requirements

1. Use Python, or Node.js as the programming language. _Any other programming language is acceptable._
1. Choose the framework or library of your choice to create the script or app.
1. Include clear instructions on how to install any dependencies required to run the code.
1. Include clear instructions on how to set up the database and table schema.
1. Include clear instructions on how to run the script or the app and download CSV report.
1. The report should contain at least the timestamp and status of the health.
1. The script or app should be easily setup and run in any OS.

## How to start:

1. type `npm install` in the command prompt
1. Import `personal_health_check.sql` to your database
1. add your db credentials to `.env` file 
1. `https://gitlab.example.com` is a link to replace by target gitlab project
1. When everything works, send a get request to `localhost:3100/two/download` 
1. Check the CSV successfully downloaded
1. Anything I misunderstood can inform me
1. Method one can be ignore as it is not only for gitlab
1. This repo is uploaded to my github: 


