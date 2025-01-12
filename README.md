Objective
 The task is to extend the Shopping Cart project from the exam week 4 assignment by adding a Promo Code feature that applies discounts to the total price. 
Requirements
 Functional Enhancements 
1. Promo Code Integration 
○ Add a new section in the Checkout interface to allow users to enter a promo code. 
○ The available promo codes are:
 ■ "ostad10": Provides a 10% discount. 
■ "ostad5": Provides a 5% discount. 
○ Calculate and display the discounted total dynamically after the promo code is applied.
 2. Promo Code Validation 
○ Ensure the promo code is valid by checking against the provided codes (ostad10, ostad5). 
○ If an invalid code is entered, display an appropriate error message to the user. 
3. Discount Display 
○ Clearly show the discount applied and the final total price in the Checkout section. 
UI Updates 
● Add an input field and a button in the Checkout section to allow users to enter a promo code. 
● Display a success or error message based on whether the promo code is applied successfully. 
● Update the cart summary to show:
○ Subtotal (before discount). 
○ Discount amount. 
○ Final total (after discount).
 Error Handling 
● Prevent multiple uses of the same promo code during the same checkout session. 
● Ensure the discount amount is recalculated correctly if the cart total changes. 
