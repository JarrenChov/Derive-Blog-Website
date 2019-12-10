// BLOG GENERATING ENTRIES JAVASCRIPT

localStorage.setItem("blogClickedTyped", "default");

var blogPageEntries = 5;
var refreshTimeInterval = 45000;
var blogPages = Math.ceil(locations.length / blogPageEntries);
var blogCurrentPage = localStorage.getItem("userStartPage");
var pageRefreshTimeout;
var pageRefreshStatePrev;
var blogRefreshInterval = 2;
var blogRefreshCount;

function load_data(){
	var blogPostTitle = document.createElement("h4");
	blogPostTitle.id = "blogPostTitle";
	
	if (blogCurrentPage == null) {
		blogCurrentPage = 1;
	}
	
	if (blogCurrentPage > blogPages) {
		blogCurrentPage = blogPages;
	}
	
	if (locations.length > 0) {
		var blogPostTitleText = document.createTextNode("All Posted Blog Posts");
		blogPostTitleText.id = "blogSectionContent";
		blogPostTitle.appendChild(blogPostTitleText);
		document.getElementById("blogContent1").appendChild(blogPostTitle);			
		
		var blogPageEntryStart = ((blogCurrentPage * blogPageEntries) - (blogPageEntries - 1));
		var blogPageEntryEnd = 0;
		var postEntriesCounter = blogPageEntryStart;
		
		if ((locations.length - (blogPageEntryStart + (blogPageEntries - 1))) < 0) {
			blogPageEntryEnd = blogPageEntryStart + (locations.length - blogPageEntryStart);
		}else {
			blogPageEntryEnd = blogPageEntryStart + (blogPageEntries - 1);
		}
		
		var autoReload = document.createElement("h1");
		autoReload.id = "autoReload";
		var autoReloadStatus = document.createElement("span");
		autoReloadStatus.id = "autoReloadStatus";
		autoReloadStatus.title = "By default auto refresh is disabled. To enable/disable click here.";
		
		var entryCount = document.createElement("h1");
		entryCount.id = "blogEntryCount";
		var newSpan10 = document.createElement("span");
		newSpan10.id = "blogEntryCountSpan";
		var newSpan11 = document.createElement("span");
		newSpan11.id = "blogPageCountSpan";
		
		var autoReloadText = document.createTextNode("Auto Refresh: ");
		
		if (localStorage.getItem("autoReloadPage") == null) {
			localStorage.setItem("autoReloadPage", "false");
		}
		
		if (localStorage.getItem("autoReloadPage") == "false") {
			var autoReloadStatusText = document.createTextNode("Disabled");
		}else {
			var autoReloadStatusText = document.createTextNode("Enabled");
			autoReloadStatus.style.color = "#228B22";
		}
		
		autoReloadStatus.appendChild(autoReloadStatusText);
		autoReload.appendChild(autoReloadText);
		autoReload.appendChild(autoReloadStatus);
		
		var entryCountText = document.createTextNode("CURRENTLY SHOWING BLOG ENTRY: ");
		if (((blogPageEntryEnd - blogPageEntryStart) == 0)) {
			var entryCountTextSpan = document.createTextNode(" 《 " + blogPageEntryStart + " ‍ ‍ from  ‍ ‍ " + locations.length + "  ‍ ‍ blog entries " + "》");
		} else {
			var entryCountTextSpan = document.createTextNode(" 《 " + blogPageEntryStart + "-" + blogPageEntryEnd + " ‍ ‍ from  ‍ ‍ " + locations.length + "  ‍ ‍ blog entries " + "》");
		}
		
		var blogPageCountTextSpan = document.createTextNode("Pages: ");
		
		entryCount.appendChild(entryCountText);
		newSpan10.appendChild(entryCountTextSpan);
		newSpan11.appendChild(blogPageCountTextSpan);
		
		document.getElementById("blogContent1").appendChild(autoReload);
		document.getElementById("autoReloadStatus").onclick = function(){ auto_reload_change(); };
		document.getElementById("blogContent1").appendChild(entryCount);
		entryCount.appendChild(newSpan10);
		
		for (var i = 0; i < blogPages; i++) (function(i){ 
 			setTimeout(function(){ 
				var pageNumber = "page" + (i + 1);
				var pageCount = document.createElement("span");
				pageCount.id = pageNumber;
				var pageCountText = document.createTextNode(i + 1);

				if ((i + 1) == blogCurrentPage) {
					pageCount.style.color = "#048FA6";
					pageCount.style.fontWeight = "bold";
					pageCount.style.fontSize = "25px";
				}else {
					pageCount.style.color = "#D3D3D3";
				}
				var pageCountTextSpace = document.createTextNode("  ‍ ");
				pageCount.appendChild(pageCountText);
				pageCount.appendChild(pageCountTextSpace);
				newSpan11.appendChild(pageCount);
				document.getElementById(pageNumber).onclick = function(){ load_data_page_number(pageNumber); };
 			}); 
		})(i);
		
		entryCount.appendChild(newSpan11);
		
		var blogBreak1 = document.createElement("hr");
		blogBreak1.id = "blogBreaker";
		document.getElementById("blogContent1").appendChild(blogBreak1);

		for (var i = (blogPageEntryStart - 1); i < blogPageEntryEnd; i++) {
			var postIndex = (locations.length - (i + 1));
			var newLine1 = document.createElement("br");
			var newLine2 = document.createElement("br");
			var newSpan1 = document.createElement("span");
			newSpan1.className = "blogSpanText";
			var newSpan2 = document.createElement("span");
			newSpan2.className = "blogSpanText";
			var newSpan3 = document.createElement("span");
			newSpan3.className = "blogSpanText";

			var blogDelete = document.createElement("form");
			blogDelete.className = "deleteBlogButton";
			blogDelete.setAttribute("method","post");
			blogDelete.setAttribute("action","/delete");
			blogDelete.innerHTML = '<input hidden value="' + ((locations.length)-i-1) + '" name="post_number">' + '<input class="blog_post" type="submit" value="Delete this message">';

			var blogEntry = document.createElement("h1");
			blogEntry.id = "blogEntries";
			var blogPoster = document.createElement("h51");
			blogPoster.id = "blogPoster";
			blogPoster.className = "blogHeadingText";
			var postTime = document.createElement("h52");
			postTime.id = "blogPostTime";
			postTime.className = "blogHeadingText";
			var placeName = document.createElement("h53");
			placeName.id = "blogPlace";
			placeName.className = "blogHeadingText";
			var placeDescription = document.createElement("p");
			placeDescription.id = "blogText";

			var entryNumberText = document.createTextNode("Blog Post┊No." + postEntriesCounter);
			var posterNameText = document.createTextNode("Blog Poster: ");
			var posterNameSpan = document.createTextNode(locations[postIndex].name);
			var postTimeText = document.createTextNode("Posted on: ");
			var posterTimeSpan = document.createTextNode(locations[postIndex].time);
			var placeNameText = document.createTextNode("Location Posted: ");
			var placeNameSpan = document.createTextNode(locations[postIndex].title);
			var placeDescriptionText = document.createTextNode(locations[postIndex].description);

			blogEntry.appendChild(entryNumberText);
			blogPoster.appendChild(posterNameText);
			newSpan1.appendChild(posterNameSpan);
			postTime.appendChild(postTimeText);
			newSpan2.appendChild(posterTimeSpan);
			placeName.appendChild(placeNameText);
			newSpan3.appendChild(placeNameSpan);
			placeDescription.appendChild(placeDescriptionText);		

			document.getElementById("blogContent1").appendChild(blogDelete);
			document.getElementById("blogContent1").appendChild(blogEntry);
			document.getElementById("blogContent1").appendChild(blogPoster);
			blogPoster.appendChild(newSpan1);
			document.getElementById("blogContent1").appendChild(newLine1);
			document.getElementById("blogContent1").appendChild(postTime);
			postTime.appendChild(newSpan2);
			document.getElementById("blogContent1").appendChild(newLine2);
			document.getElementById("blogContent1").appendChild(placeName);
			placeName.appendChild(newSpan3);
			document.getElementById("blogContent1").appendChild(placeDescription);		

			var postBreak = document.createElement("hr");
			document.getElementById("blogContent1").appendChild(postBreak);	

			postEntriesCounter++;
		}		
	}else {
		blogPostTitle.style.textDecoration = "none";
		var blogPostTitleText = document.createTextNode("--- No blog posts posted. Start posting to share your adventures! ---");
		blogPostTitleText.id = "blogSectionContent";
		blogPostTitle.appendChild(blogPostTitleText);
		document.getElementById("blogContent1").appendChild(blogPostTitle);		
		
		var pusheenBlog = document.createElement("img");
		pusheenBlog.className = "pusheenCat";
		pusheenBlog.src = "images/Images/pusheenNoPosts.png";
		document.getElementById("blogContent1").appendChild(pusheenBlog);
	}
	
	if (blogPages > 0) {
		var blogNavigation = document.createElement("div");
		blogNavigation.id = "blogNavigation";		
		var blogNavigationText = document.createElement("h2");
		blogNavigationText.id = "blogNavigationText";
		
		var blogNavigationPrevButton = document.createElement("span");
		blogNavigationPrevButton.id = "blogNavigationPrevButton";
		var blogNavigationPrevButtonText = document.createTextNode("⤙ PREVIOUS");
		blogNavigationPrevButtonText.id = "blogNavigationPrevButtonText";
		var blogNavigationSplitButton = document.createElement("span");
		blogNavigationSplitButton.id = "blogNavigationSplitButton";
		var blogNavigationSplitButtonText = document.createTextNode(" ‍ ▪◈▪ ‍ ");
		blogNavigationSplitButtonText.id = "blogNavigationSplitButtonText";
		var blogNavigationNextButton = document.createElement("span");
		blogNavigationNextButton.id = "blogNavigationNextButton";
		var blogNavigationNextButtonText = document.createTextNode("NEXT ⤚");
		blogNavigationNextButtonText.id = "blogNavigationNextButtonText";
		
		blogNavigationPrevButton.appendChild(blogNavigationPrevButtonText);
		blogNavigationSplitButton.appendChild(blogNavigationSplitButtonText);
		blogNavigationNextButton.appendChild(blogNavigationNextButtonText);
		blogNavigationText.appendChild(blogNavigationPrevButton);
		blogNavigationText.appendChild(blogNavigationSplitButton);
		blogNavigationText.appendChild(blogNavigationNextButton);
		blogNavigation.appendChild(blogNavigationText);
		
		var navigationPrevClick = true;
		var navigationNextClick = true;
		
		if (blogCurrentPage == 1) {
			blogNavigationPrevButton.style.visibility = "hidden";
			navigationPrevClick = false;
			if (locations.length < blogPageEntryEnd) {
				blogNavigationNextButton.style.visibility = "hidden";
				navigationNextClick = false;
			}
		}
		
		if (blogCurrentPage == blogPages) {
			blogNavigationNextButton.style.visibility = "hidden";
			navigationNextClick = false;
		}
		
		document.getElementById("blogContent1").appendChild(blogNavigation);
		if (navigationPrevClick == true) {
			document.getElementById("blogNavigationPrevButton").onclick = function(){ load_data_prev(); };
		}
		if (navigationNextClick == true) {
			document.getElementById("blogNavigationNextButton").onclick = function(){ load_data_next(); };
		}
	}
}

