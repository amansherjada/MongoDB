db.inventory.find() //Fetch all documents

//Selects from the inventory collection all documents where the 'qty' equals 85
db.inventory.find({qty:85})

//Retrieves all documents from the inventory collection where status equals either "A" or "D"
db.inventory.find( { status: { $in: [ "A", "D" ] } } )

// MongoDB Query and Projection Operators = https://www.mongodb.com/docs/manual/reference/operator/query/#std-label-query-selectors

//'AND' Retrieves all documents in the inventory collection where the status equals "A" and qty is less than ($lt) 30
db.inventory.find({status: "A", qty:{$lt: 30}})

//'OR' Retrieves all documents in the collection where the status equals "A" or qty is less than ($lt) 30:
db.inventory.find( { $or: [ {status: "A"}, {qty:{$lt: 30}} ] } )