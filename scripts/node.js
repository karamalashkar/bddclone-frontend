function showMenu() {
	var topNav = document.getElementById('topnav');
	if (topNav.className === "links") {
		topNav.className += " show";
	} else {
		topNav.className = "links";
	}
}