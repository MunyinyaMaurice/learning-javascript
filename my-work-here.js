let myWorkHere = {
    range: function (start, end, step = 1) {
        let rangeArray = [];
        if (step < 0) {
            for (let i = start; i >= end; i = i + step) {
                rangeArray.push(i);
            }
        }
        else {
            for (let i = start; i <= end; i = i + step) {
                rangeArray.push(i);
            }
        }

        return rangeArray;
    },
    
}