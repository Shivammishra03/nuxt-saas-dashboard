// server/api/dashboard/[userId].get.ts
export default defineEventHandler(async (event) => {
    const { userId } = event.context.params;  // Access the dynamic userId from the route
  
    // Mock data for demonstration (replace with actual DB query)
    const dashboardData = {
      1: {
        stats: { totalSales: 1000, activeUsers: 150, revenue: 50000 },
        recentActivities: [
          { id: 1, activity: 'User logged in', timestamp: '2024-12-01T10:00:00Z' },
          { id: 2, activity: 'Order placed', timestamp: '2024-12-02T14:00:00Z' },
        ],
      },
      2: {
        stats: { totalSales: 2000, activeUsers: 300, revenue: 75000 },
        recentActivities: [
          { id: 3, activity: 'User logged out', timestamp: '2024-12-02T12:00:00Z' },
          { id: 4, activity: 'Payment processed', timestamp: '2024-12-03T09:00:00Z' },
        ],
      },
    };
  
    if (!dashboardData[userId]) {
      throw createError({
        statusCode: 404,
        statusMessage: `No dashboard data found for user ID ${userId}`,
      });
    }
  
    return dashboardData[userId];
  });
  