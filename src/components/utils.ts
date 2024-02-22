export const initialItem = new Array(29999999).fill(0).map((_, i) => {
        return {
            id: i,
            isSelected: i === 29999998,
        };
    }
)

export const shuffle = (array: string[]) => {
    let newArray = [...array]; // Create a new array to avoid direct mutation
    let currentIndex = newArray.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [newArray[currentIndex], newArray[randomIndex]] = [
            newArray[randomIndex], newArray[currentIndex]];
    }

    return newArray; // Return the shuffled array
};