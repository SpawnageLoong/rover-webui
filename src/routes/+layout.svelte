<script>
    import "../app.css";
    import Navbar from "$lib/components/navbar.svelte";
</script>
  
<html lang="en">
    <Navbar />
    <div class="mt-12 w-full items-center bg-gray-800 min-h-[calc(100vh-48px)] text-white">
      <slot />
    </div>
</html>
