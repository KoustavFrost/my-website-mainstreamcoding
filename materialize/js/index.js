$(document).ready(function() {
    $('#add-new-post-btn').on('click', function () {
        addNewPost('Blender', 'HABI-JABI', 'So I fount this amazing webisite which does some EPIC SHIT.');
    });
});

function addNewPost(userName, title, content) {
    $('#posts-container').append('<div class="col s12 m6 l4"><div class="card hoverable"><div class="card-image waves-effect waves-light"><img src="./Google_Assistant_logo.png" alt="Profile picture"><div class="card-title"><div class="_user-name">' + userName + '</div></div></div><div class="card-content"><div class="card-title activator">' + title + '</div><p class="truncate">' + content + '</p></div><div class="card-reveal"><span class="card-title">Card Title<i class="material-icons right">close</i></span><p>' + content + '</p></div></div></div>');
}
