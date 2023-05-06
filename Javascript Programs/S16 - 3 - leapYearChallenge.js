function isLeap(year) {
    /* 
    Leap years MUST be cleanly divisible by 4, EXCEPT every year that is evenly divisible by 100,
    UNLESS the year is also evenly divisible by 400. 
    */
    if (((year % 4) == 0) && ((year % 100) == 0) && ((year % 400) == 0)) {
        return (year + " is a leap year.");
    }
    else {
        return (year + " is not a leap year.")
    }
}

isLeap(2000);