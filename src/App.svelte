<script lang="ts">
import binConvert from './services/binConvert';
import { bindigit } from './stores/content';

window.onload = () => {
    const form = document.getElementById('binConvertForm');
    form?.addEventListener('submit', binConvert)
};
</script>

<main>
    <h1 class="font-sans font-bold text-center text-2xl subpixel-antialiased">Binary to Decimal Converter</h1>
    <div id="inputBox" class="flex justify-center">
        <form id="binConvertForm" name="convert"  class="flex flex-col space-y-3">
            <label for="bindigit">Binary Number to Convert:</label>
            <!-- User can enter up to 8 binary digits in one input field -->
            <!-- User must be notified if anything other than a 0 or 1 was entered -->
            <input type="text" inputmode="numeric" id="bindigit" name="bindigit_input" maxlength="8" minlength="1" placeholder=0 pattern="[0-1]*" required bind:value={$bindigit} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-stone-300">
            <!-- User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered -->
            <label for="result">Decimal Converted Number:</label>
            <input type="text" id="result" name="outputBox" placeholder=0 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-stone-300">
        </form>
    </div>
    <div id="submitBtn" class="flex justify-center my-5">
        <button form="binConvertForm" type="submit" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-stone-300/75 hover:bg-stone-200 active:bg-stone-400 focus:ring-stone-100">Convert!</button>
    </div>
</main>

<style lang="postcss" global>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>