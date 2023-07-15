export const colorToDarkColor = (color: string): string => {
    switch (color) {
        case 'blue':
            return 'sky'
        
        case 'purple':
            return 'fuchsia'

        case 'pink':
            return 'indigo'

        default:
            throw new Error(`Темный цвет не найден для ${color}`)
    }
}