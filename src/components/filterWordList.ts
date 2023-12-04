interface IPValue {
    value?: string;
    geo?: string;
    noGeo?: string;
}

interface IPValueFormat {
    value?: string;
    geo: number[];
    noGeo: number[];
}

export function filterWordList(generalWord: string[], wordList: IPValue[], noListChar: string): string[] {
    const lessWordList = noListChar.split('');
    const wordListFormat = wordList.map(el => ({
        value: el.value,
        geo: el.geo?.split('').map(el => +el) ?? [],
        noGeo: el.noGeo?.split('').map(el => +el) ?? [],
    })) ?? [] as IPValueFormat[]

    return generalWord.map(el => el.toLowerCase()).filter(el => el.trim().length === 5)
        .filter(el => {
            let flag = true;
            el = el.toLowerCase()

            for (const a of el.split('')) {

                if (lessWordList.includes(a)) return false
            }

            for (const word of wordListFormat) {
                if (word.value) {
                    if (!el.split('').includes(word.value)) return false
                    for (const idx of word.noGeo) {
                        if (el[idx] == word.value) return false;
                    }
                    for (const idx of word?.geo) {
                        if (el[idx] !== word.value) return false;
                    }
                }

            }
            return flag;
        })
}

// const generalWord = ['аврал']
// const wordList = [
//     {
//         value: 'б', noGeo: [], geo: [0]
//     },
//     {
//         value: 'а', noGeo: [2], geo: [1]
//     },
//     {
//         value: 'н', noGeo: [], geo: [4]
//     },
// ]
//
// const lessWordList = 'ке'.split('')
// const list = generalWord.map(el => el.toLowerCase()).filter(el => el.trim().length === 5)
//     .filter(el => {
//         let flag = true;
//         el = el.toLowerCase()
//
//         for (const a of el.split('')) {
//             if (lessWordList.includes(a)) return false
//         }
//
//         for (const word of wordList) {
//             if (!el.split('').includes(word.value)) return false
//             for (const idx of word.noGeo) {
//                 if (el[idx] == word.value) return false;
//             }
//             for (const idx of word.geo) {
//                 if (el[idx] !== word.value) return false;
//             }
//         }
//         return flag;
//     })
//
// console.dir(list)
