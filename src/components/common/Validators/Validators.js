export const requiredField = (value) => {
    return value ? undefined : 'Field required';
}


export const emailField = (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' :
        undefined
}