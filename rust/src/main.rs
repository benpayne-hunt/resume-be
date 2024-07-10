use mongodb::{
    bson::{doc, Document},
    Client, Collection,
};

#[tokio::main]
async fn main() -> mongodb::error::Result<()> {
    let uri ="mongodb+srv://bphunt:CIZg0s9Tyn4OX6PS@bph-cluster.g80nzif.mongodb.net/?retryWrites=true&w=majority&appName=bph-cluster";

    let client = Client::with_uri_str(uri).await?;

    let db = client.database("resume");
    let collection: Collection<Document> = db.collection("skills");

    let skill = collection.find_one(doc! { "name": "Rust" }, None).await?;

    println!("Rust skill: {:?}", skill);
    Ok(())
}
