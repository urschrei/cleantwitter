var trend, suggested, newtrend, newsuggested;


// set all instances of trending topics to 'collapsed'
trend = document.evaluate("//div[@id='trends']", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
for (var j = 0; j < trend.snapshotLength; j++) {
	newtrend = trend.snapshotItem(j);
	newtrend.setAttribute("class","collapsible collapsed");
}



// remove all instances of recommended users
suggested = document.evaluate("//div[@id='recommended_users']", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
for (var j = 0; j < suggested.snapshotLength; j++) {
	newsuggested = suggested.snapshotItem(j);
	newsuggested.parentNode.removeChild(newsuggested);
}