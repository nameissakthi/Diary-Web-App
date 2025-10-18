class WordsFunction {

    static capitalize(words: string) : string {
        if (!words) return words;

        return words
            .split(" ")
            .map(value =>
                value
                    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                    : value
            )
            .join(" ");
    }

    static makeTheTitleShort(title:string) : string {
        if(title.length>15){
            title = title.slice(0,15)
            title = title.concat(".........")
        }
        return title
    }
}

export default WordsFunction;