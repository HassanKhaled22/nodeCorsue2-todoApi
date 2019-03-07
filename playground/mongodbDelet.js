// const MongoClient=require('mongodb').MongoClient

const{MongoClient,ObjectID}=require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodeApp',(err,client)=>{
if(err){
return    console.log('unable to conect to mongodb server ')
}
console.log('conect to mongodb server')
 const db=client.db('TodoApp')

 ////deletMeany
// db.collection('Todos').deleteMany({text:'read the book'}).then((result)=>{
//     console.log(result)
// })
// db.collection('Users').deleteMany({name:'hassan'}).then((res)=>{
//     console.log(res)
// })
// //deletone
// db.collection('Todos').deleteOne({text:'eat meat'}).then((result)=>{
//     console.log(result)
// })

//findOneAndDelet

// db.collection('Todos').findOneAndDelete({complet:false}).then((res)=>{
//     console.log(res)
// })
db.collection('Users').findOneAndDelete({_id:new ObjectID('5c77f458357c13232cccaa96')}).then((res)=>{
    console.log(res)
})

})