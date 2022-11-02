const getNearestDate = () => {
  const userDate = new Date();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const daysTillMonday = days.length + 1 - userDate.getDay();

  userDate.setDate(userDate.getDate() + daysTillMonday);
  const formatedDate = userDate.toISOString().slice(0, 10).split('-').reverse()
  formatedDate[2] = formatedDate[2].slice(2); // remove the first two digits of the year

  return formatedDate.join('.')
}

const setDateToContainer = () => {
  const saleTextContainer = document.querySelector('.sale__info');
  saleTextContainer.innerHTML += ` ${getNearestDate()}`;
}

setDateToContainer();