var $data = $('#data');
var $search = $('#search');
var $output = $('#output');
var query, re, bank = [];
$data.on('input', function (e) {
    bank = e.target.value.split(' ');
    console.log(bank);
});
$search.on('input', function (e) {
    if (!(query = e.target.value))
        return;
    if (isNaN(query)) {
        re = RegExp(query.replace(' ', '\\w'));
        $output.text(bank.filter(function (w) { return re.test(w); }).join('\n'));
    }
    else {
        $output.text(bank.filter(function (w) { return w.length == +query; }).join('\n'));
    }
});
