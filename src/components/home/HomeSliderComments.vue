<template>
<div class="container">
    <textarea id="comment"></textarea>
    <button id="addComments">comment</button>
    <div id="allComments">hello</div>
</div>
</template>

<script>
	export default {
		mounted(){
window.onload = function setTemplate() {
    document.getElementById('allComments').innerHTML = localStorage.getItem('template');
};

const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    replyButton.style.background = 'lightgreen';
    replyButton.style.margin = '2px';
    replyButton.style.borderRadius = '3px';
    replyButton.style.paddingLeft = '3px';
    replyButton.style.paddingRight = '3px';
    replyButton.style.outline = 'none';
    replyButton.style.color = 'white';

    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    likeButton.style.background = 'rgb(185, 77, 99)';
    likeButton.style.margin = '2px';
    likeButton.style.borderRadius = '3px';
    likeButton.style.paddingLeft = '3px';
    likeButton.style.paddingRight = '3px';
    likeButton.style.outline = 'none';
    likeButton.style.color = 'white';

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    deleteButton.style.background = '#e0d88d';
    deleteButton.style.margin = '2px';
    deleteButton.style.borderRadius = '3px';
    deleteButton.style.paddingLeft = '3px';
    deleteButton.style.paddingRight = '3px';
    deleteButton.style.outline = 'none';
    deleteButton.style.color = 'white';
    if(hasClass(ev.target.parentElement, 'container')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "cornflowerblue";
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "paleturquoise";
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    }
    setOnLocalStorage();
}

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.getElementById('allComments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '20px';
        textArea.style.border = '1px solid #BBD8CD';
        textArea.style.borderRadius = '4px';
        textArea.style.outline = 'none';
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Add';

        addButton.style.background = 'lightgreen';
        addButton.style.margin = '2px';
        addButton.style.borderRadius = '3px';
        addButton.style.paddingLeft = '3px';
        addButton.style.paddingRight = '3px';
        addButton.style.outline = 'none';
        addButton.style.color = 'white'; 

        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.className='cancelReply';

        cancelButton.style.background = 'rgb(189, 49, 49)';
        cancelButton.style.margin = '2px';
        cancelButton.style.borderRadius = '3px';
        cancelButton.style.paddingLeft = '3px';
        cancelButton.style.paddingRight = '3px';
        cancelButton.style.outline = 'none';
        cancelButton.style.color = 'white';      

        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);

    } else if(hasClass(e.target, 'addReply')) {
        addComment(e);
    } else if(hasClass(e.target, 'likeComment')) {
         const likeBtnValue = e.target.innerHTML;
         e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 : 1;
        setOnLocalStorage();
    } else if(hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';
        setOnLocalStorage();
    } else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
});
		}
	}
</script>

<style scoped>
* {
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 10px;
}

input[type=text]:invalid {
    border: red solid 1px;
}

.container {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
	outline: none;
    /* border: 1px solid #BBD8CD; */
}
#comment{
    border: 1px solid #BBD8CD;
	border-radius: 5px;
	margin: 0;
    
}
#addComments {
    width: 60px;
    padding:2px;
    background-color: lightgreen;
    color: white;
    text-align: left;
}

.wrapper > button {
    margin-right: 5px;
    padding: 5px;
    background-color: lightgreen;
    color: white;
}
textarea, button{
	outline: none;
}
.likeComment{
	background: red;
	padding: 60px;
}
.reply{
	background: red;
}
.cancelReply{
    margin:20px;
}

</style>