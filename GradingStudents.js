function gradingStudents(grades) {
    // Write your code here
    var grade = [];
    for(var i = 0 ; i < grades.length ; i++){
        for(var j = 0 ; j <= 100; j+=5){
            if(grades[i]<=j ){
                var near = j;
                var less = j-grades[i];
                if(less<3 && grades[i]>37) {
                    grade.push(near);
                }else{
                    grade.push(grades[i]);
                }
                break;
            }
        }
    }
    return grade;

}
