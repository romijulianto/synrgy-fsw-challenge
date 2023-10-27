function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (const element of cars) {
    if (element.available) {
      result.push(element);
    }
  }
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
