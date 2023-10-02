<script>
    import "../app.css";
    import Navbar from "$lib/components/navbar.svelte";
</script>
  
<html lang="en">
    <Navbar />
    <div class="mt-12 mb-16 w-full items-center bg-background min-h-[calc(100vh-112px)]">
      <slot />
    </div>
</html>
