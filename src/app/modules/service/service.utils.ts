import { Types } from "mongoose";

export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const formatMinutesTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
};

export const generateSlots = (
  slotsCount: number,
  startMinutes: number,
  serviceDuration: number,
  date: string,
  service: Types.ObjectId
) => {
  const slots = [];
  for (let i = 0; i < slotsCount; i++) {
    const slotStart = startMinutes + i * serviceDuration;
    const slotEnd = slotStart + serviceDuration;

    const newSlot = {
      service,
      date,
      startTime: formatMinutesTime(slotStart),
      endTime: formatMinutesTime(slotEnd),
      isBooked: "available",
    };

    slots.push(newSlot);
  }
  return slots;
};
