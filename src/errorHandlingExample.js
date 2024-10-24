// try, catch, throw, finally

/*
try {
    // experimentation or execution
    // throw some error message
}

catch {
    // Statements
}

finally {
    // Always runs - will execute whether you have an error or not
}
*/

try {
    let a = 15, b = 0;
    if (b === 0) {
        // throw "Trying to divide by zero...";
        throw new Error("New error: Division by Zero!");
        //console.log("Does this run?") // Does not run
    }
    // console.log("How about this one?") // Does not run since break happens after error/throw
} catch (error) {
    console.error("Cannot divide by zero!!");
    console.log(error);
} finally {
    console.log("I always run!")
}