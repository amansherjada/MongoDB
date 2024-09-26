//Database
db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
   { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
   { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])

// Find all documents in the 'inventory' collection and sort them by 'qty' in ascending order (smallest to largest).
db.inventory.find().sort({qty:1})  

// Find all documents in the 'inventory' collection and sort them by 'qty' in descending order (largest to smallest).
db.inventory.find().sort({qty:-1})

// Find all documents in the 'inventory' collection, skipping the first document (starts from the second document).
db.inventory.find().skip(1)

// Find all documents in the 'inventory' collection, skipping the first two documents (starts from the third document).
db.inventory.find().skip(2)

// Find only the first document in the 'inventory' collection (limit the result to 1 document).
db.inventory.find().limit(1)

// Find the first two documents in the 'inventory' collection (limit the result to 2 documents).
db.inventory.find().limit(2)