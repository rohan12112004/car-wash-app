import { User } from '../models/User.js';
import { Booking } from '../models/Booking.js';
import { Payment } from '../models/Payment.js';
import { asyncHandler } from '../utils/asyncHandler.js';

/**
 * @desc    Get admin dashboard stats
 * @route   GET /api/admin/dashboard
 * @access  Private/Admin
 * @what    Aggregates stats for the dashboard.
 * @how     Counts documents in collections.
 * @why     High-level overview of system activity.
 * @future  Add time-series charts data.
 */
export const getDashboardStats = asyncHandler(async (req, res) => {
  const totalUsers = await User.countDocuments({ role: 'user' });
  const totalBookings = await Booking.countDocuments();
  const totalRevenueData = await Payment.aggregate([
    { $match: { status: 'paid' } },
    { $group: { _id: null, total: { $sum: '$amount' } } }
  ]);
  const totalRevenue = totalRevenueData[0]?.total || 0;

  res.status(200).json({
    success: true,
    data: {
      totalUsers,
      totalBookings,
      totalRevenue
    }
  });
});

/**
 * @desc    Get all users
 * @route   GET /api/admin/users
 * @access  Private/Admin
 * @what    Fetches all registered users.
 * @how     Queries the User collection.
 * @why     Admin user management.
 * @future  Add ban/suspend user functionality.
 */
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select('-passwordHash').sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: users });
});
