class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="nav">
            <a href="index.html">Home</a>
            <a href="services.html">Services</a>
            <a href="booking.html">Booking</a>
            <a href="training.html">Training</a>
            <a href="appointments.html">Appointments</a>
        </nav>
        `
    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer>
            @ 2023 DeVonte' Ellis
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)