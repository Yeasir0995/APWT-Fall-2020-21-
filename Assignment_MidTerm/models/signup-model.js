var db = require('./db');

module.exports = {
	insert: function (user, callback) {
		if (user.usertype == "") {
			var sql = "insert into receptionistinfo values(?,?,?,?,?,?,?,?,?,?)";
			db.execute(sql, [user.id,user.fname, user.lname, user.uname, user.password, user.email, user.phone,user.bloodgroup,'pending', 0, 'unblock'], function (status) {
				if (status) {
					callback(true);
				} else {
					callback(false);
				}
			});
		} else if (user.usertype == "Patient") {
			var sql = "insert into patientinfo values(?,?,?,?,?,?,?,?,?,?)";
			db.execute(sql, [user.id,user.fname, user.lname, user.username, user.password, user.email, user.phone, user.bloodgroup, 'pending', 0, 'unblock'], function (status) {
				if (status) {
					callback(true);
				} else {
					callback(false);
				}
			});
		} else {
			console.log("select type");
		}
	}
}