function weekdayText(weekdays) {
    return function(num){
        console.log(weekdays.length,num)
        if(num>=weekdays.length||num<0){
            throw new Error("Invalid weekday number");
        }
        return weekdays[num]
    }
}
