/*--------------------------------------------------------
4-SUM.
 Given an array  a[  ]a[ \; ]a[] of nnn integers, 
 the 4-SUM problem is to determine if there exist distinct indices iii, jjj, kkk, and lll such that a[i]+a[j]=a[k]+a[l]a[i] + a[j] = a[k] + a[l]a[i]+a[j]=a[k]+a[l]. 
 Design an algorithm for the 4-SUM problem that takes time prop
// ----------------------------------------------------------------------------------------*/

type Tuple<T> = [a: T, b: T];

class HashTable<K = number, V = Tuple<number>> {
    private hashTable: Record<string, V> = null;

    private readonly getHash = ([a, b]: Tuple<number>): string => (a + b).toString();

    constructor(data?: number[]) {
        if (data) {

        }
    }

    get size() { return Object.keys(this.hashTable ?? {}).length; }

    test(data: number[] = []) {
        const foundKey = null;

        for (let idx = 0, a; a = data[idx]; idx++) {
            for (let j = idx + 1, b; b = data[j]; j++) {
                const foundValue = this.add([a, b] as unknown as V);
                if (foundValue) {
                    return [foundValue, [a, b]];
                }
            }
        }

        return null;
    }

    add(value: V) {
        const key = this.getHash(value as unknown as Tuple<number>);
        if (!this.hashTable) { this.hashTable = {} }

        if (this.hashTable[key]) {
            return this.hashTable[key];
        }
        else {
            this.hashTable[key] = value;
        }

        return null;
    }
}

function findWords(data: number[]) {
    const myHashTable = new HashTable<number, Tuple<number>>();
    const result = myHashTable.test(data);
    console.log('data size:', data.length, 'table size: ', myHashTable.size);
    return result;
}


const dataLength = 10;
const testData = Array(dataLength)
    .fill(void 0)
    .map(() => Math.floor(Math.random() * dataLength * 5));
console.log('sum is already here?\n************************\n', testData.join('\n'), '\n************************\n', findWords(testData));
