/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3
*/


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let count = 0;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                count ++;
                clearRestOfLand(grid, i, j);
            }
        }
    }
    
    return count;
};

function clearRestOfLand(grid, i, j){
    
    if(i<0 || j<0||i>=grid.length||j>=grid[0].length||grid[i][j]==='0'){
        return;
    }
    
    grid[i][j]='0';
    clearRestOfLand(grid, i, j-1);
    clearRestOfLand(grid, i, j+1);
    clearRestOfLand(grid, i-1, j);
    clearRestOfLand(grid, i+1, j);
    return;
}
