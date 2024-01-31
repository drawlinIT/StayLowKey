<script>
  const socialMediaLinks = [
    { name: "Instagram", url: "https://www.instagram.com/staylowkey.us", icon: "/images/Instagram_icon.png" },
    // Add more social media links here
  ];
</script>

<style>
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
	
  }

  .icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
	margin-bottom: -70px;
  }
</style>

<div class="social-icons">
  {#each socialMediaLinks as link}
    <a href={link.url} target="_blank">
      <img class="icon" src={link.icon} alt={link.name} />
    </a>
  {/each}
</div>


