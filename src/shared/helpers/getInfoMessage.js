export const getInfoMessage = (location, betResult, lastEvent, getTeamName) => {
    return (
      (location.pathname === '/' && betResult && lastEvent.id)
        ? `Спасибо, Ваша ставка принята [${getTeamName(lastEvent, 0)} -- ${getTeamName(lastEvent, 2)}: "${betResult}"]`
        : null
    )
  }