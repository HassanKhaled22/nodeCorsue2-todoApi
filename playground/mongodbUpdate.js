// const MongoClient=require('mongodb').MongoClient

const{MongoClient,ObjectID}=require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodeApp',(err,client)=>{
if(err){
return    console.log('unable to conect to mongodb server ')
}
console.log('conect to mongodb server')
 const db=client.db('TodoApp')

 db.collection('Todos').findOneAndUpdate({
     _id:new ObjectID('5c78486fbd583f1f1c2e257e')
    },{
        $set:{
            complet:true
        }
    },{
        returnOriginal:false
    }
 ).then((res)=>{
     console.log(res)
 })


db.collection('Users').findOneAndUpdate({
   name:'khald'
   },{
       $set:{
           name:'hassan'
       }
       , $inc:{
        age:1
    }
   },
   {
       returnOriginal:false
   }
).then((res)=>{
    console.log(res)
})

})