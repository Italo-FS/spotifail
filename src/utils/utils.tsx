// Função para embaralhar um array aleatoriamente
export function shuffleArray(array: any[]) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

interface ISearchStringArrayInStringArrayProps {
    stringArrayA?: string[];
}

export function SearchStringArrayInStringArray(stringArrayA?: string[], stringArrayB?: string[]) {
    if (!stringArrayA || !stringArrayB) return false;
    const treatedStringArrayA = stringArrayA.map((stringA) => stringA.toLowerCase());
    const treatedStringArrayB = stringArrayB.map((stringB) => stringB.toLowerCase());
    const result = treatedStringArrayA.some((treatedStringA) => treatedStringArrayB.includes(treatedStringA));
    return result;
}

export function StringComparison(stringA?: string, stringB?: string) {
    if (!stringA || !stringB) return false;
    const result = stringA.toLowerCase() === stringB.toLowerCase();
    return result;
}