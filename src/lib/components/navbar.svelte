<script lang=js>
    import {host, rosConnection} from "$lib/stores.js"
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
    <div class="flex flex-row-reverse absolute top-0 right-0 m-1 items-center gap-2">
        <div class="p-2 rounded-md text-center text-white hover:bg-gray-600">
            Robridge Status: {$rosConnection ? "Connected" : "Not Connected"}
        </div>
        <div class="p-2 rounded-md text-center text-white hover:bg-gray-600">
            Host: {$host}
        </div>
        <a href="/driver">
            <div class="p-2 rounded-md text-center text-white hover:bg-gray-600">
                Driver View
            </div>
        </a>
    </div>
</div>
