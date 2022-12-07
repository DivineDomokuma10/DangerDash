function sre(s,n){
    let checkInt = 0;
    for (let i = 0; i < s.length; i++) {
        checkInt++;
        if (checkInt === n) {
            console.log(s[i])
            checkInt = 0;
        }
    }
}

sre('wertyabcdeyui',2)