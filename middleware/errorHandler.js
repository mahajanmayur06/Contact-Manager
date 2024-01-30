const { constansts } = require('../constants');

const errorHandler = (req,res,err) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode){
        case constansts.VALIDATION_ERROR :
            res.json ({
                title : "Validation failed",
                message : err.message
            });
        break;
        case constansts.UNAUTHORIZED :
            res.json ({
                title : "Unauthorized ",
                message : err.message
            });
        break;
        case constansts.FORBIDDEN :
            res.json ({
                title : "Forbidden",
                message : err.message
            });
        break;
        case constansts.NOT_FOUND :
            res.json ({
                title : "Validation Error",
                message : err.message
            });
        break;
        case constansts.SERVER_ERROR :
            res.json ({
                title : "Server Error",
                message : err.message
            });
        break;
        default :
            console.log("No Error");
        break;
    }
}

module.exports = errorHandler;