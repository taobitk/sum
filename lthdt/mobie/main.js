const m1 = new Mobile();
const m2 = new Mobile();
m1.onPhone()
m2.onPhone()
m1.composeMessageTo('đánh nhau ko mày',m2)
document.write(m1.checkOutbox())
document.write('<br>')
document.write(m2.checkInbox())
document.write('<br>')
document.write(m1.pin)
document.write('<br>')
m1.changePin()
document.write(m1.pin)

