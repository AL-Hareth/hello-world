// Third Lesson
function sum(op,...values) {
    var sum=0;
    for (var n of values) {
        sum+=n;
        return sum;
    }
}

var r=sum("sum",5,5,10,5,5);

console.log(r); 
