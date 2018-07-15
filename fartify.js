
walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
        		if(node.parentElement.tagName.toLowerCase() != "script") {
        	        	handleText(node);
        		}
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bsorry\b/g, "farting");
	v = v.replace(/\bSorry\b/g, "Farting");
	v = v.replace(/\bapologize to\b/g, "fart at");
	v = v.replace(/\bapologize\b/g, "fart");
	v = v.replace(/\bApologize\b/g, "Fart");
	v = v.replace(/\bapologizes\b/g, "farts");
	v = v.replace(/\bApologizes\b/g, "Farts");
	v = v.replace(/\bapologized\b/g, "farted");
	v = v.replace(/\bApologized\b/g, "Farted");
	v = v.replace(/\bapologizing\b/g, "farting");
	v = v.replace(/\bApologizing\b/g, "Farting");
	
	textNode.nodeValue = v;
}

