const connection = require('../utils/Database');

exports.countActiveUsers = async (req, res) => {
    const datetime = new Date();
    const dayOfToday = datetime.toISOString().slice(0,10);
    const userId = req.body.userId;

    console.log(`[USER LOGIN EVENT] Date:${dayOfToday}, User: ${userId}`);

	connection.query('SELECT date,users FROM active_users WHERE date = ?',dayOfToday, function (error, results, fields) {
        if (error){
            console.log(error);
            res.send({success:0,description:"Database connection failed."});
        }else{

            if(results.length==0){
                console.log("Adding new date row for "+dayOfToday);
                connection.query('INSERT INTO active_users (date, users) VALUES(?, ?)', [dayOfToday,userId],function (error, results, fields) {
                    //connection.end();
                });
            }else{
                console.log("Updating existing date row.");

                const userList = results[0].users.split(',');
                if(userList.includes(userId)){
                    console.log("User is already counted for the day.");
                }else{
                    console.log("Counting user for the day.");
                    connection.query('UPDATE active_users SET users = ? WHERE date = ?', [results[0].users+","+userId,dayOfToday] ,function (error, results, fields) {
                        //connection.end();
                    });
                }
            }

            res.send({success:1,description:"Active users updated successfully."});
        }
    });
};