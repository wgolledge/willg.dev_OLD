export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`Refresh for the newest content :)`);

  if (answer === true) {
    window.location.reload();
  }
};
