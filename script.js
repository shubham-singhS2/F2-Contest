async function getMenu() {
    try {
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    const data = await response.json();
    // Code to display menu items to user
    console.log(data);
  } catch (error) {
    console.error('Error fetching menu:', error);
  }
  }
  
  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Veggie Burger', 'Bacon Burger'];
        const order = {
          burger1: burgers[Math.floor(Math.random() * burgers.length)],
          burger2: burgers[Math.floor(Math.random() * burgers.length)],
          burger3: burgers[Math.floor(Math.random() * burgers.length)]
        };
        resolve(order);
      }, 2500);
    });
  }
  
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  getMenu()
    .then(() => {
      return takeOrder();
    })
    .then(order => {
      console.log('Order received:', order);
      return orderPrep();
    })
    .then(orderStatus => {
      console.log('Order status:', orderStatus);
      return payOrder();
    })
    .then(paidStatus => {
      console.log('Paid status:', paidStatus);
      thankyouFnc();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  