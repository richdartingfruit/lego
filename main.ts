input.onButtonPressed(Button.A, function () {
    RingbitCar.turnleft()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P2)
