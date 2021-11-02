const validateTask = async ({ task, status }) => {
  if (!task || !status) return 'Invalid entries. Try again.';
  return null;
};

module.exports = { validateTask };