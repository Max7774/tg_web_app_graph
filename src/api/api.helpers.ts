/* eslint-disable @typescript-eslint/no-explicit-any */
export const getContentType = () => ({
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
});

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.detail;

  return message
    ? typeof error.response.data.detail === "object"
      ? message[0]
      : message
    : error.detail;
};
