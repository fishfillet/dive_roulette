// Problem: In Dive Roulette, when a person is picking options, we only want them to see one set of options at a time.
// Solution: Hide each set of options once selected, and show the next one.

// Listen for button click event:
// Example: Clicking a button to choose "Breakfast"
// 1. Submit string "Breakfast" as choice for dive meal type
// 2. Hide the current section - Remove an 'active' class
// 3. Show the next section - Apply an 'active' class
// 4. If it's the final section, request the data that we need to display


// Some example HTML
// ====================
<section class=""> // Closest section - Selected and removed class "active"
    <wrapper>
        <button/> // Click!
        <button/>
        <button/>
    </wrapper>
</section>

<section class="active">
    <wrapper>
        <button/>
        <button/>
        <button/>
    </wrapper>
</section>

// Some example CSS
// ====================
section {
    display: none; // Hidden by default
}

section.active {
    display: block; // One active section visible at a time
    height: 100%;
    width: 100%;

    // Animation for flair
    animation: 0.5s slide-in ease-in-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(100%);
    }
f
    to {
        transform: translateY(0);
    }
}

// Some example JS
// ====================
// Behavior / Event listener for button interaction
$("body").on("click", ".button", function(event) {
    console.log("Clicked the button!");

    var $target = event.target;
    var $section = $target.closest('section');
    var selection = $target.text();

    // Send a particular kind of data.... if necessary. I'm guessing here.
    if (if-its-the-first-section) {
        http.submit("meal":selection);
    }
    http.submit(selection);

    $section.removeClass('active');
    $section.next().addClass('active');

    if ($target.is(".special-button")) {
        // Do the special thing... if you can't write it more general
    }
});
