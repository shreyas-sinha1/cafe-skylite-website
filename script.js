/* ===== Cafe Skylite - Interactive JavaScript ===== */

// Menu data
const MENU_DATA = {
  menu: [
    { section: "Soups", items: [
      { name: "Broccoli Soup (Non-Veg)", description: "Creamy broccoli soup with herbs and tender chicken.", price: 230 },
      { name: "Broccoli Soup (Veg)", description: "Vegetarian broccoli soup blended with fresh herbs.", price: 208 },
      { name: "Chicken Shorba", description: "Aromatic spiced chicken broth, perfect for winters.", price: 219 },
      { name: "Clear Soup (Non-Veg)", description: "Clear chicken broth with aromatic Indian spices.", price: 230 },
      { name: "Clear Soup (Veg)", description: "Clear vegetable broth infused with herbs and spices.", price: 208 },
      { name: "Cream of Tomato Soup", description: "Rich tomato soup finished with cream and basil.", price: 219 },
      { name: "Corn Shorba", description: "Sweet corn soup with mild spices and creamy texture.", price: 186 },
      { name: "Cream of Chicken Soup – Skylite Special", description: "Hearty chicken soup enhanced with a special spice blend.", price: 274 },
      { name: "Manchow Soup (Non-Veg)", description: "Spicy Indo-Chinese soup served with crunchy noodles.", price: 230 },
      { name: "Manchow Soup (Veg)", description: "Spicy Indo-Chinese vegetable soup served with crispy noodles.", price: 208 },
      { name: "Lemon Coriander Soup (Non-Veg)", description: "Tangy soup with lemon and coriander over chicken broth.", price: 230 },
      { name: "Lemon Coriander Soup (Veg)", description: "Tangy soup with lemon and coriander over vegetable broth.", price: 208 },
      { name: "Hot & Sour Soup (Non-Veg)", description: "Classic hot and sour chicken soup with mixed vegetables.", price: 230 },
      { name: "Hot & Sour Soup (Veg)", description: "Classic hot and sour soup loaded with veggies.", price: 208 },
      { name: "Tom Yum Soup (Non-Veg)", description: "Thai-style spicy and sour chicken soup with herbs.", price: 230 },
      { name: "Tom Yum Soup (Veg)", description: "Thai-style spicy and sour vegetable soup with herbs.", price: 208 },
      { name: "Minestrone Soup", description: "Italian vegetable soup with herbs and pasta.", price: 208 },
      { name: "Smoky Garlic Soup (Non-Veg)", description: "Garlic-flavored soup with a smoky tandoori twist.", price: 230 },
      { name: "Smoky Garlic Soup (Veg)", description: "Vegetarian garlic soup with a smoky twist.", price: 208 },
      { name: "Sweet Corn Soup (Non-Veg)", description: "Classic sweet corn and chicken soup.", price: 230 },
      { name: "Sweet Corn Soup (Veg)", description: "Classic creamy sweet corn soup with veggies.", price: 208 }
    ]},
    { section: "Salads", items: [
      { name: "Classic Chicken Caesar Salad", description: "Crisp lettuce with grilled chicken, croutons, and Caesar dressing.", price: 250 },
      { name: "Grilled Chicken Tikka Salad", description: "Tandoori chicken pieces over fresh greens with spice dressing.", price: 260 },
      { name: "Mexican Chicken Salad", description: "Spiced grilled chicken with corn, beans, and chipotle dressing.", price: 260 },
      { name: "Roast Chicken Salad", description: "Roasted chicken with mixed greens and vinaigrette.", price: 260 },
      { name: "Spinach Basa Salad", description: "Fresh spinach leaves with basa fish fillets and veggies.", price: 270 },
      { name: "Caesar Salad", description: "Romaine lettuce with Parmesan, croutons, and Caesar dressing.", price: 200 },
      { name: "Fresh Green Salad", description: "Mixed greens with cucumber, carrot, beetroot and vinaigrette.", price: 180 },
      { name: "Mexican Salad", description: "Mixed vegetables with lime dressing and olives.", price: 200 },
      { name: "Russian Salad", description: "Potato and vegetable salad with creamy mayonnaise dressing.", price: 180 }
    ]},
    { section: "Appetizers", items: [
      { name: "Bruschetta", description: "Crunchy garlic bread topped with tomato and basil.", price: 150 },
      { name: "Cheese Garlic Bread", description: "Toasted bread topped with garlic butter and cheese.", price: 160 },
      { name: "Cheese Poppers", description: "Crispy cheese-stuffed jalapeños served with dip.", price: 170 },
      { name: "French Fries", description: "Deep-fried potatoes with paprika seasoning.", price: 120 },
      { name: "Peri Peri French Fries", description: "Spicy Peri Peri seasoned fried potatoes.", price: 130 },
      { name: "Stuffed Mushrooms", description: "Button mushrooms stuffed with herbs and cheese.", price: 180 },
      { name: "Cajun Chicken Balls", description: "Spicy Cajun-seasoned chicken meatballs.", price: 180 },
      { name: "Creamy Garlic Chicken", description: "Grilled chicken with rich garlic cream sauce.", price: 190 },
      { name: "Crunchy Fish Sticks", description: "Crispy battered fish fingers with tartar sauce.", price: 200 },
      { name: "Fish & Chips", description: "Battered fish fillets with fries and tartar sauce.", price: 220 },
      { name: "Peri Peri Chicken Wings", description: "Spicy marinated chicken wings in Peri Peri sauce.", price: 220 },
      { name: "Triple Dipper (Non-Veg)", description: "Assorted three non-veg appetizers served with dips.", price: 250 }
    ]},
    { section: "Tandoor", items: [
      { name: "Khumbh Ka Khazana", description: "Tandoori marinated whole mushrooms.", price: 150 },
      { name: "Malai Paneer Tikka", description: "Creamy cottage cheese cubes marinated in white sauce.", price: 180 },
      { name: "Multani Stuffed Mushroom Tikka", description: "Mushrooms stuffed with spicy filling and grilled.", price: 180 },
      { name: "Paneer Afghani Tikka", description: "Cottage cheese cubes marinated with Afghani spices.", price: 170 },
      { name: "Paneer Pudina Tikka", description: "Mint-marinated cottage cheese cubes.", price: 170 },
      { name: "Paneer Tikka Achari", description: "Pickle-spiced cottage cheese cubes.", price: 170 },
      { name: "Paneer Tikka Haryali", description: "Green marinade on cottage cheese cubes.", price: 170 },
      { name: "Paneer Tikka", description: "Classic tandoori cottage cheese cubes.", price: 160 },
      { name: "Veg Makhmali Seekh Kebab", description: "Mixed vegetable kebab with chef's special seasoning.", price: 180 },
      { name: "Chicken Black Pepper Tikka", description: "Boneless chicken marinated with black pepper and grilled.", price: 220 },
      { name: "Chicken Galouti Kebab", description: "Melting spiced minced chicken kebabs.", price: 220 },
      { name: "Chicken Malai Kebab", description: "Boneless chicken cubes marinated in creamy sauce.", price: 220 },
      { name: "Chicken Pudina Tikka", description: "Mint-flavored boneless chicken pieces.", price: 220 },
      { name: "Chicken Reshmi Kebab", description: "Soft cashew and spice marinated chicken pieces.", price: 230 },
      { name: "Chicken Seekh Kebab", description: "Minced chicken skewers grilled with spices.", price: 220 },
      { name: "Chicken Tikka Achari", description: "Pickle-flavored chicken tikka pieces.", price: 220 },
      { name: "Fish Amritsari", description: "Spiced fried fish bites with chutney.", price: 220 },
      { name: "Fish Tikka", description: "Marinated fish cubes grilled in tandoor.", price: 220 },
      { name: "Lahsuni Prawns", description: "Garlic-flavored grilled jumbo prawns.", price: 300 },
      { name: "Leg Kebab", description: "Whole chicken leg marinated in special spices.", price: 300 },
      { name: "Mustard Fish Tikka", description: "Fish cubes marinated with mustard and spices.", price: 220 }
    ]},
    { section: "Chinese", items: [
      { name: "Baby Corn Chilli Gravy", description: "Spicy dry-fried baby corn with chilli and gravy.", price: 180 },
      { name: "Chilli Paneer (Dry/Fry)", description: "Spicy Indo-Chinese cottage cheese (available dry or fried).", price: 200 },
      { name: "Chilli Mushroom (Dry/Fry)", description: "Spicy Indo-Chinese mushrooms (dry or fried).", price: 190 },
      { name: "Chilli Baby Corn (Dry/Fry)", description: "Spicy Indo-Chinese baby corn (dry or fried).", price: 180 },
      { name: "Chilli Potato (Dry/Fry)", description: "Spicy Indo-Chinese potatoes (dry or fried).", price: 160 },
      { name: "Golden Fried Baby Corn", description: "Crispy batter-fried baby corn.", price: 180 },
      { name: "Green Garlic Cottage Cheese", description: "Fried cottage cheese with garlic and veggies.", price: 200 },
      { name: "Honey Chilli Potato", description: "Crispy potatoes tossed in sweet chilli-honey sauce.", price: 170 },
      { name: "Paneer 65", description: "South-Indian style fried spiced cottage cheese.", price: 200 },
      { name: "Paneer Chilli Gravy", description: "Spicy gravy dish with paneer and green chillies.", price: 200 },
      { name: "Veg Manchurian Balls", description: "Fried veg balls in tangy Indo-Chinese sauce.", price: 180 },
      { name: "Veg Spring Rolls", description: "Crispy rolls stuffed with seasoned veggies.", price: 150 },
      { name: "Asian Green Garlic Chicken", description: "Fried chicken with green garlic Indo-Chinese style.", price: 220 },
      { name: "Chicken 65", description: "Deep-fried spicy boneless chicken.", price: 220 },
      { name: "Chicken Black Pepper", description: "Peppery wok-fried chicken with vegetables.", price: 220 },
      { name: "Chicken Chilli Garlic", description: "Spicy chicken with chilli garlic sauce.", price: 220 },
      { name: "Chicken Lollipop", description: "Fried chicken drumettes served with hot sauce.", price: 230 },
      { name: "Chicken Salt & Pepper", description: "Crispy chicken pieces seasoned with salt and pepper.", price: 220 },
      { name: "Chicken Spring Rolls", description: "Crispy rolls stuffed with spicy chicken.", price: 180 },
      { name: "Drums of Heaven", description: "Fried chicken wings served with chilli-garlic sauce.", price: 220 },
      { name: "Fish Chilli Garlic", description: "Spicy fried fish with chilli-garlic sauce.", price: 220 },
      { name: "Fish Salt & Pepper", description: "Crispy fish cubes with salt and pepper seasoning.", price: 220 },
      { name: "Golden Fried Prawns", description: "Crispy batter-fried jumbo prawns.", price: 300 },
      { name: "Kung Pao Chicken", description: "Wok-fried chicken with peanuts and spices.", price: 230 },
      { name: "Pepper Garlic Fish Chilli", description: "Fried fish with spicy pepper-garlic sauce.", price: 230 },
      { name: "Prawns Chilli Garlic", description: "Fried prawns tossed in chilli-garlic sauce.", price: 300 },
      { name: "Prawns Salt & Pepper", description: "Crispy prawns with salt and pepper seasoning.", price: 300 },
      { name: "Spicy Chicken Wings", description: "Crispy fried chicken wings in spicy sauce.", price: 230 },
      { name: "Skylite Tandoori Platter (Non-Veg)", description: "Mix of tandoori chicken, fish, and prawns.", price: 500 },
      { name: "Skylite Tandoori Platter (Veg)", description: "Mix of vegetarian kebabs and tikka specialities.", price: 450 }
    ]},
    { section: "Sandwiches", items: [
      { name: "American Club Grilled Sandwich", description: "Grilled triple-decker sandwich with multiple fillings.", price: 140 },
      { name: "Veg Grilled Sandwich", description: "Grilled bread sandwich stuffed with fresh veggies.", price: 130 },
      { name: "Grilled Paneer Tikka Sandwich", description: "Grilled sandwich with spicy paneer tikka filling.", price: 150 },
      { name: "Chicken Club Sandwich", description: "Triple-decker sandwich with grilled chicken and veggies.", price: 160 },
      { name: "Grilled Chicken Tikka Sandwich", description: "Spicy chicken tikka in a grilled sandwich.", price: 160 },
      { name: "Roast Chicken Sandwich", description: "Sandwich filled with seasoned roast chicken slices.", price: 160 },
      { name: "Spicy Chicken Sandwich", description: "Grilled spicy chicken sandwich with veggies.", price: 160 }
    ]},
    { section: "Burgers", items: [
      { name: "Skylite Chicken Burger", description: "Seasoned chicken patty burger with lettuce and sauce.", price: 180 },
      { name: "Crispy Chicken Burger", description: "Crispy breaded chicken patty burger.", price: 180 },
      { name: "Double Cheese Skylite Burger", description: "Juicy chicken burger loaded with double cheese.", price: 190 },
      { name: "Grilled Chicken Burger", description: "Grilled chicken patty with lettuce and mayo.", price: 180 },
      { name: "Open-Face Chicken Burger", description: "Open-faced bun with grilled chicken and veggies.", price: 170 },
      { name: "Skylite Veg Burger", description: "Seasoned vegetable patty burger with lettuce and sauce.", price: 150 },
      { name: "Crispy Veg Patty Burger", description: "Crispy vegetable patty burger with cheese.", price: 150 },
      { name: "Double Cheese Veg Burger", description: "Veg patty burger with double cheese.", price: 160 },
      { name: "Open-Face Veg Burger", description: "Open-faced bun with grilled veggies and sauce.", price: 150 }
    ]},
    { section: "Pizza", items: [
      { name: "Four Seasons Pizza", description: "Classic pizza with onions, capsicum, peppers, and corn.", price: 350 },
      { name: "Margherita Pizza", description: "Traditional pizza with tomato, basil, and mozzarella.", price: 300 },
      { name: "Peri Peri Veg Pizza", description: "Spicy veg pizza with jalapeños and bell peppers.", price: 360 },
      { name: "Skylite Special Veg Pizza", description: "Veg pizza with chipotle paneer and jalapeños.", price: 380 },
      { name: "Tandoori Paneer Pizza", description: "Pizza topped with tandoori-spiced paneer and mint mayo.", price: 360 },
      { name: "Chicken Tandoori Pizza", description: "Pizza with spicy roasted chicken and cheddar cheese.", price: 400 },
      { name: "Peri Peri Chicken Pizza", description: "Spicy chicken pizza with jalapeños and chili flakes.", price: 400 },
      { name: "Pesto Chicken Pizza", description: "Grilled chicken pizza with pesto and feta cheese.", price: 420 },
      { name: "Roast Chicken Pizza", description: "Pizza with pepper, roast chicken and fresh veggies.", price: 420 },
      { name: "Seafood Mexican Delight Pizza", description: "Seafood pizza with peppers and onions.", price: 450 }
    ]},
    { section: "Pasta", items: [
      { name: "Chicken Creamy Pesto Pasta", description: "Pasta in creamy pesto sauce with chicken.", price: 300 },
      { name: "Chicken Tangy Arrabiata Pasta", description: "Pasta in spicy tomato garlic sauce with chicken.", price: 300 },
      { name: "Chicken White Alfredo Pasta", description: "Creamy Alfredo pasta with chicken.", price: 300 },
      { name: "Veg Creamy Pesto Pasta", description: "Pasta in creamy pesto sauce with veggies.", price: 270 },
      { name: "Veg Tangy Arrabiata Pasta", description: "Pasta in spicy tomato garlic sauce with veggies.", price: 270 },
      { name: "Veg White Alfredo Pasta", description: "Creamy Alfredo pasta with mixed vegetables.", price: 270 }
    ]},
    { section: "Indian Veg", items: [
      { name: "Aloo Gobi Masala", description: "Potato and cauliflower curry with classic spices.", price: 180 },
      { name: "Jeera Aloo", description: "Cumin-flavored dry potato curry.", price: 160 },
      { name: "Kadhai Mushroom Masala", description: "Mushrooms and peppers in spicy gravy.", price: 180 },
      { name: "Kadhai Paneer", description: "Cottage cheese and peppers in tomato gravy.", price: 180 },
      { name: "Khumb Masala", description: "Button mushrooms cooked in Indian spices.", price: 180 },
      { name: "Malai Kofta", description: "Creamy kofta curry in Nawabi style.", price: 200 },
      { name: "Mixed Veg Kofta", description: "Mixed vegetable balls in creamy curry.", price: 200 },
      { name: "Mixed Vegetables Curry", description: "Assorted veggies in mild spiced gravy.", price: 170 },
      { name: "Nargisi Kofta", description: "Egg-stuffed kofta in rich gravy.", price: 200 },
      { name: "Palak Corn", description: "Spinach and sweet corn curry.", price: 160 },
      { name: "Palak Paneer", description: "Spinach curry with paneer cubes.", price: 180 },
      { name: "Paneer Butter Masala", description: "Paneer cubes in buttery tomato gravy.", price: 180 },
      { name: "Paneer Lababdar", description: "Onion-tomato gravy with paneer cubes.", price: 180 },
      { name: "Paneer Tikka Masala", description: "Tandoori paneer in rich spiced gravy.", price: 180 },
      { name: "Shahi Paneer", description: "Creamy cashew-gravy curry with paneer cubes.", price: 180 },
      { name: "Veg Jalfrezi", description: "Bell peppers and paneer in tangy sauce.", price: 180 },
      { name: "Veg Kolhapuri", description: "Spicy Kolhapuri-style paneer curry.", price: 180 },
      { name: "Veg Navratan Korma", description: "Mixed veggies in creamy cashew gravy.", price: 200 }
    ]},
    { section: "Indian Non-Veg", items: [
      { name: "Butter Chicken Masala (4 pcs)", description: "Punjab's famous creamy tomato chicken curry.", price: 220 },
      { name: "Chicken Dehati (4 pcs)", description: "Rustic spicy chicken curry with onion base.", price: 220 },
      { name: "Chicken Do Pyaza (4 pcs)", description: "Chicken curry cooked with double onions.", price: 220 },
      { name: "Chicken Kolhapuri (4 pcs)", description: "Spicy Kolhapuri-style chicken curry.", price: 220 },
      { name: "Chicken Rara (4 pcs)", description: "Chicken pieces cooked with minced chicken in gravy.", price: 220 },
      { name: "Chicken Tikka Lababdar (4 pcs)", description: "Boneless chicken in rich onion gravy.", price: 220 },
      { name: "Chicken Tikka Masala (4 pcs)", description: "Chicken tikka in creamy masala sauce.", price: 220 },
      { name: "Kadhai Chicken (4 pcs)", description: "Chicken pieces with capsicum and onions in spicy gravy.", price: 220 },
      { name: "Mahi Fish Masala", description: "Boneless fish cooked in home-style mustard gravy.", price: 220 },
      { name: "Murgh Bihari (4 pcs)", description: "Spicy chicken with bone in special masala.", price: 220 },
      { name: "Mustard Fish Curry", description: "Classic mustard fish curry.", price: 220 },
      { name: "Mutton Kadhai Gosht (4 pcs)", description: "Mutton pieces with capsicum in spicy gravy.", price: 240 },
      { name: "Mutton Rara Gosht", description: "Mutton cooked with minced meat in rich gravy.", price: 240 },
      { name: "Mutton Rogan Josh (4 pcs)", description: "Slow-cooked mutton in aromatic gravy.", price: 240 },
      { name: "Prawns Tawa Masala", description: "Jumbo prawns in coconut-based curry.", price: 300 },
      { name: "Spicy Egg Masala", description: "Hard-boiled eggs in spiced curry.", price: 150 }
    ]},
    { section: "Dal & Lentils", items: [
      { name: "Dal Dhaba", description: "Rich mixed dal in smoky home-style gravy.", price: 130 },
      { name: "Dal Fry", description: "Classic buttery yellow lentils.", price: 120 },
      { name: "Dal Makhani", description: "Black lentils and kidney beans simmered in butter.", price: 130 },
      { name: "Dal Tadka", description: "Yellow lentils tempered with garlic and cumin.", price: 130 },
      { name: "Skylite Special Dal", description: "Chef's special mix of lentils with spices.", price: 130 }
    ]},
    { section: "Continental", items: [
      { name: "Boondi Raita", description: "Yogurt with boondi and spices.", price: 80 },
      { name: "Cajun Cottage Cheese Steak", description: "Grilled cottage cheese with Cajun spices.", price: 300 },
      { name: "Grilled Cottage Cheese Steak", description: "Grilled cottage cheese served with tomato sauce and rice.", price: 300 },
      { name: "Mix Raita", description: "Mixed fruit and vegetable yogurt raita.", price: 80 },
      { name: "Mushroom Duet", description: "Stuffed and grilled mushrooms with sides.", price: 280 },
      { name: "Veg Lasagna", description: "Layered pasta with veggies and cheese.", price: 280 },
      { name: "Triple Decker Veg", description: "Layered veggies with sauces.", price: 250 },
      { name: "Veg Steak with Basil", description: "Veggie patty with basil sauce.", price: 260 },
      { name: "Chicken Lasagna", description: "Layered pasta with chicken and cheese.", price: 300 },
      { name: "Chicken Steak", description: "Grilled chicken with sauce and vegetables.", price: 300 },
      { name: "Grilled Fish with Garlic Butter", description: "Fish fillet in butter garlic sauce with vegetables.", price: 300 },
      { name: "Jalapeño Popper Chicken", description: "Crispy chicken stuffed with jalapeño and cheese.", price: 320 }
    ]},
    { section: "Noodles & Rice", items: [
      { name: "Egg Noodles", description: "Stir-fried noodles with eggs and veggies.", price: 150 },
      { name: "Chicken Hakka Noodles", description: "Stir-fried noodles with chicken and mixed vegetables.", price: 180 },
      { name: "Veg Hakka Noodles", description: "Stir-fried noodles with mixed vegetables.", price: 150 },
      { name: "Chicken Chilli Garlic Noodles", description: "Noodles with spicy chilli and chicken.", price: 180 },
      { name: "Chicken Chow Mein", description: "Stir-fried noodles with chicken and vegetables.", price: 180 },
      { name: "Veg Chow Mein", description: "Stir-fried noodles with fresh vegetables.", price: 150 },
      { name: "Chicken Fried Rice", description: "Fried rice with chicken and vegetables.", price: 180 },
      { name: "Veg Fried Rice", description: "Fried rice with mixed vegetables.", price: 150 },
      { name: "Egg Fried Rice", description: "Fried rice with eggs and vegetables.", price: 160 }
    ]},
    { section: "Biryani", items: [
      { name: "Hyderabadi Chicken Biryani", description: "Spiced rice layered with marinated chicken.", price: 320 },
      { name: "Chicken Tikka Biryani", description: "Biryani with chicken tikka chunks and herbs.", price: 320 },
      { name: "Egg Biryani", description: "Biryani cooked with whole boiled eggs.", price: 300 },
      { name: "Paneer Biryani", description: "Biryani with spicy paneer and herbs.", price: 300 },
      { name: "Skylite Special Mixed Biryani", description: "Chef's special biryani with chicken, prawns, and egg.", price: 350 }
    ]},
    { section: "Rice", items: [
      { name: "Steamed Basmati Rice", description: "Plain steamed basmati rice.", price: 80 },
      { name: "Jeera Rice", description: "Fragrant rice tossed with cumin.", price: 90 },
      { name: "Peas Pulao", description: "Rice with green peas and mild spices.", price: 100 },
      { name: "Ghee Rice", description: "Flavored rice cooked in ghee with cashews.", price: 100 }
    ]},
    { section: "Breads", items: [
      { name: "Tandoori Roti", description: "Whole wheat flatbread cooked in tandoor.", price: 20 },
      { name: "Butter Naan", description: "Soft naan brushed with butter.", price: 30 },
      { name: "Garlic Naan", description: "Naan topped with garlic and cilantro.", price: 40 },
      { name: "Cheese Naan", description: "Naan stuffed with cheese.", price: 50 },
      { name: "Aloo Paratha", description: "Flatbread stuffed with spiced potatoes.", price: 40 },
      { name: "Missi Roti", description: "Flatbread made with gram flour and spices.", price: 30 }
    ]},
    { section: "Desserts", items: [
      { name: "Hot Chocolate Brownie", description: "Warm chocolate brownie with hot sauce.", price: 120 },
      { name: "Hot Gulab Jamun", description: "Fried milk dumplings soaked in sugar syrup.", price: 100 }
    ]}
  ]
};

