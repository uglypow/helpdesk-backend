## Deployment using fly.io
https://helpdesk-support-ticket.fly.dev/

## Front-End Repo
https://github.com/uglypow/helpdesk-frontend

## Setting up
To run this locally please follow the following steps

1. Clone from github repository

```
git clone https://github.com/uglypow/helpdesk-backend.git
```

2. run the following command

```
cd helpdesk-backend
npm install
```

3. Create .env file 

*This project was made using mongoDB as a database*

In order to run this locally please create ".env" file 
in the root directory and set it as the following

```
MONGODB_URI='Your mongoDB database connection string'
PORT=8080
```

4. Run it

```
npm run dev
```

Open the application via the following link

http://localhost:8080/


## API Routes

#### Tickets:

- [localhost:8080/api/tickets](http://localhost:8080/api/tickets) - GET ALL TICKETS
- [localhost:8080/api/tickets](http://localhost:8080/api/tickets) - POST NEW TICKET
- [localhost:8080/api/tickets/](http://localhost:8080/api/tickets/)`id` - PUT/UPDATE A TICKET
- [localhost:8080/api/tickets/](http://localhost:8080/api/tickets/)`id` - DELETE A TICKET (not usable) 

**_DELETE will only return 204 status but will not actually deleting the content. if you want to enable the function you can go to tickets.js in controllers folder and uncomment the function inside ticketsRounter.delete route._** 