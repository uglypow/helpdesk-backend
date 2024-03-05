## Deployment using fly.io
https://helpdesk-support-ticket.fly.dev/

## Front-End Repo
https://github.com/uglypow/helpdesk-frontend

## API Routes

**This project was made using mongoDB as a database**
if you want to run locally please create ".env" file 
in the root and set the following to get start

```
    MONGODB_URI='Your mongoDB database link'
    PORT=8080
```

#### Tickets:

- https://localhost:8080/api/tickets - GET ALL TICKETS
- https://localhost:8080/api/tickets - POST NEW TICKET
- https://localhost:8080/api/tickets/`id` - PUT/UPDATE A TICKET
- https://localhost:8080/api/tickets/`id` - DELETE A TICKET (not usable)