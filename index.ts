const $data = $('#data');
const $search = $('#search');
const $output = $('#output');
let query, re, bank = [];

$data.on('input', e => {
	bank = (e.target as HTMLInputElement).value.split(' ');
	console.log(bank);
});

$search.on('input', e => {
	if(!(query = (e.target as HTMLInputElement).value)) return;

	if(isNaN(query)){
		re = RegExp(query.replace(' ', '\\w'));
		$output.text(bank.filter(w => re.test(w)).join('\n'));
	}else{
		$output.text(bank.filter(w => w.length == +query).join('\n'));
	}
});
