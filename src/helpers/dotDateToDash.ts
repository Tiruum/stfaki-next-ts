export default function(dateInDots: string) {
    return dateInDots.replace(/(\d{2}\1).(\d{2}\2).(\d{4}\3)/, "$3-$2-$1")
}