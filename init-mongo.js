conn = new Mongo();
db = conn.getDB("currikireactmongo");
db.createUser({user: "nodejs", pwd: "1234", roles: ["readWrite", "dbAdmin"]});