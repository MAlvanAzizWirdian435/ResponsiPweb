document.getElementById('transaksiData').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('process.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const table = document.getElementById('transaksiTable').getElementsByTagName('tbody')[0];
            const baris = table.insertRow();

            const sel1 = baris.insertCell(0);
            const sel2 = baris.insertCell(1);
            const sel3 = baris.insertCell(2);

            sel1.textContent = formData.get('nama');
            sel2.textContent = formData.get('jenis');
            sel3.textContent = formData.get('liter');
        } else {
            alert('Error');
        }
    })
    .catch(error => console.error('Error:', error));
});
