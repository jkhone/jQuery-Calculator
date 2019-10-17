$(document).ready(function() {

    var num1 = ""
    var op = ""
    var num2 = ""

    $("#calculator").on('click', 'button', function(e) {
        var value = $(this).html()
        
        if (value === '=') {
            if (op === '+') {
                var answer = $('#answer').html(Number(num1) + Number(num2))
                num1 = answer
            } else if (op === '-') {
                $('#answer').html(Number(num1) - Number(num2))
            } else if (op === '*') {
                $('#answer').html(Number(num1) * Number(num2))
            } else if (op === '/') {
                $('#answer').html(Number(num1) / Number(num2))
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            $("#answer").html("")
            op = value
        } else if (value === 'C') {
            num1 = ""
            op = ""
            num2 = ""
            $('#answer').html('0')
        } else {
            if (op === "") {
                num1 += value
                $('#answer').html(num1)
            } else {
                num2 += value
                $('#answer').html(num2)
            }
        }
    })
})

$(document).ready(function() {
        $('.add').on('click', function(e){
            var num1 = $('.one').val()
            var num2 = $('.two').val()
            console.log(num1)
            console.log(num2)
            $('#ans').html(Number(num1) + Number(num2))
        })
        $('.sub').on('click', function(e){
            var num1 = $('.one').val()
            var num2 = $('.two').val()
            console.log(num1)
            console.log(num2)
            $('#ans').html(Number(num1) - Number(num2))
        })
        $('.multi').on('click', function(e){
            var num1 = $('.one').val()
            var num2 = $('.two').val()
            console.log(num1)
            console.log(num2)
            $('#ans').html(Number(num1) * Number(num2))
        })
        $('.divide').on('click', function(e){
            var num1 = $('.one').val()
            var num2 = $('.two').val()
            console.log(num1)
            console.log(num2)
            $('#ans').html(Number(num1) / Number(num2))
        })
})