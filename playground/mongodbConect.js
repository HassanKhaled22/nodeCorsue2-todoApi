// const MongoClient=require('mongodb').MongoClient

const{MongoClient}=require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodeApp',(err,client)=>{
if(err){
return    console.log('unable to conect to mongodb server ')
}
console.log('conect to mongodb server')
 const db=client.db('TodoApp')
// db.collection('Todos').insertOne({
//     text:'some to do',
//     complet:false
// },(err,result)=>{
//     if(err){
//       return  console.log('unable to insert todos')
//     }
//     console.log(JSON.stringify(result.ops,undefined,2))
// })

db.collection('Users').insertOne({
    
    name:'hassan',
    age:22,
    location:'egypt'
},(err,result)=>{
    if(err){
        return console.log('unable to insert Users')
    }
    console.log(result.ops[0]._id.getTimestamp())
})




client.close();
})