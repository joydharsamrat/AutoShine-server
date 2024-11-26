export const isUpcoming = (date: string, startTime: string) => {
  const now = new Date();
  const bookingDate = new Date(`${date}T${startTime}`);
  return bookingDate > now;
};
