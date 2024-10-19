async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=50&nat=us');
        const data = await response.json();
        const users = data.results;
        const tbody = document.querySelector('tbody');

        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.setAttribute('itemscope', '');
            row.setAttribute('itemtype', 'https://schema.org/Person');
            row.innerHTML = `
                <td scope="row" itemprop="identifier">${index + 1}</td>
                <td itemprop="name">${user.name.first} ${user.name.last}</td>
                <td itemprop="email">${user.email}</td>
                <td itemprop="birthDate">${new Date(user.dob.date).toLocaleDateString()}</td>
                <td itemprop="gender">${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        return [];
    }
}

fetchUsers();
