mod db;
mod models;
mod routes;

use rocket::{launch, routes};
use rocket_db_pools::Database;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(db::MainDatabase::init())
        .mount("/", routes![routes::index, routes::get_skills,])
}