// FAIL SAFE, IF LOCALSTORAGE FAILS
//	document.getElementById("blogContent1").innerHTML = "";
//	document.getElementById("blogContent1").scrollTop = 0;
//	load_data();

function auto_reload_change() {
	if (localStorage.getItem("autoReloadPage") == "false") {
		document.getElementById("autoReloadStatus").innerHTML = "Enabled";
		document.getElementById("autoReloadStatus").style.color = "#228B22";
		localStorage.setItem("autoReloadPage", "true");
		activatePageRefresh();
	}else {
		document.getElementById("autoReloadStatus").innerHTML = "Disabled";
		document.getElementById("autoReloadStatus").style.color = "#FF4500";
		localStorage.setItem("autoReloadPage", "false");
		disablePageReload();
	}
}

function load_data_next() {
	blogCurrentPage ++;
	localStorage.setItem("userStartPage", blogCurrentPage.toString());
	localStorage.setItem("blogClickedTyped", "clickedPageNext");
	loadingPageReload();
	blogRefreshCount = blogRefreshInterval;
	startBlogRefreshCount();
//	window.location=window.location;
}
function load_data_prev() {
	blogCurrentPage --;
	localStorage.setItem("userStartPage", blogCurrentPage.toString());
	localStorage.setItem("blogClickedTyped", "clickedPagePrev");
	loadingPageReload();
	blogRefreshCount = blogRefreshInterval;
	startBlogRefreshCount();
}

