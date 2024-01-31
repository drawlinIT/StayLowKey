<script context="module">
  import SocialMediaIcons from "$lib/components/SocialMediaIcons.svelte";
  
  export const prerender = true;

</script>

<style>
	
	@font-face {
	font-family: 'SLK_Font';
	src:	url('/fonts/OldEnglishFive.ttf') format('truetype'),

}
:global(html, body) {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden; /* Hide horizontal scrollbar if not needed */
  /* Ensure fullscreen behavior is covered */
  width: 100vw;
  /* Remove overflow-y property to prevent vertical scrolling */
  background-color: black;
}

:global(body) {
  background-image: url('/images/slk_background_2.png');
  background-size: contain; /* This will make sure the entire image is fit to the container without cropping */
  background-repeat: no-repeat;
  background-position: center center; /* This will center the image in the viewable area */
  border-color: black;
}

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
	

}
	
	h1 {
	font-family: 'SLK_Font';
    margin-top: 10px;
	text-shadow: 4px 4px 7px rgba(0, 0, 0, 0.5);
	color: 	#D3D3D3;
    font-size: 4rem;
}

.footer {
  position: absolute; /* Positions the footer absolutely relative to the closest positioned parent */
  bottom: 0; /* Aligns the footer to the bottom */
  width: 100%; /* Ensures the footer stretches across the full width */
  text-align: center;
  text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);
  color: 	#D3D3D3;
  font-size: 2.5rem;
}

.instagram-icon {
  margin-bottom: 20px; /* Adjust value as needed to move the icon down */
}



</style>

<div class="content">
  <h1>Coming Soon</h1>
  <div class="footer">
    <SocialMediaIcons />
	 <div class="instagram-icon">
	 </div>
    <h2>Tap Here To Follow Us</h2>
  </div>
</div>
