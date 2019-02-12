function doOfflineValidation(gamerTag) {
    const regex = /(^[a-zA-Z0-9]{8}$)/;
    return regex.test(gamerTag);
}