const {MongoClient} = require('mongodb');

const uri = "mongodb://mongokatu:katu@192.168.1.11:27888/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const main = async () =>{
  const client = new MongoClient(uri);
  try{
    await client.connect();
    await listDatabases(client);

    // await createListing(client,
    //   {
    //       name: "Yoshua Urix",
    //       profession: "Developer",
    //       phone: 941476410,
    //       mail: "josh27p@gmail",
    //       RUC: 123645678952,
    //       need: "chamba",
    //       message: "contrate por favor"
    //   }
    // );
  } catch (e){
    console.error(e);
  } finally{
    await client.close();
  }
}

const listDatabases = async(client) =>{
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db=> console.log(` - ${db.name}`));
}

async function createForm (newListing){
  const client = new MongoClient(uri);
  try{
    await client.connect();
    // añadiendo fecha a los formularios creados 
    const date = new Date()
    newListing["dateCreated"] = date
    const result = await client.db("prodequa").collection("forms").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    return result;  
  }catch(e){
    console.error(e);
  }finally{
    await client.close();
  } 
}
const readForms = async() =>{
  const client = new MongoClient(uri);
  try{
    await client.connect();
    const cursor = await client.db("prodequa").collection("forms").find()
    const result = await cursor.toArray();
    console.log(result)
    return result;
  }catch(e){
    console.error(e);
  }finally{
    await client.close()
  }
}



module.exports={
  main,
  createForm,
  readForms
} 
