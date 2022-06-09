/* 
I: integer - number of versions, function isBadVersion(version) that returns true if version number is bad
O: integer - the first version that caused all the following versions to be false
C: versions are integers greater than 1
E: first version is bad
Time Complexity: 
Space Complexity: 

want to binary search the isBadVersion(version) false that is followed by at true
brute force would be to loop backwards and check every version with isBadVersion(), 
in which case the first bad version would be the one before the first n to return false- not a bad version
*/


function firstBadVersion ( n ) {

    let left = 0;
    let right = n;
    let check = 0;

    while(left<=right){
        check = Math.floor( ((right-left)/2)+left );
        if(isBadVersion(check)===true && isBadVersion(check-1)===false) {
            return check;
        } else if(isBadVersion(check) && isBadVersion(check-1)) {
            right = check-1;
        } else {
            left = check+1;
        }
    } 
    
    return "error: bad version not found"

}

function isBadVersion (n) {
    if (n<1) { return false }
    return true
}

console.log(firstBadVersion(20))
console.log(firstBadVersion(12))