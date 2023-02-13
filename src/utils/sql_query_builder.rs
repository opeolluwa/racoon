use async_trait::async_trait;
use sqlx::{Pool, Postgres};

/// a placeholder for building SQL query abstractions
/// the util implements a number of common SQL transactions like, save, get by primary key, get all, get one, e.t.c
/// #Example
///
/// ``` rust
/// #[derive(sqlx::FromRow, Debug, Serialize, Deserialize)]
/// struct User {
/// id: Uuid,
/// age: u32,
/// name: String
/// }
///
/// impl SqlQueryBuilder for User {
/// fn save(db_connection){
/// let sql_query = "INSERT INTO user_information (id, age, name) VALUES ($1, $2, $3) RETURNING *";
///    let otp = sqlx::query_as::<_, Otp>(sql_query)
///     .bind(self.id)
///     .bind(self.age)
///    .bind(self.name)
///  .fetch_one(db_connection)
/// .await;
///  }
/// }
/// ```

#[async_trait]
pub trait SqlQueryBuilder {
    /// allow generic use of the query builder for multiple models
    type Entity;
    type Attributes;
    // type UpdatedAttribute;

    /// save a new record in the database
    async fn save(
        fields: Self::Attributes,
        db_connection: &Pool<Postgres>,
    ) -> Result<Self::Entity, sqlx::Error>;

    /*  /// update a field e.g user password
       async fn update_field(
           field: &str,
           value: Self::UpdatedAttribute,
           db_connection: &Pool<Postgres>,
       ) -> Result<Self::Entity, sqlx::Error>;
    */
    /// find record by id
    async fn find_by_id(
        id: &str,
        db_connection: &Pool<Postgres>,
    ) -> Result<Self::Entity, sqlx::Error>;
}