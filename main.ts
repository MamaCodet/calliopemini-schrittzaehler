input.onButtonPressed(Button.A, function () {
    Schritte = 0
    basic.showNumber(Schritte)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Schritte)
})
let Schritte = 0
Schritte = 0
basic.showNumber(Schritte)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) < 975) {
        Schritte += 1
        basic.showNumber(Schritte % 10)
    }
})
