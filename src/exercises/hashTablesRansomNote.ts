/*
Harold is a kidnapper who wrote a ransom note, but now he is worried
it will be traced back to him through his handwriting.
He found a magazine and wants to know if he can cut out whole words from it
and use them to create an untraceable replica of his ransom note.
The words in his note are case-sensitive
and he must use only whole words available in the magazine.
He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note,
print Yes if he can replicate his ransom note exactly using whole words from the magazine;
otherwise, print No.
*/
class WordChecker {
    private hashTable: Record<string, boolean> = {};

    private readonly getHash = (value: string): string => {
        return value + '55';
    }

    getWords = (s: string) => s.split(' ').map(s => s.trim()).filter(Boolean);

    test(magazine: string[], note: string[]) {
        // const magazine = this.getWords(magazine);
        // const note = this.getWords(note);

        for (let idx = 0, word; word = magazine[idx]; idx++) {
            this.add(word);
        }
        // console.log('saved to map:\n', this.hashTable);

        let wordCount = note.length;

        while (note.length) {
            const word = note.pop();
            const [isFound] = this.exists(word);

            if (isFound) {
                wordCount--;
            } else {
                console.log('not found: ', word);
            };
        }
        // console.log(wordCount, 'more words to find', note.length);
        return wordCount === 0;
    }

    exists(word: string): [boolean, string] {
        const key = this.getHash(word);

        const exists = this.hashTable && this.hashTable[key];
        // if (exists) {
        //     console.log('found exists', word, key, exists);
        // }

        return [exists, key];
    }

    add(word: string): boolean {
        const [isFound, key] = this.exists(word);

        if (isFound) return;

        if (!this.hashTable) { this.hashTable = {} }
        this.hashTable[key] = true;
    }
}

function checkMagazine(magazine: string[], note: string[]): void {
    const wordFinder = new WordChecker();
    const result = wordFinder.test(magazine, note);
    console.log(result ? 'Yes' : 'No');
}

function main(magazineInput, noteInput) {
    // const firstMultipleInput: string[] = magazine.replace(/\s+$/g, '').split(' ');

    // const m: number = parseInt(firstMultipleInput[0], 10);

    // const n: number = parseInt(firstMultipleInput[1], 10);

    const magazine: string[] = magazineInput.replace(/\s+$/g, '').split(' ');

    const note: string[] = noteInput.replace(/\s+$/g, '').split(' ');

    checkMagazine(magazine, note);
}
const magazine = 'I am going to nail This riddle Soon  this ';
const note = 'I am Going to nail this riddle going Soon';
const note2 = 'I am  to nail riddle  Soon This';
main(magazine, note);
main(magazine, note2);
// console.log('Find words \n************************\n', 'magazine:\n', magazine, '\nsentence:\n', note, '\n************************\n', main(magazine, note) ? 'Yes' : 'No');
// console.log('Find words \n************************\n', 'magazine:\n', magazine, '\nsentence2:\n', note2, '\n************************\n', main(magazine, note2) ? 'Yes' : 'No');
