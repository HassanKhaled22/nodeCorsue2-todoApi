// const MongoClient=require('mongodb').MongoClient

const{MongoClient,ObjectID}=require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodeApp',(err,client)=>{
if(err){
return    console.log('unable to conect to mongodb server ')
}
console.log('conect to mongodb server')
 const db=client.db('TodoApp')
 db.collection('Todos').find({
     _id:new ObjectID('5c78486fbd583f1f1c2e257e')}
 ).toArray().then((docs)=>{
     console.log('todos')
     console.log(docs)
 },(err)=>{
    
console.log('unable to fetching document',err)
 })

db.collection('Todos').find().count().then((count)=>{
    console.log(`todos count : ${count}`)
   
},(err)=>{
   
console.log('unable to fetching document',err)
})


db.collection('Users').find({
    name:'hassan'
}).toArray().then((docs)=>{
    console.log('users')
    console.log(docs)
},(err)=>{
   
console.log('unable to fetching document',err)
})


db.collection('Users').find({
    name:'hassan'
}).count().then((count)=>{
    console.log(`users count : ${count}`)
   
},(err)=>{
   
console.log('unable to fetching document',err)
})



})