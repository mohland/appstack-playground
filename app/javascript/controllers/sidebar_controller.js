import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu", "backdrop"]
  
  connect() {
    // Close sidebar on escape key
    this.boundClose = this.close.bind(this)
    document.addEventListener("keydown", this.handleEscape.bind(this))
  }
  
  disconnect() {
    document.removeEventListener("keydown", this.handleEscape.bind(this))
  }
  
  toggle() {
    const isOpen = !this.menuTarget.classList.contains("-translate-x-full")
    
    if (isOpen) {
      this.close()
    } else {
      this.open()
    }
  }
  
  open() {
    this.menuTarget.classList.remove("-translate-x-full")
    this.menuTarget.classList.add("translate-x-0")
    this.backdropTarget.classList.remove("hidden")
    document.body.classList.add("overflow-hidden") // Prevent scroll
  }
  
  close() {
    this.menuTarget.classList.add("-translate-x-full")
    this.menuTarget.classList.remove("translate-x-0")
    this.backdropTarget.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")
  }
  
  handleEscape(event) {
    if (event.key === "Escape") {
      this.close()
    }
  }
}
