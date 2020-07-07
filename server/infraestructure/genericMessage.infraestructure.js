function GenericMessage(type, message, ...params) {
    return {
        type,
        message,
        messageDetail : params
    }
}

module.exports = {
    GenericMessage
}