const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

// Test 1: capitalizeWords
describe('capitalizeWords function', () => {
  test('capitalizes first letter of each word in "hello world"', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('handles empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('handles single word', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
  });

  test('handles special characters like "hello-world"', () => {
    expect(capitalizeWords('hello-world')).toBe('Hello-world');
  });
});

// Test 2: filterActiveUsers
describe('filterActiveUsers function', () => {
  test('filters active users from mixed array', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
      { name: 'Charlie', isActive: true }
    ];
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', isActive: true },
      { name: 'Charlie', isActive: true }
    ]);
  });

  test('returns empty array for all inactive users', () => {
    const users = [
      { name: 'Alice', isActive: false },
      { name: 'Bob', isActive: false }
    ];
    expect(filterActiveUsers(users)).toEqual([]);
  });

  test('handles empty array', () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

// Test 3: logAction
describe('logAction function', () => {
  test('generates correct log string for valid inputs', () => {
    const result = logAction('login', 'Alice');
    expect(result).toMatch(/^User Alice performed login at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
  });

  test('handles missing action or username', () => {
    expect(() => logAction(undefined, 'Alice')).toThrow();
    expect(() => logAction('login', undefined)).toThrow();
  });

  test('handles empty strings', () => {
    expect(() => logAction('', '')).toThrow();
  });
});