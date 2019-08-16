// what is the difference between defer and async on a <script> tag?

// use defer === placing the script as a callback to DOMContentLoaded
// using defer will download the script while the rest of the page is being parsed (the DOM). once the DOM is fully loaded, the script will execute. in the case of multiple scripts, they will be executed in the order that they are parsed.

// async will download the script and continue parsing the document (DOM). once the script has been fully loaded, the script will execute, halting document parsing if still in progress. multiple async scripts may not execute in the order that they are parsed, but rather in the order that they are resolved.

<script src="script_source.js" async></script>
<script src="script_source.js" defer></script>
