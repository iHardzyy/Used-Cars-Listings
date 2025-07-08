const SUPABASE_URL = 'https://xphekmhuxggscxqzpfsp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwaGVrbWh1eGdnc2N4cXpwZnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwMDU2NjcsImV4cCI6MjA2NzU4MTY2N30.Z8zKO0uXkqr1pvvAzlDMwj-qIJEaN_42tSh4nlXNmeU';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Load all cars from database
async function loadCars() {
  const { data, error } = await supabase
    .from('cars')
    .select('*')
    .order('created_at', { ascending: false });

  const list = document.getElementById('carList');
  list.innerHTML = '';

  if (error) {
    list.innerHTML = '❌ Error loading cars.';
    console.error(error);
    return;
  }

  data.forEach(car => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${car.title}</h3>
      <img src="${car.image_url}" width="200"><br>
      <strong>Price:</strong> $${car.price}<br>
      <strong>Mileage:</strong> ${car.mileage} km<br>
      <strong>Location:</strong> ${car.location}<br>
      <p>${car.description || ''}</p>
      <hr>
    `;
    list.appendChild(div);
  });
}

// Handle form submission
document.getElementById('carForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const car = Object.fromEntries(formData.entries());

  car.price = parseFloat(car.price);
  car.mileage = parseInt(car.mileage);

  const { error } = await supabase.from('cars').insert([car]);

  if (error) {
    alert('❌ Failed to add car.');
    console.error(error);
  } else {
    form.reset();
    loadCars();
  }
});

// Initial load
loadCars();
