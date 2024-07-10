use crate::db::MainDatabase;
use crate::models::Skill;

use mongodb::bson::doc;
use rocket::{futures::TryStreamExt, get, serde::json::Json};
use rocket_db_pools::Connection;
use serde_json::{json, Value};

#[get("/")]
pub fn index() -> Json<Value> {
    Json(json!({"status": "Let's find some skills!"}))
}

#[get("/skills", format = "json")]
pub async fn get_skills(db: Connection<MainDatabase>) -> Json<Vec<Skill>> {
    let skills = db
        .database("resume")
        .collection("skills")
        .find(None, None)
        .await;

    if let Ok(skill) = skills {
        if let Ok(collected) = skill.try_collect::<Vec<Skill>>().await {
            return Json(collected);
        }
    }

    return Json(vec![]);
}
