async function getNumTransactions(username) {
    var check_user = await axios.get("https://jsonmock.hackerrank.com/api/article_users?username=" + username);

    if (check_user.data.data[0].id == 1) {
        
        var trsaction_api = await axios.get("https://jsonmock.hackerrank.com/api/transactions?&userId=" + check_user.data.data[0].id);
        
        return trsaction_api.data.total;
    } else {
        
        return "Username Not Found"
        
    }
}
