db = connect("currikiprod-mongodb:27017/currikireactmongo");


// var activity = {"mysqlid" : 98,
// "type" : "h5p",
// "updated_at" : ISODate("2020-05-08T13:25:13.111Z"),
// "created_at" : ISODate("2020-05-08T13:25:13.111Z")
// };
// db.test_activities.insert(activity);

cursor = db.activities.find().sort( { playlistid: 1 } );
var count = 0;
var temp_p_id = '';
while ( cursor.hasNext() ){
	var activity = cursor.next();
	if(temp_p_id != activity.playlistid){
		temp_p_id = activity.playlistid;
		// print (temp_p_id);
		count = 0;
	}
	
	
	
	db.activities.update({"_id" :activity._id },{$set : {"order":NumberInt(count)}})
	// printjson( cursor.next() );
	
	print (count);
	count++;
}




// cursor = db.activities.find();

// while ( cursor.hasNext() ){
// 	printjson( cursor.next() );
// }
