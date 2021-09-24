for(int i = n-1 ; i >= 0 ; i--){
      for(int j = n-1 ; j >= 0 ; j--){
        if(j<=n-1-i){
            cout<<"#";
        }else{
            cout<<" ";
        }
      } 
      cout<<""<<endl;  
    }
