export const orderByMostVote = (orderList) =>
  orderList.sort((a, b) => b.linkVote - a.linkVote);

export const orderByLessVote = (orderList) =>
  orderList.sort((a, b) => a.linkVote - b.linkVote);

export const orderById = (orderList) => orderList.sort((x, y) => y.id - x.id);

export const orderByIndex = (orderList, selectedIndex) => {
  for (let i = 0; i < orderList.length; i++) {
    if (orderList[selectedIndex].linkVote === orderList[i].linkVote) {
      const temp = orderList[i];
      orderList[i] = orderList[selectedIndex];
      orderList[selectedIndex] = temp;
      break;
    }
  }

  return orderList;
};
