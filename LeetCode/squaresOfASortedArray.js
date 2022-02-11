let sortedSquares = ( nums ) => {
    let [ pointerA, pointerB, res ] = [ 0, nums.length, [] ]
    while ( pointerA <= pointerB ) {
        if ( Math.abs( nums[pointerA] ) >= Math.abs( nums[pointerB] ) ) {
            res.unshift( nums[pointerA] ** 2  )
            pointerA ++
        } else {
            res.unshift( nums[pointerB] ** 2 )
            pointerB --
        }
    }
    return res
}