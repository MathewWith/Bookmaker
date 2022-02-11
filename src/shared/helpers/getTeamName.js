export const getTeamName = (event, position) =>
  event.bets?.find(x => x.position === position).name