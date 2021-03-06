/**
  当一个数为2的整数幂的时候，1的个数为1，比如2（10) 和4(100)，8(1000)
  在这之后就是前一个序列的数+1 比如 9(1001) = 1(1) + 8 (1) = 2
  就是把一个数分解为小于它的最大2的整数幂 + x
  */
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    
    var res = [];
    var pow = 1;
    var pow1 = 1;
    
    res[0] = 0;
    
    for(var i = 1; i <= num; i++){
        if(i === pow){
            res[i] = 1;
            pow1 = pow;
            pow *= 2;
        } else {
            res[i] = res[pow1] + res[i - pow1];
        }
    }
    return res;
};

/**
倒过来想，一个数 * 2 就是把它的二进制全部左移一位，也就是说 1的个数是相等的。
那么我们可以利用这个结论来做。
res[i /2] 然后看看最低位是否为1即可（上面*2一定是偶数，这边比如15和14除以2都是7，但是15时通过7左移一位并且+1得到，14则是直接左移）
所以res[i] = res[i >>1] + (i&1)
*/
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    
var res = [];
        
    res[0] = 0;
    
    for (var i = 1; i <= num; i++) {
        res[i] = res[i>>1] + (i & 1);
    }
    
    return res;
};
