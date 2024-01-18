module.exports = {
    createError: (status,messages)=>{
        err = new Error()
        err.status = status
        err.message = message
        return err
    }
}