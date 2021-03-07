export default {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    secret: process.env.secret || 'secretkey',
    db_connection_url: process.env.db_connection_url,
    db_username: process.env.db_username,
    db_password: process.env.db_password,
}
