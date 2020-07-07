let validateNumberParameter = ({params: {id}}, res, next) => {
    if (Number.isNaN(Number(id))) 
        return res.status(400).json('{message: "URL param {id} must be a number"}');
    next();
}
module.exports = {
    validateNumberParameter
}