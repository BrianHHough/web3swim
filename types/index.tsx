export interface CustomError extends Error {
    status?: number;
    w3sTokensEarned?: number;
  }