conn = new Mongo();
db = conn.getDB("react-redux-blog");
db.createUser({user: "nodejs", pwd: "1234", roles: ["readWrite", "dbAdmin"]});