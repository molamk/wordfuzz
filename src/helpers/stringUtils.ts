// https://stackoverflow.com/a/44280814/4959547
export const toUnderscore = (str: string) =>
  str
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();

export const spaceToPlus = (str: string) => str.split(/\s/).join('+');
