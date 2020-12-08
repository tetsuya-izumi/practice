'use strict';

{
    const chord = document.getElementById('chord');

    chord.addEventListener('click', () => {
        const degree = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B', ];
        const n = Math.floor(Math.random () * 24);
        btn.textContent = degree[n];

        const min = ['', 'm', 'Maj7', 'mMaj7', ];
        const m = Math.floor(Math.random () * 4);
        two.textContent = min[m];

    });
}