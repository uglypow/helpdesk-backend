const ticketsRounter = require('express').Router()
const Ticket = require('../models/ticket')

ticketsRounter.get('/', async (request, response) => {
    const tickets = await Ticket.find({})
    response.json(tickets)
})

ticketsRounter.get('/:id', async (request, response) => {
    const ticket = await Ticket.findById(request.params.id)

    if (ticket) {
        response.json(ticket)
    } else {
        response.status(404).end()
    }
})

ticketsRounter.put('/:id', async (request, response) => {
    const body = request.body

    const ticket = {
        title: body.title,
        description: body.description,
        contact: body.contact,
        status: body.status || 'pending',
        created_at: body.created_at,
        updated_at: body.updated_at
    }
    
    const updatedTicket = await Ticket.findByIdAndUpdate(request.params.id, ticket, { new: true })
    response.json(updatedTicket)
})

ticketsRounter.post('/', async (request, response) => {
    const body = request.body

    const ticket = new Ticket({
        title: body.title,
        description: body.description,
        contact: body.contact,
        status: body.status || 'pending',
        created_at: new Date(), 
        updated_at: new Date()
    })

    const savedTicket = await ticket.save()
    response.status(201).json(savedTicket)
})

ticketsRounter.delete('/:id', async (request, response) => {
    // await Ticket.findByIdAndDelete(request.params.id)
    response.status(204).end()
})

module.exports = ticketsRounter