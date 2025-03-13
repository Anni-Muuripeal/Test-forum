export const testUsers = {
  validUser: {
    nickname: 'testuser1',
    age: 25,
    gender: 'male',
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser1@example.com',
    password: 'password123'
  },
  invalidUser: {
    nickname: 'nonexistent',
    password: 'wrongpassword'
  },

  generateUniqueUser: () => {
    const timestamp = Date.now();
    return {
      nickname: `user_${timestamp}`,
      age: 30,
      gender: 'female',
      firstName: 'New',
      lastName: 'User',
      email: `user_${timestamp}@example.com`,
      password: 'newuserpass123'
    };
  }
};

export const testPosts = {
  validPost: {
    title: 'Test Post Title',
    content: 'This is a test post content with enough characters to be valid.',
    categories: ['movies']
  },
  commentText: 'This is a test comment on the post.'
};