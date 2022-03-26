const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    arrival: Date
},
{
    timestamps: true 
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Virgin', 'United', 'Southwest' ]
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNum: {
        type: Number,
        required: true,
        min: 1,
        max: 9999
    },
    departs: {
        type: Date,
        default: function(){
            let now = new Date()
            return now.setFullYear(now.getFullYear + 1).toISOString()
        }
    },
    destinations: [destinationSchema]
},
{
    timestamps: true    
})

module.exports = mongoose.model('Flight', flightSchema)