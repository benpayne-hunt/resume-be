import { ListDatabasesResult, MongoClient } from "mongodb";

const connect = async (): Promise<ListDatabasesResult | undefined> => {
  // const MONGO_URI: string = process.env.MONGODB_URI;

  const client = new MongoClient(
    "mongodb+srv://bphunt:<password>@bph-cluster.g80nzif.mongodb.net/?retryWrites=true&w=majority&appName=bph-cluster",
  );

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    return await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

async function listDatabases(client: MongoClient): Promise<ListDatabasesResult> {
  let databasesList = await client.db().admin().listDatabases();

  return databasesList;
}

export default connect;
