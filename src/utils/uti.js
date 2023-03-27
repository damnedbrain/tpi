const convertTime = (time, locale) => {
  try {
    const date = new Date(time);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(locale, options);
  } catch (error) {
    return time;
  }
};

export { convertTime };
