export const howMuchDays = (from, to) => {
    return Math.floor((to - from) / (24 * 60 * 60 * 1000));
}