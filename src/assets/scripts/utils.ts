export const calcNewWidth = (height: number) => {
    return (height / 16) * 9
}

export const scale = (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

export const valueToTime = (value: number) => {
    const values = Number.parseFloat(value.toString())
        .toFixed(2)
        .toString()
        .split('.')
    const seconds = values[0]
    const milliseconds = values[1]
    return `${seconds.length < 2 ? '0' + seconds : seconds}:${milliseconds}`
}
