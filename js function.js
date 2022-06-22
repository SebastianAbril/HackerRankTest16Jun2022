function getWhiteLightLength(n, m, lights) {
   
    let range = {left: lights[0][1], right: lights[0][2]}
    let lightColors = new Set();
    lightColors.add(lights[0][1]);
    console.log(lights);
    
    for( let i=1 ; i< lights.length ; i++){
        let lightRange = {left: lights[i][1], right: lights[i][2]}
        
       
        lightColors.add(lights[i][0]);
        
        
        let left = Math.max(range.left, lightRange.left);
        let right = Math.min(range.right, lightRange.right); 
        if (left <= right){
            range.left = left;
            range.right = right;
        }
    }
    
   if( lightColors.has(1) == true && lightColors.has(2) == true && lightColors.has(3) == true ){
       return ( range.right - range.left +1);
   } else {
       return 0
   }
    
    
    

}