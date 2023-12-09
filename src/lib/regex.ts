export const strongPasswordRegex = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
export const vnPhoneRegex = new RegExp(/^(\+84|0)(3[2-9]|5[689]|7[06-9]|8[1-9]|9\d)\d{7,8}$/);
export const emailRegex = new RegExp(/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
