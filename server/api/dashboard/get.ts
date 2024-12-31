export default defineEventHandler(async (event) => {
    const query = useQuery(event);
  
    // Mock dashboard data (replace with dynamic data in real projects)
    const data = {
      userId: query.userId,
      stats: {
        totalSales: 1000,
        activeUsers: 150,
        revenue: 50000,
      },
      recentActivities: [
        { id: 1, activity: 'User logged in', timestamp: '2024-12-01T10:00:00Z' },
        { id: 2, activity: 'Order placed', timestamp: '2024-12-02T14:00:00Z' },
      ],
    };
  
    return { data };
  });
  