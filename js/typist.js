var headers = ['Programmer', 'Problem-solver', 'Web developer', 'Educator', 'Aspiring entrepreneur'];
var i = 1;

function repeat(t) {
    $('.typist').typistStop();
    $('.typist').html("");
    $('.typist').typist({
        speed: t.length,
        text: t
    }).typistPause(1000)
    .typistRemove(t.length)
    .typistStop();
}
repeat(headers[0]);
setInterval(function(){
    repeat(headers[i]);
    i = (i + 1) % headers.length;
}, 3500);
