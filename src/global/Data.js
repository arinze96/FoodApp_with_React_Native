export const filterData = [
    {name: 'fast food', image: require('../../images/fastfood.jpg'), id: '0'},
    {name: 'Burgers', image: require('../../images/burger.jpg'), id: '1'},
    {name: 'Sea food', image: require('../../images/seafood.jpg'), id: '2'},
    {name: 'Salads', image: require('../../images/salad.jpg'), id: '3'},
    {name: 'Hotdogs', image: require('../../images/hotdog.jpg'), id: '4'},
    {name: 'Chinese', image: require('../../images/chinesefood.jpg'), id: '5'},
    {name: 'Mexican', image: require('../../images/mexicanfood.jpg'), id: '6'},
    {name: 'Sea food', image: require('../../images/seafood.jpg'), id: '7'},
  ];

  export const filterData2 = [
    {name:"Fast Food", image:require('../../images/img11.jpg'), id:"0"},
    {name:"Burger", image:require('../../images/img12.jpg'), id:"1"},
    {name:"Salad", image:require('../../images/img13.jpg'), id:"2"},
    {name:"Hotdog", image: require('../../images/img14.jpg'), id:"3"},
    {name:"Chinese", image:require('../../images/img15.jpg'), id:"4"},
    {name:"Mexican", image:require('../../images/img11.jpg'), id:"5"},
    {name:"Sea Food", image:require('../../images/img12.jpg'), id:"6"},
    {name:"Chinese Food", image:require('../../images/img13.jpg'), id:"7"},
    {name:"Mexican Pie", image:require('../../images/img14.jpg'), id:"8"},
    {name:"Ocean Dish", image:require('../../images/img15.jpg'), id:"9"},
  ]
  
