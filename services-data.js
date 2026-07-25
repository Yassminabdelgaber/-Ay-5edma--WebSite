// ================= SHARED SERVICES DATA =================
// Central source of truth for every service across all categories.
// Used by booking.html (and furniture-details.html) so any service,
// from any category page, can be looked up and booked consistently.

const allServices = {

  cleaning: [
    { id: 1, name: "Home Cleaning", image: "img/home-cleaning.jpg", rating: 4.9, price: 150, duration: "2 Hours", availability: "Available Every Day" },
    { id: 2, name: "Kitchen Cleaning", image: "img/kitchen-cleaning.jpg", rating: 4.9, price: 200, duration: "3 Hours", availability: "Available Sat - Thu" },
    { id: 3, name: "Deep Cleaning", image: "img/deep-cleaning.jpg", rating: 5.0, price: 300, duration: "4 Hours", availability: "24 / 7" },
    { id: 4, name: "Carpet Cleaning", image: "img/carpet-cleaning.jpg", rating: 4.7, price: 180, duration: "2 Hours", availability: "Available Every Day" },
    { id: 5, name: "Sofa Cleaning", image: "img/sofa-cleaning.jpg", rating: 4.8, price: 250, duration: "2 Hours", availability: "Available Every Day" },
    { id: 6, name: "Window Cleaning", image: "img/window-cleaning.jpg", rating: 4.6, price: 120, duration: "1 Hour", availability: "Mon - Fri" }
  ],

  electrical: [
    { id: 1, name: "Electrical Repair", image: "img/electrical-repair.jpg", rating: 4.9, price: 250, duration: "2 Hours", availability: "Available Every Day" },
    { id: 2, name: "Lighting Installation", image: "img/lighting.jpg", rating: 4.8, price: 300, duration: "2 Hours", availability: "Available Every Day" },
    { id: 3, name: "Wiring Installation", image: "img/wiring.jpg", rating: 4.9, price: 500, duration: "4 Hours", availability: "Sat - Thu" },
    { id: 4, name: "Electrical Inspection", image: "img/electrical-inspection.jpg", rating: 4.7, price: 200, duration: "1 Hour", availability: "Every Day" },
    { id: 5, name: "Power Backup Installation", image: "img/power-backup.jpg", rating: 4.8, price: 700, duration: "5 Hours", availability: "Available Every Day" },
    { id: 6, name: "Emergency Electrical Service", image: "img/electrical-emergency.jpg", rating: 5.0, price: 400, duration: "1 Hour", availability: "24 / 7" }
  ],

  maintenance: [
    { id: 1, name: "Home Repair", image: "img/home-repair.jpg", rating: 4.9, price: 250, duration: "2 Hours", availability: "Available Every Day" },
    { id: 2, name: "AC Maintenance", image: "img/ac-maintenance.jpg", rating: 4.8, price: 300, duration: "2 Hours", availability: "Available Every Day" },
    { id: 3, name: "Electrical Maintenance", image: "img/electrical-maintenance.jpg", rating: 4.9, price: 220, duration: "1.5 Hours", availability: "24 / 7" },
    { id: 4, name: "Water System Repair", image: "img/water-repair.jpg", rating: 4.7, price: 280, duration: "2 Hours", availability: "Available Every Day" },
    { id: 5, name: "Kitchen Maintenance", image: "img/kitchen-maintenance.jpg", rating: 4.8, price: 350, duration: "3 Hours", availability: "Sat - Thu" },
    { id: 6, name: "Emergency Maintenance", image: "img/emergency-maintenance.jpg", rating: 5.0, price: 400, duration: "1 Hour", availability: "24 / 7" }
  ],

  moving: [
    { id: 1, name: "Home Moving", image: "img/home-moving.jpg", rating: 4.9, price: 600, duration: "5 Hours", availability: "Available Every Day" },
    { id: 2, name: "Furniture Moving", image: "img/furniture-moving.jpg", rating: 4.8, price: 400, duration: "3 Hours", availability: "Available Every Day" },
    { id: 3, name: "Packing Service", image: "img/packing.jpg", rating: 4.9, price: 300, duration: "2 Hours", availability: "24 / 7" },
    { id: 4, name: "Apartment Moving", image: "img/apartment-moving.jpg", rating: 4.9, price: 1000, duration: "7 Hours", availability: "Every Day" },
    { id: 5, name: "Loading & Unloading", image: "img/loading.jpg", rating: 4.8, price: 250, duration: "2 Hours", availability: "Daily" },
    { id: 6, name: "Emergency Moving", image: "img/emergency-moving.jpg", rating: 5.0, price: 900, duration: "4 Hours", availability: "24 / 7" }
  ],

  plumbing: [
    { id: 1, name: "Pipe Repair", image: "img/pipe-repair.jpg", rating: 4.9, price: 250, duration: "2 Hours", availability: "Available Every Day" },
    { id: 2, name: "Water Leakage Repair", image: "img/water-leak.jpg", rating: 4.8, price: 300, duration: "2 Hours", availability: "24 / 7" },
    { id: 3, name: "Bathroom Installation", image: "img/bathroom-installation.jpg", rating: 4.9, price: 600, duration: "5 Hours", availability: "Available Every Day" },
    { id: 4, name: "Kitchen Plumbing", image: "img/kitchen-plumbing.jpg", rating: 4.7, price: 350, duration: "3 Hours", availability: "Sat - Thu" },
    { id: 5, name: "Drain Cleaning", image: "img/drain-cleaning.jpg", rating: 4.8, price: 200, duration: "1 Hour", availability: "Available Every Day" },
    { id: 6, name: "Emergency Plumbing", image: "img/plumbing-emergency.jpg", rating: 5.0, price: 450, duration: "1 Hour", availability: "24 / 7" }
  ],

  furniture: [
    { id: 1, name: "Furniture Assembly", image: "img/furniture-assembly.jpg", rating: 4.9, price: 300, duration: "2 Hours", availability: "Available Every Day" },
    { id: 2, name: "Wardrobe Installation", image: "img/wardrobe.jpg", rating: 4.8, price: 450, duration: "3 Hours", availability: "Available Every Day" },
    { id: 3, name: "Kitchen Furniture Installation", image: "img/kitchen-furniture.jpg", rating: 4.9, price: 700, duration: "4 Hours", availability: "Sat - Thu" },
    { id: 4, name: "Bed Assembly", image: "img/bed-assembly.jpg", rating: 4.7, price: 250, duration: "1.5 Hours", availability: "Available Every Day" },
    { id: 5, name: "TV Unit Installation", image: "img/tv-unit.jpg", rating: 4.8, price: 350, duration: "2 Hours", availability: "Available Every Day" },
    { id: 6, name: "Office Furniture Setup", image: "img/office-furniture.jpg", rating: 5.0, price: 600, duration: "3 Hours", availability: "Every Day" }
  ]

};

// Human-readable category labels (used in the booking summary)
const categoryLabels = {
  cleaning: "Cleaning",
  electrical: "Electrical",
  maintenance: "Maintenance",
  moving: "Moving",
  plumbing: "Plumbing",
  furniture: "Furniture"
};

// Helper: find a service by category + id
function findService(category, id){
  const list = allServices[category];
  if(!list) return null;
  return list.find(item => item.id === id) || null;
}
