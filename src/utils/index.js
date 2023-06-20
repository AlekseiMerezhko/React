export const validateUserName = (userName) => {
    if (!userName) {
        return "UserName is Required!";
    }
    if (userName.lengh < 3) {
        return "UserName should be more then 3 chars";
    }
    return false;
};
