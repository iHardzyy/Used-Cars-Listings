const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-key';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadCars() {
  const { data, error } = await supabase.from('cars').select('*').order('created_at', { ascending: false });
  const list = document.getElementById('carList');
  list.innerHTML = '';
  if (error) {
    list.innerHTML = 'Error loading cars.';
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

loadCars();

document.getElementById('carForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const car = Object.fromEntries(formData.entries());
  car.price = parseFloat(car.price);
  car.mileage = parseInt(car.mileage);
  const { error } = await supabase.from('cars').insert([car]);
  if (error) {
    alert('Error adding car.');
  } else {
    form.reset();
    loadCars();
  }
});
