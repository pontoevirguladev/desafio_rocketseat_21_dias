const td = document.querySelectorAll("td");
const result = document.getElementById('result');
var expression = '';

td.forEach((item) => {
    item.onclick = () => {

        if (item.id != 'del' && item.id != 'ac' && item.id != 'equals') {
            result.innerHTML += item.innerHTML;
            expression += item.id.toString();
        }

        if (item.id == 'ac') {
            result.innerHTML = '';
            expression = '';
        }

        if (item.id == 'del') {
            result.innerHTML = result.innerHTML.slice(0, -1);
            expression = expression.slice(0, -1); 0
        }

        if (item.id == 'equals') {
            result.innerHTML = eval(expression);
        }

    }
});