async function postData() {
  try {
    const response = await fetch("http://localhost:4000/api/order/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      
  orderItems: [
    {
      product: "687e4ac72432764a58b14389", // Example product ObjectId
      name: "Product Name",
      quantity: 2,
      price: 1500
    },
    {
      product: "687e4ac72432764a58b14389",
      name: "Another Product",
      quantity: 1,
      price: 2000
    }
  ],
  fullName: "Usama Saleem",
  address: "123 Street Name",
  city: "Karachi",
  postalCode: "75000",
  shippingPrice: 250,
  totalPrice: 3750,
  status: "pending" // Optional (defaults to pending)
,
        
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjY4N2QzOTNiNTk1MjU0YWYzYTYxMmQ0NiIsImVtYWlsIjoic2FpZmljaGVlbWE2NzVAZ21haWwuY29tIn0sImdlbmVyYXRlZFRpbWUiOjE3NTMwMzc0NTk5NDAsImlhdCI6MTc1MzAzNzQ1OX0.gTUil1kFrCW8Bs6jtUzgejW9HEUvxcva3QrMpFA5hiA", age: 25 })
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

postData();
