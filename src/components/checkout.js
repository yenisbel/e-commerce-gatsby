import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const stripePromise = loadStripe("pk_test_NHFAF23R8WLXkmh0BmtJdCgq00F6F3M93N")

const redirectToCheckout = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    items: [{ sku: "sku_H8OLipv0BoLIAH", quantity: 1 }],
    successUrl: `${window.location.origin}/page-2/`,
    cancelUrl: `${window.location.origin}/page-2/`,
  })

  if (error) {
    console.warn("Error:", error)
  }
}

const Checkout = () => {
  return (
    <button style={buttonStyles} onClick={redirectToCheckout}>
      BUY MY T-SHIRT
    </button>
  )
}

export default Checkout