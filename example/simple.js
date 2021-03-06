var timeout = require('..')

function doSomethingFast(cb) { setTimeout(cb, 100) }
function doSomethingSlow(cb) { setTimeout(cb, 2000) }

doSomethingFast(timeout(function doSomethingFastHandler (err) {
    if (err)
        console.log(err.message) // Will not happen
    else
        console.log('doSomethingFastHandler executed without error.') // Will happen
}, 1000))

doSomethingSlow(timeout(function doSomethingSlowHandler (err) {
    if (err)
        console.log(err.message) // Will happen
    else
        console.log('doSomethingSlowHandler executed without error.') // Will not happen
}, 1000))