function load_data_page_number(pageNumber) {
	pageNumber = pageNumber.replace(/[^\d]/g,'');
	blogCurrentPage = pageNumber;
	localStorage.setItem("userStartPage", blogCurrentPage.toString());
	localStorage.setItem("blogClickedTyped", "clickedPageNumber");
	loadingPageReload();
	blogRefreshCount = blogRefreshInterval;
	startBlogRefreshCount();
}

function disablePageReload() {
	pageRefreshStatePrev = localStorage.getItem("autoReloadPage");
	localStorage.setItem("autoReloadPage", "false");
	clearTimeout(pageRefreshTimeout);
}


function startBlogRefreshCount() {
	if (blogRefreshCount > 0) {
		blogRefreshCount --;
		setTimeout("startBlogRefreshCount()", 1000)
	}else {
		window.location=window.location;
	}
}

function postPageReload() {	
	loadingPageReload();
	
	if (pageRefreshStatePrev == "true") {
		localStorage.setItem("autoReloadPage", "true");
		activatePageRefresh();
	}	
	blogRefreshCount = blogRefreshInterval;
	startBlogRefreshCount();
//	window.location = window.location;
}

function loadingPageReload() {
	document.getElementById("blogContent1").innerHTML = "";
	
	var imageNumber = (Math.floor(Math.random() * 5) + 1);
	var imageIdentifer = "pusheenReloadPosts" + imageNumber + ".png";
	
	var pusheenBlog = document.createElement("img");
	pusheenBlog.className = "pusheenCat";
	pusheenBlog.style.marginTop = "-2%";
	pusheenBlog.src = "images/Images/" + imageIdentifer;	
	
	var blogPostReload = document.createElement("div");
	blogPostReload.id = "blogPostReload";
	var blogPostReloadTitle = document.createElement("h30");
	var blogPostReloadBody = document.createElement("h31");
	var blogPostReloadBreak = document.createElement("br");
	
	if (localStorage.getItem("blogClickedTyped") == "clickedPageNumber") {
		var blogPostReloadText = document.createTextNode("--- Fetching posts from page " + localStorage.getItem("userStartPage") + " ---");
	}else if (localStorage.getItem("blogClickedTyped") == "clickedPageNext") {
		var blogPostReloadText = document.createTextNode("--- Fetching next set of posts ---");
	}else if (localStorage.getItem("blogClickedTyped") == "clickedPagePrev") {
		var blogPostReloadText = document.createTextNode("--- Fetching previous set of posts ---");
	}else {
		var blogPostReloadText = document.createTextNode("--- Fetching new posts ---");
	}
	localStorage.setItem("blogClickedTyped", "default");
	
	var blogPostReloadText2 = document.createTextNode("page will reload momentarily......");
	blogPostReloadText2.id = "blogPostReloadText2";
	blogPostReloadTitle.appendChild(blogPostReloadText);
	blogPostReloadBody.appendChild(blogPostReloadText2);
	blogPostReload.appendChild(blogPostReloadTitle);
	blogPostReload.appendChild(blogPostReloadBreak);
	blogPostReload.appendChild(blogPostReloadBody);
	document.getElementById("blogContent1").appendChild(blogPostReload);
	document.getElementById("blogContent1").appendChild(pusheenBlog);	
}

function activatePageRefresh() {
	if (localStorage.getItem("autoReloadPage") == "true") {
		pageRefreshTimeout = setTimeout(function() { window.location=window.location;},refreshTimeInterval);
	}
}

if (localStorage.getItem("autoReloadPage") == "true") {
	pageRefreshTimeout = setTimeout(function() { window.location=window.location;},refreshTimeInterval);
}