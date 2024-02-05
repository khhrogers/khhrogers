const vegetables = [
    { id: 1, name: 'Carrot' },
    { id: 2, name: 'Broccoli' },
    { id: 3, name: 'Spinach' },
    { id: 4, name: 'Tomato' },
    { id: 5, name: 'Cucumber' },
  ];
  
  module.exports = {
    getAllVegetables: () => vegetables,
    getVegetableById: (id) => vegetables.find((veg) => veg.id === id),
    addVegetable: (vegetable) => {
      vegetables.push(vegetable);
      return vegetable;
    },
  };

  