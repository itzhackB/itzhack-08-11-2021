export const tempConverter = (fahr) => {
    let cels = Math.round((fahr - 32.0) * (5.0 / 9.0));
    return cels
}