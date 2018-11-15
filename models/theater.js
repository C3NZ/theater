module.exports = function(connection) {
    connection.createCollection('MTheaters', {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                properties: {
                    id: {
                        bsonType: "int",
                        description: "Must be a string, the id of the movie"
                    },
                    name: {
                        bsonType: "string",
                        description: "Must be a string, the name of the theater"
                    },
                    seats: {
                        bsonType: ["array"],
                        description: "Must be an array of arrays, the seats that compose the theater"
                    },
                    seatsAvailable: {
                        bsonType: "int",
                        description: "Must be an integer, the total number of seats that compose the theater"
                    }
                }
            }
        }
    }, function(err, results) {
        if(!err){
            console.log(results)
            const Theater = connection.collection('MTheaters')
    
            const theater = {
                id: 2,
                name: "The theater",
                seats: [
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]
                ],
                seatsAvailable: 32
            }
            
            //Insert movie into our theater
            Theater.insert(theater, function(err, results){
                if(!err){
                    console.log(results);
                }else{
                    console.log(err)
                }
            })
        }
        else{
            console.log(err)
        }
    })

    }

