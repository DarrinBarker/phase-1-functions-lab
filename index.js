// Code your solution in this file!
function distanceFromHqInBlocks(start){
    if (start < 42){
        return (42 - start)
    } 
    if (start > 42){
        return (start - 42)
    } 
       // if (start < 42){
           // return (42 - start)
        
    // let destination = 42 {
    //     if 
    // }

}

function distanceFromHqInFeet(destination){
    return distanceFromHqInBlocks(destination) * 264
    }
    


function distanceTravelledInFeet(start, destination){
    if (start < destination) {
        return (destination - start) * 264
    }
    else {
        return (start - destination) * 264 }

}

function calculatesFarePrice(start, destination){
    const feetTraveled = distanceTravelledInFeet(start, destination)
        if (feetTraveled <= 400){
            return (0)
        }
        else if (feetTraveled > 400 && feetTraveled < 2000) {
          return  (feetTraveled - 400) * 0.02
        }
        else if ( feetTraveled > 2000 && feetTraveled <= 2500 ){
            return (25)  
        }
        else {
            return 'cannot travel that far'
        }
    // if (start <= 400){
        //return (0)
   // }
    //else if (start > 400 && start < 2000) {
    //    return(2.56)
  //  }
   // else if ( start > 2000) {
       // return (25)
  //  }

}