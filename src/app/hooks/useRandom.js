/**
 * 指定した桁数の乱数を生成する。
 * 
 * @param {number} digits
 * @return {string}
 */
export default (digits) => {

    if (typeof digits === 'number') {
        return calculate(digits)

    } else {
        const error = new Error()
        error.message = 'useRandom argument is not of type number.'
        throw error
    }
}

/**
 * @param {number} digits
 * @param {string}
 */
const calculate = (digits) => {

    const bottom = 10 ** digits

    let random = Math.floor(Math.random() * bottom)
    random = String(random).padStart(digits, 0)

    return random
}