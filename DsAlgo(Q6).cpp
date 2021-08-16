                                                    //Date:15/08/2021//
/*
//Q.6//

vector<int> compareTriplets(vector<int> a, vector<int> b) {

    
    vector<int> arr;
    arr={};
    int alice= 0;
    int bob = 0;
    for (int i = 0; i < 3; i++ ) {
        if (a[i] > b[i]){
            alice++;
        } 
        if (a[i] < b[i]){ 
            bob++;
        }
    } 
    arr.push_back(alice);
    arr.push_back(bob);
    
    return arr;
}




*/