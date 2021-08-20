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

class WordFinder {
    private hashTable: Record<number, string[]> = {};

    private readonly getHash = (value: string): string => {
        return value + '55';
    }

    get size() { return Object.keys(this.hashTable ?? {}).length; }

    getWords = (s: string) => s.split(' ').map(s => s.trim()).filter(Boolean);

    test(magazine: string, sentence: string) {
        const wordsPool = this.getWords(magazine);
        const wordsToFind = this.getWords(sentence);

        for (let idx = 0, word; word = wordsPool[idx]; idx++) {
            this.add(word);
        }
        // console.log('saved to map:\n', this.hashTable);

        let wordCount = wordsToFind.length;

        while (wordsToFind.length) {
            const word = wordsToFind.pop();
            const [isFound] = this.exists(word);

            if (isFound) {
                wordCount--;
            } else {
                console.log('not found: ', word);
            };
        }
        // console.log(wordCount, 'more words to find', wordsToFind.length);
        return wordCount === 0;
    }

    exists(word: string): [boolean, string] {
        const key = this.getHash(word);

        const exists = this.hashTable?.[key];
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


function findWords(magazine: string, sentence: string) {
    const wordFinder = new WordFinder();
    const result = wordFinder.test(magazine, sentence);
    return result;
}

const magazine = 'I am going to nail This riddle Soon  this ';
const sentence = 'I am Going to nail this riddle going Soon';
const sentence2 = 'I am  to nail riddle  Soon This';
console.log('Find words \n************************\n', 'magazine:\n', magazine, '\nsentence:\n', sentence, '\n************************\n', findWords(magazine, sentence));
console.log('Find words \n************************\n', 'magazine:\n', magazine, '\nsentence2:\n', sentence2, '\n************************\n', findWords(magazine, sentence2));
