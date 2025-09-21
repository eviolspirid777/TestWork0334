export const ErrorProposal = (status?: number) => {
  switch (status) {
    case 400:
      return 'Bad Request! Check your username and password!';
    default:
      return 'Invalid request!';
  }
};
