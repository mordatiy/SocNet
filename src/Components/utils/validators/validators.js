export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLength30 = value => {
    if (value.length > 30) return "Max Length is 30 symblos";
    return undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {
    console.log(maxLength, value.length);
    if (value.length > maxLength) return `Max Length is ${maxLength} symblos`;
    return undefined;
}

