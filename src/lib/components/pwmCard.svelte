<script lang="js">
    export let pwmVal;
    var circumference = 2 * Math.PI * 30;
</script>

<div class="flex flex-col items-center bg-gray-700 rounded-xl shadow-lg p-4 w-28">
    <svg class="w-20 h-20">
        <circle
            class="text-gray-300"
            stroke-width="5"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
        />
        <circle
            class="{(pwmVal < 0) ? 'text-red-500' : 'text-blue-500'}"
            stroke-width="5"
            stroke-dasharray="{circumference}"
            stroke-dashoffset="{circumference - pwmVal / 255 * circumference}"
            stroke-linecap="round"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
        />
    </svg>
    <div class="relative w-0 h-0">
        <span class="absolute bottom-[27px] -left-[18px] text-xl text-white">
            {Math.round(pwmVal / 255 * 100)}%
        </span>
    </div>
    <span class="text-xl text-white">{pwmVal}</span>
</div>
