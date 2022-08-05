/*
    Trigger types:
    timed
    scroll
*/

class Dispatcher extends HTMLElement {
    constructor() {
        super()
        this.default = {
            TRIGGER_TYPE: `timed`,
            TIME: 6000,
            SCROLL_DISTANCE: `50%`, // Can use %, px, vh, etc.
            SCROLL_ELEMENT: `self`, // override this with a CSS Selector
        }

        this.triggerType = this.dataset.triggerType || this.default.TRIGGER_TYPE
        this.eventName = this.dataset.eventName || `event-dispatcher-${this.triggerType}`
        this.event = new Event(this.eventName, {
            bubbles: true
        })
    }


    connectedCallback() {
        switch (this.triggerType) {
            case `timed`:
                setTimeout(() => {
                    console.log(`dispatching`)
                    document.dispatchEvent(this.event)
                }, this.dataset.time || this.default.TIME)
                break

            case `scroll`:
                break
        }

    }


    disconnectedCallback() {
    }

}

customElements.define('event-dispatcher', Dispatcher);
