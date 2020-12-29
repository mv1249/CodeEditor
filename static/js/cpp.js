console.log("Hello ji")



let question_list = [{
        key: '1',
        question: 'Generate the Square root of a number'
    }, {
        key: '2',
        question: 'Print Hello World'

    },
    {
        key: '3',
        question: 'print numbers from one to n'
    },
    {
        key: '4',
        question: 'print first 10 fibonacci numbers'
    },
    {
        key: '5',
        question: 'print first 10 prime numbers'
    }
]

// let random_arr = []

// setting the random value to be 0,

let random = 0

random = Math.floor((Math.random() * 5) + 1)

// random_arr.push(random)


// console.log(random_arr)

let newquestion = ''

question_list.forEach(element => {


    // console.log(random)
    if (random == element.key) {
        console.log(element.question)
        newquestion = element.question
            // textarea.innerHTML += element.question
    }

})

// sometimes queries are not fired,so you have to use the window.onload!! very important step!

window.onload = function() {

    what();

    function what() {
        document.getElementById('textarea').innerHTML = `<div class="alert alert-success" role="alert">
        <p style="font-size: large;text-align: ;">Question : ${newquestion}</p>
      </div>`;
    };

}



document.addEventListener('visibilitychange', function() {

    if (document.visibilityState == 'hidden') {
        document.body.innerHTML = `<div class="container md-4 mx-auto my-4 text-center">

        <div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Your exam has been suspended,as there was a switch of tab from one window/tab to other🤔,Better Luck next Time!!</p>
</div>

<a href="/" class="btn btn-info" role="button">Home Page</a>
        </div>`





        // the above button is necessary to take back to the home page!!

        document.querySelector('.btn').addEventListener('click', function() {
            console.log("some one clicked!")
        })

    } else {
        console.log("Not an end")
    }

    // console.log(document.visibilityState);
});



// text area: