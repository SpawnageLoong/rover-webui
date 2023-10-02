<script lang=js>
    let dropdown = false;

    function handleDropdownOpen() {
        dropdown = true;
        document.body.addEventListener('click', handleDropdownClose);
    }

    function handleDropdownClose() {
        dropdown = false;
        document.body.removeEventListener('click', handleDropdownClose);
    }
</script>

<div class="w-full h-12 fixed top-0 bg-gray-700 z-[100]">
    <a href="/">
        <div class="absolute left-0 m-1 p-2 rounded-md text-center text-white hover:bg-gray-600">
            Endeavour OS
        </div>
    </a>
</div>
