<script lang="js">
    export let pwmVal;
</script>

<div class="flex bg-gray-600 rounded-xl shadow-lg p-4">
    <!-- Throttle Bar -->
    <div class="flex flex-col items-center">
        <div class="h-24 w-5 overflow-hidden rounded-md bg-slate-400">
            <div class="h-full bg-green-800" style="height: {pwmVal / 255}"></div>
        </div>
    </div>
</div>