use rocket_db_pools::{mongodb::Client, Database};

#[derive(Database)]
#[database("resume")]
pub struct MainDatabase(Client);
