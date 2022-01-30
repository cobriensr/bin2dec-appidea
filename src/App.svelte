<script lang="ts">
import binConvert from './services/binConvert';
import { bindigit } from './stores/content';

window.onload = () => {
    const form = document.getElementById('binConvertForm');
    form?.addEventListener('submit', binConvert)
};
</script>

<main>
    <h1>Binary to Decimal Converter</h1>
    <div id="inputBox">
        <form id="binConvertForm" name="convert">
            <label for="bindigit">Enter a Binary Number:</label>
            <!-- User can enter up to 8 binary digits in one input field -->
            <!-- User must be notified if anything other than a 0 or 1 was entered -->
            <input inputmode="numeric" id="bindigit" name="bindigit_input" maxlength="8" minlength="1" placeholder=0 pattern="[0-1]*" required bind:value={$bindigit}>
        </form>
    </div>
    <div id="submitBtn">
        <button form="binConvertForm" type="submit">Convert!</button>
    </div>
    <!-- User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered -->
    <div id="output">
        <form id="unused">
            <label for="result">Decimal Converted Number:</label>
            <input type="text" id="result" name="outputBox" placeholder=0>
        </form>
    </div>
</main>

<style lang="postcss" global>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>