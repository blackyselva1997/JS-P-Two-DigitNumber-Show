a=[2,8,5,9,14,66,3,22,1]
		// Get the two digit numbers only and in order for array?
		// a=[14,22,66]
document.write("Two digit number show");
document.write("<br>");
document.write("<br>");

let a= [2,8,5,9,14,66,3,22,1];
a.sort();
for (i=0; i<a.length; i++) {
	if (9<a[i]) {
		document.write(a[i]);
		document.write("<br>");
	}
}