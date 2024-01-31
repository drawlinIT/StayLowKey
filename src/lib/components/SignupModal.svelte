<script>
  export let close;

  let email = '';
  let phoneNumber = '';

  function signUp() {
    // TODO: Implement sign-up logic
    console.log("Signed up with:", email, phoneNumber);
    close(); // Close modal after sign up
  }
</script>

<style>
  .modal {
    /* Style your modal */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }

  /* Additional modal styles */
</style>

<div class="modal">
  <h2>SIGN UP FOR ALERTS ON OUR LATEST DROPS AND PRE-ORDERS!</h2>
  <input type="email" bind:value={email} placeholder="Your Email" />
  <input type="tel" bind:value={phoneNumber} placeholder="Your Phone Number" />
  <button on:click={signUp}>Sign Up</button>
  <button on:click={close}>Close</button>
</div>
