document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('name');
    const roleElement = document.getElementById('role');
    const roles = ['Coder by Day', 'Reader by Night', 'Blogger by Weekends', 'Mechatronics Engineer by Profession'];
    let roleIndex = 0;

    function changeRole() {
        roleElement.textContent = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setInterval(changeRole, 2000);
});
