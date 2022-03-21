input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    if (num < 0) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . . .
            . # . . .
            `)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
input.onGesture(Gesture.Shake, function () {
    O_or_E = num % 2
    if (O_or_E == 0) {
        basic.showString("Even")
    } else {
        basic.showString("Odd")
    }
})
let O_or_E = 0
let num = 0
num = 0
basic.forever(function () {
	
})