// Render menu cards
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  let index = 0;

  MENU_DATA.menu.forEach(sectionData => {
    if (filter !== 'all' && filter !== sectionData.section) return;
    sectionData.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.style.animationDelay = `${index * 0.02}s`;
      card.innerHTML = `
        <span class="menu-card-section">${sectionData.section}</span>
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <span class="price">₹${item.price}</span>
      `;
      grid.appendChild(card);
      index++;
    });
  });
}

// Filter buttons
function initMenuFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const section = btn.dataset.section;
      renderMenu(section);
    });
  });
}

// Scroll reveal
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  reveals.forEach(el => observer.observe(el));
}

// Nav scroll effect
function initNavScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}

// Mobile nav toggle
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle?.classList.remove('active');
    });
  });
}

// Reserve form
function initReserveForm() {
  const form = document.getElementById('reserveForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = "Thanks! We'll confirm your reservation shortly. You can also call +91 90310 23202 or WhatsApp us.";
    const waMsg = encodeURIComponent(`Hi, I'd like to reserve a table at Cafe Skylite. ${[...new FormData(form)].map(([k,v]) => `${k}: ${v}`).join(', ')}`);
    const link = `https://wa.me/919031023202?text=${waMsg}`;
    window.open(link, '_blank');
    alert(msg);
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  initMenuFilters();
  initScrollReveal();
  initNavScroll();
  initMobileNav();
  initReserveForm();
  initSmoothScroll();
});
