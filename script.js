tRating = [[1,1,1,1],[1,1],[1,1],[1,1]]

// displayes the topic 1 table when activated
function topic1() {
	(document.getElementById("table")).innerHTML = "<tr><th>section</th><th>personal knowledge rating (1-10)</th></tr>   <td><button class='tORsButton' onclick='t1_0()'>Ad hoc networks</button></td><td> <div class='talleyStyle'><button class='f' onclick='talleyAdd(0, 0)'>+</button><div class='f' id='t00'>1</div><button class='f' onclick='talleyMin(0, 0)'>-</button></div>  </td>";
}

function t1_0() {
	(document.getElementById("descBox")).innerHTML = "<h1>Ad Hoc Networks</h1><p1>Ad hoc networks are temporary networks with 2 or more devices connected</p1>"
}

// displayes the topic 2 table when activated
function topic2() {
	(document.getElementById("table")).innerHTML = "<tr><th>section</th><th>personal knowledge rating (1-10)</th></tr>";
}

// displayes the topic 3 table when activated
function topic3() {
	(document.getElementById("table")).innerHTML = "<tr><th>section</th><th>personal knowledge rating (1-10)</th></tr>";
}

// displayes the topic 4 table when activated
function topic4() {
	(document.getElementById("table")).innerHTML = "<tr><th>section</th><th>personal knowledge rating (1-10)</th></tr>";
}



function talleyAdd(a, b) {
	tRating[a][b] += 1;
	if (tRating[a][b] == 11) {
		tRating[a][b] = 0
	}
	(document.getElementById("t"+a+b)).innerHTML = tRating[a][b];
}
function talleyMin(a, b) {
	tRating[a][b] -= 1;
	if (tRating[a][b] == 0) {
		tRating[a][b] = 10
	}
	(document.getElementById("t"+a+b)).innerHTML = tRating[a][b];
}