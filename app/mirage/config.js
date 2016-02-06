export default function() {
  this.get('/payments', function() {
    return {
      data: [{
        type: 'payments',
        id: 1,
        attributes: {
          name: "lunch at work",
          category: "food",
          amount: 12.93,
          date: "7.01.2016",
          direction: "out"
        }
      }, {
        type: 'payments',
        id: 2,
        attributes: {
          name: "dinner at night",
          category: "food",
          amount: 23.05,
          date: "11.01.2016",
          direction: "out"
        }
      }, {
        type: 'payments',
        id: 3,
        attributes: {
          name: "groceries",
          category: "food",
          amount: 56.66,
          date: "14.01.2016",
          direction: "out"
        }
      }, {
        type: 'payments',
        id: 4,
        attributes: {
          name: "robbed on metro",
          category: "unexpected",
          amount: 20,
          date: "20.01.2016",
          direction: "out"
        }
      }, {
        type: 'payments',
        id: 5,
        attributes: {
          name: "cinema with friends",
          category: "fun",
          amount: 30,
          date: "28.01.2016",
          direction: "out"
        }
      }, {
        type: 'payments',
        id: 6,
        attributes: {
          name: "running shoes",
          category: "cloths",
          amount: 12.93,
          date: "31.01.2016",
          direction: "out",
          in: "si"
        }
      }, {
        type: 'payments',
        id: 7,
        attributes: {
          name: "won a lottery",
          category: "income",
          amount: 100,
          date: "5.01.2016",
          direction: "in",
          in: "si"
        }
      }]
    };
  });
}
