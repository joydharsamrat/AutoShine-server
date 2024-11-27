/* eslint-disable @typescript-eslint/no-explicit-any */
import { Booking } from "../booking/booking.model";
import { startOfMonth, endOfMonth, subMonths, format } from "date-fns";

const getMonthlyRevenue = async () => {
  const currentDate = new Date();
  const firstDayOfCurrentMonth = startOfMonth(currentDate);
  const lastDayOfCurrentMonth = endOfMonth(currentDate);

  const monthsToFetch = 6;

  const revenuePerMonth = [];

  for (let i = 0; i < monthsToFetch; i++) {
    const startOfMonthDate = subMonths(firstDayOfCurrentMonth, i);
    const endOfMonthDate = subMonths(lastDayOfCurrentMonth, i);

    // Fetch bookings and join with the Service  to get the price
    const bookings = await Booking.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startOfMonthDate,
            $lt: endOfMonthDate,
          },
        },
      },
      {
        $lookup: {
          from: "services",
          localField: "service",
          foreignField: "_id",
          as: "serviceDetails",
        },
      },
      {
        $unwind: "$serviceDetails",
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$serviceDetails.price" },
        },
      },
    ]);

    const monthYear = format(startOfMonthDate, "yyyy-MM");

    // If bookings exist add the total revenue
    if (bookings.length > 0) {
      revenuePerMonth.push({
        month: monthYear,
        totalRevenue: bookings[0].totalRevenue,
      });
    } else {
      revenuePerMonth.push({
        month: monthYear,
        totalRevenue: 0,
      });
    }
  }

  return {
    data: revenuePerMonth,
  };
};

const getMonthlyBookings = async () => {
  const currentDate = new Date();
  const firstDayOfCurrentMonth = startOfMonth(currentDate);
  const lastDayOfCurrentMonth = endOfMonth(currentDate);

  const monthsToFetch = 6;

  const bookingsPerMonth = [];

  for (let i = 0; i < monthsToFetch; i++) {
    const startOfMonthDate = subMonths(firstDayOfCurrentMonth, i);
    const endOfMonthDate = subMonths(lastDayOfCurrentMonth, i);

    // Fetch bookings for the month, no need to join with services
    const bookings = await Booking.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startOfMonthDate,
            $lt: endOfMonthDate,
          },
        },
      },
      {
        $count: "totalBookings", // Count the number of bookings
      },
    ]);

    const monthYear = format(startOfMonthDate, "yyyy-MM");

    // If bookings exist, add the count; else, set to 0
    if (bookings.length > 0) {
      bookingsPerMonth.push({
        month: monthYear,
        totalBookings: bookings[0].totalBookings,
      });
    } else {
      bookingsPerMonth.push({
        month: monthYear,
        totalBookings: 0,
      });
    }
  }

  return {
    data: bookingsPerMonth,
  };
};

const getLatestBookings = async () => {
  const bookings = await Booking.find({})
    .sort("-createdAt")
    .limit(5)
    .populate("customer")
    .populate("service")
    .populate("slot");

  return { data: bookings };
};

export const databaseStatsServices = {
  getMonthlyRevenue,
  getMonthlyBookings,
  getLatestBookings,
};
