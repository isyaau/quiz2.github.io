$("#quiz1").dlxQuiz({
    quizData: {
        questions: [
            {
                q:
                    'Look at the following selector: $("div")<br/> What does it select?',
                a: "All div elements",
                options: [
                    "All div elements",
                    "The first div element",
                    'All elements with the class "div"'
                ]
            },
            {
                q: "Which of the following is correct",
                a: "jQuery is a JavaScript Library",
                options: [
                    "jQuery is a JSON Library",
                    "jQuery is a JavaScript Library"
                ]
            },
            {
                q: "jQuery uses CSS selectors to select elements?",
                a: "True",
                options: ["True", "False"]
            },
            {
                q: "Which sign does jQuery use as a shortcut for jQuery?",
                a: "the $ sign",
                options: ["the % sign", "the $ sign", "the ? Sign"]
            },
            {
                q:
                    "Is jQuery a library for client scripting or server scripting?",
                a: "Client scripting",
                options: ["Client scripting", "Server scripting"]
            }
        ]
    }
});
