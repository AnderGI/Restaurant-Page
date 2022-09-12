export function renderMenuPage (){
    const container = document.getElementById('content')
    container.innerHTML = "";
    container.innerHTML = `
    <table>
     
        <tr>
            <th>Starters</th>
        </tr>
        <tr>
            <td>Timetable</td>
        </tr>
        <tr>
            <td>Location</td>
        </tr>

        <tr>
            <th>Main Dish</th>
        </tr>
        <tr>
            <td>Timetable</td>
        </tr>
        <tr>
            <td>Location</td>
        </tr>

        <tr>
            <th>Disses</th>
        </tr>
        <tr>
            <td>Timetable</td>
        </tr>
        <tr>
            <td>Location</td>
        </tr>
        <tr><th>Price: 30$</th></tr>
    </table>
    `
}