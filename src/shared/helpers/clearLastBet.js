export const clearLastBet = (location, setBetResult) => {
    return location.pathname === '/'? setTimeout(() => setBetResult(null), 2000) : null
  }