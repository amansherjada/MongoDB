/*
db.inventory.insertMany( [
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
] );
*/

//To delete at most a single document that matches a specified filter (even though multiple documents may match the specified filter) use the db.collection.deleteOne() method.
// Deletes the first document where status is "D":
db.inventory.deleteOne({status: "D"})


//To delete all documents that match a deletion criteria, pass a filter parameter to the deleteMany() method. 

//Removes all documents from the inventory collection where the status field equals "A":
db.inventory.deleteMany({ status : "A" })

//To delete all documents from a collection, pass an empty filter document {} to the db.collection.deleteMany() method.
db.inventory.deleteMany({})