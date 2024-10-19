async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=50&nat=us');
        const data = await response.json();
        const users = data.results;

        const tbody = document.querySelector('tbody');

        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name.first} ${user.name.last}</td>
        <td>${user.email}</td>
        <td>${new Date(user.dob.date).toLocaleDateString()}</td>
        <td>${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</td>
      `;
            tbody.appendChild(row);
        });
    } catch (error) {
        return [];
    }
}

fetchUsers();
