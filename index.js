var app = new Vue({

    el:'#app',
    data: {
        message: "Hello Worldy",
        seen: true,
    }
});
//app.seen = false;
app.message ="Ihave changed the data!";
var tod = new Vue({

    el:'#tod',
    data: {
        todos: [
            {text:'Learn Js'},
            {text:'Num two'},
            {text:'Num 3'}
        ]
    }
});

tod.todos.push({text:"later"})