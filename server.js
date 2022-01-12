MongoClient.connect("mongodb://admin:pass@mongodb:27017", function(err, client) {
    if (err) {
        throw err;
    }
    var db = client.db('user-account');
    var query = { userid: 1 };
    var cursor = db.collection('users').findOne(query, function(err, result){
        if (err) {
            throw err;
        }
        client.close();
        response.send(result);
    });
});