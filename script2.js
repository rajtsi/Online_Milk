document.getElementById('service').addEventListener('change', function() {
    const villagerOption = document.getElementById('villagerOption');
    if (this.value === '1month') {
        villagerOption.style.display = 'block';
    } else {
        villagerOption.style.display = 'none';
    }
});

document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const service = document.getElementById('service').value;
    const quantity = document.getElementById('quantity').value;
    const specificVillager = document.getElementById('specificVillager').value;

    // Simulate matching vendors based on service type and customer preferences
    const vendors = [
        {
            name: 'Vendor A',
            area: 'Area 1',
            villagerSource: ['Villager X', 'Villager Y'],
            services: ['1day', '1month']
        },
        {
            name: 'Vendor B',
            area: 'Area 2',
            villagerSource: ['Villager Z'],
            services: ['1day']
        }
    ];

    // Clear previous vendor list
    const vendorList = document.getElementById('vendorList');
    vendorList.innerHTML = '';

    // Filter and display matching vendors
    vendors.forEach(vendor => {
        if (vendor.services.includes(service)) {
            let vendorItem = `<li><strong>${vendor.name}</strong><br>Delivery Area: ${vendor.area}<br>Milk Collected From: ${vendor.villagerSource.join(', ')}`;

            if (service === '1month' && specificVillager === 'yes') {
                vendorItem += `<br><button onclick="contactVillager('${vendor.villagerSource.join(', ')}')">Contact Villager</button>`;
            }

            vendorItem += '</li>';
            vendorList.innerHTML += vendorItem;
        }
    });

    // Show the matching vendors section
    document.getElementById('matchingVendors').style.display = 'block';
});

function contactVillager(villagers) {
    alert(`Contacting: ${villagers}`);
}
