/*
//Hollow Rectangle Pattern//
int main() {
    
    for (int i=1;i<=10;i++){
        for (int j=1;j<=10;j++){
            if(i==1||i==10){
                cout<<"*";
            }
            else{
                if(j==1||j==10){
                    cout<<"*";
                }else{
                    cout<<" ";
                }
            }
        }
        cout<<""<<endl;
    }

    return 0;
}

//M print//
for (int i=1;i<=5;i++){
        for(int j=1;j<=5;j++){
            if(i<=5){
                if(j==1||j==5){
                    cout<<"0";
                }else if (i==1||i>3){
                    if(1<j<5){
                        cout<<" ";
                    }
                }else{
                    if(i==j||j==i+2){
                        cout<<"0";
                    }else{
                        cout<<" ";
                    }
                }
            }
        }
        cout<<""<<endl;
    }


*/