
function climbingLeaderboard(ranked, player) {
    var count = 0;
    var rank = [];
    var newrRank = [];
    for(var i = 0 ; i < ranked.length ; i++){
        if(i==0){
            count++;
            rank.push(count);
        }else if(ranked[i]==ranked[i-1]){
            rank.push(count);
        }else if(ranked[i-1]>ranked[i]){
            count++;
            rank.push(count);
        }
    }
    for(var j = 0 ; j < player.length ; j++){
        for(var k = 0 ; k < rank.length ; k++){
            if(player[j]>=ranked[k]){
                var no = false;
                newrRank.push(rank[k]);
                break;
            }else{
                var no = true;
            }
        }
        if(no==true){
            count++;
            newrRank.push(count);
        }
    }
    return newrRank;
}

