function lastKNumbersSequence(n, k) {
    let sequence = [1];

    while (sequence.length < k) {
        let sum = 0;
        for (let i = 0; i < k; i++) {
            if (i < sequence.length) {
                sum += sequence[i];
                continue;
            }
            sum += 0;
        }
        sequence.push(sum);
    }

    for (let i = 0; i < n - k; i++) {
        sequence.push(sumLastKElements(sequence, k));
    }

    console.log(sequence.slice(0, n).join(" "));

    function sumLastKElements(sequence, k) {
        let sum = 0;

        for (let i = 1; i <= k; i++) {
            sum += sequence[sequence.length - i];
        }

        return sum;
    }
}

lastKNumbersSequence(8, 2)