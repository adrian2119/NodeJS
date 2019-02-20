
target = 1000;
total = 0;
for (counter = 0; counter < target; counter ++) {
    if ((counter % 3 == 0) || 
        (counter % 5 == 0) || 
        (counter % 15 == 0)) {
        total += counter;
    }
    console.log("counter divided by", 3, "is:", counter / 3, "remainder:", counter % 3, "Total:", total)
}