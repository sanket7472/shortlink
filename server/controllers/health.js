

//Health API
const Health =  (req, res) => {
    res.json({
        success: true,
        message: "server is running..."
    })
}
// Page not found
const Error = ()=>{
    res.send ('404 Error .....Page not found')
}


export {
    Health,
    Error
}
