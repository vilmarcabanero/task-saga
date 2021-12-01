export function validateLogin(param) {
  const { loginUserData, setIsValid, setError } = param;

  if (!loginUserData.email.length) {
    setError(`Email can't be empty.`);
    setIsValid(false);
    return false;
  }

  return true;
}
