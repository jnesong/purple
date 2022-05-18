/* 
I: integer - number of versions, function isBadVersion(version) that returns true if version number is bad
O: integer - the first version that caused all the following versions to be false
C: versions are integers greater than 1
E: first version is bad
Time Complexity: 
Space Complexity: 

want to binary search the isBadVersion(version) false that is followed by at true
brute force would be to loop backwards and check every version with isBadVersion(), 
in which case the first bad version would be the one before the first n to return false 
*/

function firstBadVersion ( n ) {

    let x = Math.round(n/2)

    if (isBadVersion(1)===true){return 1}

    if (isBadVersion(x)) {
        if (!isBadVersion(n-1)) { return n }
        firstBadVersion(Math.ceil(x/2))
    }

    return firstBadVersion (n+(x))

}

function isBadVersion (n) {
    if (n<=5) { return false }
    return true
}