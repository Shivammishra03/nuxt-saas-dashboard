export default defineEventHandler(async (event) => {
    const body = await readBody(event);
  
    // Mock user data (replace with database query in a real project)
    const users = [
      { id: 1, email: 'test@example.com', password: 'password123', name: 'John Doe' },
    ];
  
    const user = users.find((u) => u.email === body.email && u.password === body.password);
  
    if (!user) {
      return { error: 'Invalid email or password' };
    }
  
    // Generate a mock token (replace with JWT in real projects)
    const token = Buffer.from(`${user.id}:${user.email}`).toString('base64');
  
    return { user: { id: user.id, name: user.name, email: user.email }, token };
  });
  