export const restaurantsData = [
    {
      restaurantName: 'Mc Donalds',
      farAway: '21.2',
      businessAddress: '22 Bessie street',
      images: require('../../images/img13.jpg'),
      averageReview: 4.9,
      numberOfReview: 272,
      coordinates: {lat: -26.1888612, lng: 28.246325},
      discount: 10,
      deliveryTime: 15,
      collectTime: 5,
      foodType: 'Burgers, Wraps, MilkShake...',
      productData: [
        {
          name: 'Hand Cut Chips',
          price: 29.3,
          images: require('../../images/img12.jpg'),
        },
        {
          name: 'Big Mac',
          price: 50.8,
          images: require('../../images/img13.jpg'),
        },
        {
          name: 'Chicken Burger',
          price: 50.8,
          images: require('../../images/img14.jpg'),
        },
      ],
      id: 0,
    },
    {
      restaurantName: 'KFC',
      farAway: '12.7',
      businessAddress: '22 Bessie street, Cape town',
      images: require('../../images/img15.jpg'),
      averageReview: 4.3,
      numberOfReview: 306,
      coordinates: {lat: -26.1891648, lng: 28.2441808},
      discount: 20,
      deliveryTime: 30,
      collectTime: 10,
      foodType: 'Chicken, Chicken wings...',
      productData: [
        {
          name: 'Hand Cut Chips',
          price: 29.3,
          images: require('../../images/img11.jpg'),
        },
        {
          name: 'Big Mac',
          price: 50.8,
          images: require('../../images/img12.jpg'),
        },
        {
          name: 'Chicken Burger',
          price: 50.8,
          images: require('../../images/img13.jpg'),
        },
      ],
      id: 1,
    },
    {
      restaurantName: 'Steers',
      farAway: '5',
      businessAddress: '17 Olivia Rd, Joharnesburg',
      images: require('../../images/img14.jpg'),
      averageReview: 4.9,
      numberOfReview: 1272,
      coordinates: {lat: -26.1888612, lng: 28.246325},
      discount: 12,
      deliveryTime: 25,
      collectTime: 15,
      foodType: 'Flame grilled beef Burgers',
      productData: [
        {
          name: 'Hand Cut Chips',
          price: 29.3,
          images: require('../../images/img15.jpg'),
        },
        {
          name: 'Big Mac',
          price: 50.8,
          images: require('../../images/img11.jpg'),
        },
        {
          name: 'Chicken Burger',
          price: 50.8,
          images: require('../../images/img12.jpg'),
        },
      ],
      id: 2,
    },
    {
      restaurantName: 'Roman Pizza',
      farAway: '7',
      businessAddress: '15 Atlas Rd, Kempton park',
      images: require('../../images/img13.jpg'),
      averageReview: 3.4,
      numberOfReview: 700,
      coordinates: {lat: -26.1888612, lng: 28.246325},
      discount: null,
      deliveryTime: 20,
      collectTime: 10,
      foodType: 'Chicken Pizza, Vegetarian Pizza....',
      productData: [
        {
          name: 'Hand Cut Chips',
          price: 29.3,
          images: require('../../images/img14.jpg'),
        },
        {
          name: 'Big Mac',
          price: 50.8,
          images: require('../../images/img15.jpg'),
        },
        {
          name: 'Chicken Burger',
          price: 70,
          images: require('../../images/img11.jpg'),
        },
      ],
      id: 3,
    },
  ];


  export const restaurantsData1 = [
    {
      restaurantName: 'Mc Donalds',
      farAway: '21.2',
      businessAddress: '22 Bessie street',
      images: require('../../images/img14.jpg'),
      averageReview: 4.9,
      numberOfReview: 272,
      coordinates: {lat: -26.1888612, lng: 28.246325},
      discount: 10,
      deliveryTime: 15,
      collectTime: 5,
      foodType: 'Burgers, Wraps, MilkShake...',
      productData: [
        {
          name: 'Hand Cut Chips',
          price: 29.3,
          images: require('../../images/img11.jpg'),
        },
        {
          name: 'Big Mac',
          price: 50.8,
          images: require('../../images/img12.jpg'),
        },
        {
          name: 'Chicken Burger',
          price: 50.8,
          images: require('../../images/img14.jpg'),
        },
      ],
      id: 0,
    },
    {
      restaurantName: 'KFC',
      farAway: '12.7',
      businessAddress: '22 Bessie street, Cape town',
      images: require('../../images/img15.jpg'),
      averageReview: 4.3,
      numberOfReview: 306,
      coordinates: {lat: -26.1891648, lng: 28.2441808},
      discount: 20,
      deliveryTime: 30,
      collectTime: 10,
      foodType: 'Chicken, Chicken wings...',
      productData: [
        {
          name: 'Hand Cut Chips',
          price: 29.3,
          images: require('../../images/img11.jpg'),
        },
        {
          name: 'Big Mac',
          price: 50.8,
          images: require('../../images/img12.jpg'),
        },
        {
          name: 'Chicken Burger',
          price: 50.8,
          images: require('../../images/img13.jpg'),
        },
      ],
      id: 1,
    },
    {
      restaurantName: 'Steers',
      farAway: '5',
      businessAddress: '17 Olivia Rd, Joharnesburg',
      images: require('../../images/img14.jpg'),
      averageReview: 4.9,
      numberOfReview: 1272,
      coordinates: {lat: -26.1888612, lng: 28.246325},
      discount: 12,
      deliveryTime: 25,
      collectTime: 15,
      foodType: 'Flame grilled beef Burgers',
      productData: [
        {
          name: 'Hand Cut Chips',
          price: 29.3,
          images: require('../../images/img15.jpg'),
        },
        {
          name: 'Big Mac',
          price: 50.8,
          images: require('../../images/img11.jpg'),
        },
        {
          name: 'Chicken Burger',
          price: 50.8,
          images: require('../../images/img12.jpg'),
        },
      ],
      id: 2,
    },
    {
      restaurantName: 'Roman Pizza',
      farAway: '7',
      businessAddress: '15 Atlas Rd, Kempton park',
      images: require('../../images/img13.jpg'),
      averageReview: 3.4,
      numberOfReview: 700,
      coordinates: {lat: -26.1888612, lng: 28.246325},
      discount: null,
      deliveryTime: 20,
      collectTime: 10,
      foodType: 'Chicken Pizza, Vegetarian Pizza....',
      productData: [
        {
          name: 'Hand Cut Chips',
          price: 29.3,
          images: require('../../images/img14.jpg'),
        },
        {
          name: 'Big Mac',
          price: 50.8,
          images: require('../../images/img15.jpg'),
        },
        {
          name: 'Chicken Burger',
          price: 70,
          images: require('../../images/img11.jpg'),
        },
      ],
      id: 3,
    },
  ];

  export const productData = [
    {
      id:0,
      name:"Hand Cut Chips",
      price: 29.30,
      image:require('../../images/cross5.jpg'),
      details:"Two 100% fresh beef burger patties that are hot, deliciously"
    },
    {
      id:1,
      name:"Big Mac",
      price: 50.00,
      image:require('../../images/cross2.jpg'),
      details:"Two 100% fresh beef burger patties that are hot, deliciously"
    },
    {
      id:2,
      name:"Chicken Burger",
      price: 70.20,
      image:require('../../images/cross3.jpg'),
      details:"Two 100% fresh beef burger patties that are hot, deliciously"
    },
    {
      id:3,
      name:"Hand Cut Chips",
      price: 29.30,
      image:require('../../images/cross4.jpg'),
      details:"Two 100% fresh beef burger patties that are hot, deliciously"
    },
    {
      id:4,
      name:"Big Mac",
      price: 50.00,
      image:require('../../images/cross1.jpg'),
      details:"Two 100% fresh beef burger patties that are hot, deliciously"
    },
    {
      id:5,
      name:"Chicken Burger",
      price: 70.20,
      image:require('../../images/cross1.jpg'),
      details:"Two 100% fresh beef burger patties that are hot, deliciously"
    },
  ]


  export const menuData = [
    {title:"BEEF", special:false, key:0},
    {title:"CHICKEN", special:false, key:1},
    {title:"VIGGIE BURGER", special:false, key:2},
    {title:"FRIES & CORN", special:false, key:3},
    {title:"SALAD", special:false, key:4},
    {title:"HAPPY MEALS", special:false, key:5},
    {title:"SAHRE BOX", special:false, key:6},
    {title:"MILKSHAKES", special:false, key:7},
    {title:"COLD DRINKS", special:false, key:8},
    {title:"DESSERTS", special:false, key:9},
    {title:"HOT DRINKS", special:false, key:10},
  ];

  export const specialData = [
    {title:"LIMITED OFFER", key:0}, 
    {title:"GO CHILLI", key:1}, 
    {title:"GO CHEESE", key:2}, 
    {title:"MCCHICKEN DELUXE", key:3}, 
  ]