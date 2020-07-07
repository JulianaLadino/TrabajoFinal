function Success() {
    return 200
}

function Conflict() {
    return 409
}

function Error() {
    return 500
}

function NoContent() {
    return 204
}

module.exports = {
    Success,
    Conflict,
    Error,
    NoContent
}