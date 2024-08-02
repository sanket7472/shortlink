const health = () => {

    (req, res) => {
        res.json({
            success: true,
            message: "server is running..."
        })
    }
}

export {
    health
}