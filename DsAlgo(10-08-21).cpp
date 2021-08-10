                                                    //Date:10/08/2021//
//Q.1//

int main()
{
    int myincome = 50000;
    if (myincome > 5000)
    {
        cout << "Yeh! I have 5000 Let`s go with Neha ";
        if (myincome > 10000)
        {
            cout << "to shopping...";
        }
        else
        {
            cout << "to Hotel...";
        }
    }
    else if (myincome > 2000)
    {
        cout << "No! go with Rashmi to TeaStall...";
    }
    else
    {
        cout << "!Poor Man! go to home..";
    }

    return 0;
}

/*Firstly defined a variable ,
  this veriable value is integer(number) ;
  after this, a if/else statement added ;
  the condition of 1st(if/else) is that;
  >veriable value is more than 5000<,{
  >if the condition is true >so print "Yeh!
  I have 5000 Let`s go with Neha ", and a if/else added ,
  the condition of the new {if/else is >veriable value>10000,
  >if the condition is true >so print "to shopping...";
  >if the condition is false >so print "to Hotel...";}
  >if the condion is false check the second condition;}
  >veriable value > 2000,if the condition is true 
  >so print "No! go with Rashmi to TeaStall...";
  if the condtion is false 
  >print "!Poor Man! go to home.." 
  End..
*/

//Q.2//

int main() {
    
    string name;
    name = "";
    if (name!=""){
        cout<<"Welcome! ";
        cout<<name;
    }else{
        cout<<"Please Enter your name";
    }
    
    
    
    return 0;
}

/* Firstly get a input from user that is his/her name, store to a veriable;
   then if/else add; the condition of this ,is that if the user fill the name so
   print his/her name; else call him/her for fill name;
   End.
*/

